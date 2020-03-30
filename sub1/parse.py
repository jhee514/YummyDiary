import datetime
import json
import pandas as pd
import os
import shutil

DATA_DIR = "../data"
DATA_FILE = os.path.join(DATA_DIR, "data.json")
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

store_columns = (
    "id",  # 음식점 고유번호
    "store_name",  # 음식점 이름
    "branch",  # 음식점 지점 여부
    "area",  # 음식점 위치
    "tel",  # 음식점 번호
    "address",  # 음식점 주소
    "latitude",  # 음식점 위도
    "longitude",  # 음식점 경도
    "category",  # 음식점 카테고리
)

review_columns = (
    "id",  # 리뷰 고유번호
    "store",  # 음식점 고유번호
    "user",  # 유저 고유번호
    "score",  # 평점
    "content",  # 리뷰 내용
    "reg_time",  # 리뷰 등록 시간
    "review_cnt", # 리뷰 개수
)

menu_columns = (
    "id",  # 식당 고유번호
    "store_name",  # 음식점 이름
    "menu_name",  # 메뉴 이름
    "menu_price",  # 메뉴 가격
)

user_columns = (
    "id",  # 유저 고유 번호
    "gender",  # 유저 성별
    "age"  # 유저 나이
)

def import_data(data_path=DATA_FILE):
    """
    Req. 1-1-1 음식점 데이터 파일을 읽어서 Pandas DataFrame 형태로 저장합니다
    """

    try:
        with open(data_path, encoding="utf-8") as f:
            data = json.loads(f.read())
    except FileNotFoundError as e:
        print(f"`{data_path}` 가 존재하지 않습니다.")
        exit(1)

    stores = []  # 음식점 테이블
    reviews = []  # 리뷰 테이블
    menus = []  # 메뉴 테이블
    users = []
    menu_id = 0

    for d in data:

        categories = [c["category"] for c in d["category_list"]]
        stores.append(
            [
                d["id"],
                d["name"],
                d["branch"],
                d["area"],
                d["tel"],
                d["address"],
                d["latitude"],
                d["longitude"],
                "|".join(categories),
            ]
        )
        # 메뉴
        # 음식점의 고유id, 가게이름, 메뉴이름, 메뉴가격을 리스트에 담고 리턴합니다.

        # menunames = [mn["menu"] for mn in d["menu_list"]]
        # menuprices =[mp["price"] for mp in d["menu_list"]]
        #
        # menus.append(
        #     [d["id"], d["name"], menunames , menuprices]
        # )



        for menu in d['menu_list']:
            price = menu['price']
            name = menu['menu']
            menus.append([menu_id, d["id"], name, price])
            menu_id = menu_id + 1

        # 리뷰리스트에 리뷰 갯수를 추가하였습니다.
        for review in d["review_list"]:
            r = review["review_info"]
            u = review["writer_info"]

            reviews.append(
                [r["id"], d["id"], u["id"], r["score"], r["content"], r["reg_time"], d["review_cnt"]]
            )

        for user in d['review_list']:
            u = user['writer_info']
            idn = u["id"]
            gender = u["gender"]
            today = int(datetime.datetime.today().year)
            born = int(u['born_year'][0:5])
            age = today - born
            users.append([idn, gender, age])

    store_frame = pd.DataFrame(data=stores, columns=store_columns)
    review_frame = pd.DataFrame(data=reviews, columns=review_columns)
    menu_frame = pd.DataFrame(data=menus, columns=menu_columns)
    user_frame = pd.DataFrame(data=users, columns=user_columns)

    return {"stores": store_frame, "reviews": review_frame, "menus": menu_frame, "users": user_frame}


def dump_dataframes(dataframes):
    pd.to_pickle(dataframes, DUMP_FILE)


def load_dataframes():
    return pd.read_pickle(DUMP_FILE)


def main():

    print("[*] Parsing data...")
    data = import_data()
    print("[+] Done")

    print("[*] Dumping data...")
    dump_dataframes(data)
    print("[+] Done\n")

    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    print("[음식점]")
    print(f"{separater}\n")
    # df = pd.DataFrame(data["stores"])
    # print(df.head(20))
    print(data["stores"].head(20))
    print(f"\n{separater}\n\n")

    print("[리뷰]")
    print(f"{separater}\n")
    print(data["reviews"].head(20))
    print(f"\n{separater}\n\n")

    print("[메뉴]")
    print(f"{separater}\n")
    print(data["menus"].head(20))
    print(f"\n{separater}\n\n")

    print("[유저]")
    print(f"{separater}\n")
    print(data["users"].head())
    print(f"\n{separater}\n\n")


if __name__ == "__main__":
    main()
