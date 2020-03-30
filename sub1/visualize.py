import itertools
from collections import Counter

from folium import folium
from folium.plugins import MarkerCluster
from parse import load_dataframes
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm


def set_config():
    # 폰트, 그래프 색상 설정
    font_list = fm.findSystemFonts(fontpaths=None, fontext="ttf")
    if any(["notosanscjk" in font.lower() for font in font_list]):
        plt.rcParams["font.family"] = "Noto Sans CJK JP"
    else:
        if not any(["malgun" in font.lower() for font in font_list]):
            raise Exception(
                "Font missing, please install Noto Sans CJK or Malgun Gothic. If you're using ubuntu, try `sudo apt install fonts-noto-cjk`"
            )

        plt.rcParams["font.family"] = "Malgun Gothic"

    sns.set_palette(sns.color_palette("Spectral"))
    plt.rc("xtick", labelsize=6)


def show_store_categories_graph(dataframes, n=30):
    """
    Tutorial: 전체 음식점의 상위 `n`개 카테고리 분포를 그래프로 나타냅니다.
    """

    stores = dataframes["stores"]

    # 모든 카테고리를 1차원 리스트에 저장합니다
    categories = stores.category.apply(lambda c: c.split("|"))
    categories = itertools.chain.from_iterable(categories)

    # 카테고리가 없는 경우 / 상위 카테고리를 추출합니다
    categories = filter(lambda c: c != "", categories)
    categories_count = Counter(list(categories))
    best_categories = categories_count.most_common(n=n)
    df = pd.DataFrame(best_categories, columns=["category", "count"]).sort_values(
        by=["count"], ascending=False
    )

    # 그래프로 나타냅니다
    chart = sns.barplot(x="category", y="count", data=df)
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("음식점 카테고리 분포")
    plt.show()


def show_store_review_distribution_graph(dataframes, n=20):
    """
    Req. 1-3-1 전체 음식점의 리뷰 개수 분포를 그래프로 나타냅니다. 
    """
    # X축 : 음식점, Y축 : 리뷰 개수

    stores = dataframes["stores"]
    review_cnt = dataframes["reviews"]

    best_reviews = pd.merge(
        stores, review_cnt, left_on="id", right_on="review_cnt"
    )

    best_reviews = pd.DataFrame(best_reviews, columns=["store_name", "review_cnt"]).sort_values(
        by=["review_cnt"], ascending=False
    )

    chart = sns.barplot(x="store_name", y="review_cnt", data=best_reviews)
    chart.set_xticklabels(chart.get_xticklabels(), rotation=45)
    plt.title("음식점 리뷰 개수 분포")
    plt.show()

def show_store_average_ratings_graph(dataframes):
    """
    Req. 1-3-2 각 음식점의 평균 평점을 그래프로 나타냅니다.
    """
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )

    # 같은 가게 합치기
    scores_group = stores_reviews.groupby(["store", "store_name"])

    # 평균내기
    scores = scores_group.mean()

    # index를 새로 부여
    scores = scores.reset_index()

    # 그래프로 나타냅니다
    sns.scatterplot(x="store", y="score", data=scores)
    plt.title("음식점 평균 평점 분포도")
    plt.show()


def show_user_review_distribution_graph(dataframes):
    """
    Req. 1-3-3 전체 유저의 리뷰 개수 분포를 그래프로 나타냅니다.
    """
    most_review = dataframes["users"]

    # id별로 묶어서 개수 세서 counts라는 이름으로 저장
    counts = most_review.groupby(['id']).size().to_frame().rename(columns={0: "counts"})

    counts = counts.reset_index()

    # 그래프로 나타냅니다
    sns.scatterplot(x="id", y="counts", data=counts)
    plt.title("전체 유저의 리뷰 개수 분포")
    plt.show()


def show_user_age_gender_distribution_graph(dataframes):
    """
    Req. 1-3-4 전체 유저의 성별/나이대 분포를 그래프로 나타냅니다.
    """
    users = dataframes['users']

    # 남 / 여를 구분
    sns.distplot(users[users["gender"] == "남"]["age"], color="blue", label="남성")
    sns.distplot(users[users["gender"] == "여"]["age"], color="red", label="여성")
    plt.title("전체 유저의 성별/나이대 분포")
    plt.legend(title="gender")
    plt.show()


def show_stores_distribution_graph(dataframes):
    """
    Req. 1-3-5 각 음식점의 위치 분포를 지도에 나타냅니다.
    """

    # 리뷰 갯수 필터
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )

    # 리뷰갯수 10개 미만 제외
    re_delete = stores_reviews["store"].value_counts()  # store 기준 value_counts()
    del_list = list(re_delete[re_delete < 10].index)
    stores_reviews = stores_reviews.set_index("id_x")
    stores_reviews.drop(del_list, axis="index", inplace=True)  # row // axis="column" -> delete column
    scores_group = stores_reviews.groupby(["store", "store_name"])

    # 평점
    scores = round(scores_group.mean(), 2).reset_index()

    # 정렬
    remarged_store_info = pd.merge(
        scores, dataframes["stores"], left_on="store", right_on="id"
    )

    # data 갯수
    size = remarged_store_info["store"].count()

    # 평점 3.0이상인 음식점
    mean_over_3 = []  # 평점 3.00 초과

    # 분류
    for i in range(0, size):
        mean_score = remarged_store_info.loc[i]["score"]
        if mean_score > 3.00:
            mean_over_3.append(remarged_store_info.loc[i])

    # map & marker
    # start
    m = folium.Map(
        location=[37.501310, 127.039641],  # 멀티캠퍼스 위도랑 경도
        zoom_start=15
    )

    marker_cluster = MarkerCluster().add_to(m)  # marker cluster

    size_over3 = len(mean_over_3)

    for i in range(0, size_over3):
        store = mean_over_3[i]
        folium.Marker(
            location=[store.latitude, store.longitude],
            popup=store.store_name_y,
            icon=folium.Icon(color='red')
        ).add_to(marker_cluster)

    m.save('./map.html')


def main():
    set_config()
    data = load_dataframes()
    # show_store_categories_graph(data)
    # show_store_review_distribution_graph(data)
    # show_store_average_ratings_graph(data)
    # show_user_review_distribution_graph(data)
    # show_user_age_gender_distribution_graph(data)
    show_stores_distribution_graph(data)


if __name__ == "__main__":
    main()
