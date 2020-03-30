from sub1.parse import load_dataframes
import pandas as pd
import shutil


def sort_stores_by_score(dataframes, n=20, min_reviews=30):
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    """
    Req. 1-2-2 리뷰 개수가 `min_reviews` 미만인 음식점은 제외합니다.
    """
    less_min_reviews = stores_reviews[stores_reviews["review_cnt"] < min_reviews].index
    stores_reviews = stores_reviews.drop(less_min_reviews)

    """
    Req. 1-2-1 각 음식점의 평균 평점을 계산하여 높은 평점의 음식점 순으로 `n`개의 음식점을 정렬하여 리턴합니다
    """
    scores_group = stores_reviews.groupby(["store", "store_name"])
    scores = scores_group.mean().sort_values(by="score", ascending=False)
    return scores.head(n=n).reset_index()


def get_most_reviewed_stores(dataframes, n=20):
    """
    Req. 1-2-3 가장 많은 리뷰를 받은 `n`개의 음식점을 정렬하여 리턴합니다
    """
    store_most_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )

    # less_min_reviews = store_most_reviews[store_most_reviews["review_cnt"] < n].index
    # store_most_reviews = store_most_reviews.drop(less_min_reviews)

    review_group = store_most_reviews.groupby(["store", "store_name"])
    review = review_group.mean().sort_values(by="review_cnt", ascending=False)
    return review.head(n=n).reset_index()


def get_most_active_users(dataframes, n=20):
    """
    Req. 1-2-4 가장 많은 리뷰를 작성한 `n`명의 유저를 정렬하여 리턴합니다.
    """

    most_reviewer = dataframes["reviews"]
    most_reviewers = most_reviewer.groupby("user").size().to_frame().rename(columns={0: "counts"}).sort_values(by=["counts"],ascending=False)
    # print(most_reviewers)

    return most_reviewers.head(n=n).reset_index()


def main():
    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    stores_most_scored = sort_stores_by_score(data)
    get_most_reviewed_stored = get_most_reviewed_stores(data)
    get_most_active_userss = get_most_active_users(data)

    print("[최고 평점 음식점]")
    print(f"{separater}\n")
    for i, store in stores_most_scored.iterrows():
        print(
            "{rank}위: {store}({score}점)".format(
                rank=i + 1, store=store.store_name, score=store.score
            )
        )
    print(f"\n{separater}\n\n")

    print("[최고 리뷰 음식점]")
    print(f"{separater}\n")
    for i, review in get_most_reviewed_stored.iterrows():
        print(
            "{rank}위: {store}(리뷰 {review}개)".format(
                rank=i + 1, store=review.store_name, review=review.review_cnt
            )
        )
    print(f"\n{separater}\n")

    print("[최고 리뷰어]")
    print(f"{separater}\n")
    for i, reviewer in get_most_active_userss.iterrows():
        print(
            "{rank}위: USER_ID = {user} , 리뷰개수 = {counts}".format(
                rank=i + 1, user=reviewer.user, counts=reviewer.counts
            )
        )
    print(f"\n{separater}\n")


if __name__ == "__main__":
    main()
