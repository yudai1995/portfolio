import Head from "next/dist/shared/lib/head";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import ContentLayout from "../components/Layout/ContentLayout";
import LinkLayout from "../components/Layout/LinkLayout";
import Modal from "../components/Modal";
import styles from "../styles/works.module.scss";

// 仕様種類
class Tec {
  constructor(public id: number, public name: string) {}
}
const tecs = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "Three.js",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "MySQL",
];
const tecList = tecs.map((tec, index) => new Tec(index, tec));

// インスタンスから表示する文字列を返す
const getTectText = (tecNum: number[]): string => {
  let text = "";
  tecNum.forEach((num) => {
    if (text === "") text += tecList[num].name;
    else text += ", " + tecList[num].name;
  });
  return text;
};

const works: {
  id: number;
  name: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgLayout: "responsive" | "fixed" | "fill" | "intrinsic";
  tecNum: number[];
  link?: {
    pagename: string;
    url: string;
    imgSrc: string;
    linkIcon: string;
    linkWidth: number;
    linkHeight: number;
  }[];
  comment: string[];
}[] = [
  {
    id: 0,
    name: "家計簿管理ツール",
    imgSrc: "/images/works/budget-management-tool-img01.png",
    imgWidth: 1284,
    imgHeight: 963,
    imgLayout: "responsive",
    tecNum: [0, 1, 6, 8, 4, 9, 10, 11],
    link: [
      {
        pagename: "GitHub",
        url: "https://github.com/YUDAI1995/budget-management-tool",
        imgSrc: "/images/github-icon01.png",
        linkIcon: "",
        linkWidth: 64,
        linkHeight: 64,
      },
      {
        pagename: "サイト",
        url: "https://budget-management-tool.herokuapp.com/",
        imgSrc: "/images/webpage-icon01.png",
        linkIcon: "",
        linkWidth: 64,
        linkHeight: 64,
      },
    ],
    comment: [
      "現金支出を、より管理しやすいようにしたいという思いがあり、作成したサイトです。",
      "目的、仕様の考案やAdobe XDを用いてのワイヤーフレームも作成をしました。",
    ],
  },
  {
    id: 1,
    name: "舞台照明シミュレーションツール",
    imgSrc: "/images/works/stage-lighting-simulation-img01.png",
    imgWidth: 1920,
    imgHeight: 967,
    imgLayout: "responsive",
    tecNum: [0, 2, 3, 5, 9, 10],
    comment: [
      "舞台機構設営前の照明シミュレーションを目的に、学生時に作成したものです。",
      "Three.jsを用いて3Dモデリングを行いました。",
    ],
  },
];

const Works = () => {
  // Modal開閉ステータスのstate
  const [selectedItem, setSelectedItem] = useState<string | false>(false);

  // クリックされた箇所の情報を切り替える
  const onOpenModalHandler = (name: string) => {
    setSelectedItem(name);
  };
  const onCloseModalHandler = () => {
    setSelectedItem(false);
  };

  // サブタイトル
  const subTitle = "主な仕様環境";

  return (
    <Layout>
      <Head>
        <title>Works | Yudai Yamamoto</title>
        <meta name="description" content="制作物を掲載しております" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout title="Works">
        <>
          <div className={styles.worksWrapper}>
            {works.map((work) => (
              <section className={styles.workSection} key={work.id}>
                <div
                  className={styles.content}
                  onClick={() => onOpenModalHandler(work.name)}
                >
                  <figure className={styles.img}>
                    <Image
                      src={work.imgSrc}
                      className={styles.thumb}
                      alt={work.name}
                      layout={work.imgLayout}
                      width={work.imgWidth}
                      height={work.imgHeight}
                    />
                  </figure>
                </div>
                <h2 className={styles.title}>{work.name}</h2>
                <Modal
                  isShow={work.name === selectedItem}
                  onClose={onCloseModalHandler}
                >
                  <section className={styles.detail}>
                    <h2 className={styles.title}>{work.name}</h2>
                    <h3 className={styles.subTitle}>{subTitle}</h3>
                    <p>{getTectText(work.tecNum)}</p>
                    <div className={styles.comment}>
                      {work.comment.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </div>

                    {work.link ? (
                      <ul
                        className={`${styles.linkList} col${work.link.length}`}
                      >
                        {work.link.map((item, index) => (
                          <li
                            className={`${styles.list} arrowIcon`}
                            key={index}
                          >
                            <LinkLayout
                              url={item.url}
                              name={item.pagename}
                              imgSrc={item.imgSrc}
                              imgWidth={64}
                              imgHeight={64}
                            />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <></>
                    )}
                  </section>
                </Modal>
              </section>
            ))}

            <section className={styles.workSection}>
              <div
                className={styles.content}
                onClick={() =>
                  onOpenModalHandler("Yudai Yamamoto ポートフォリオ")
                }
              >
                <figure className={styles.img}>
                  <Image
                    src="/images/works/my-portfolio-img01.png"
                    className={styles.thumb}
                    alt="Yudai Yamamoto ポートフォリオ"
                    layout={"responsive"}
                    width={1584}
                    height={934}
                  />
                </figure>
              </div>
              <h2 className={styles.title}>
                <span className="logoName">Yudai Yamamoto</span> ポートフォリオ
              </h2>
              <Modal
                isShow={"Yudai Yamamoto ポートフォリオ" === selectedItem}
                onClose={onCloseModalHandler}
              >
                <section className={styles.detail}>
                  <h2 className={styles.title}>
                    <span className="logoName">Yudai Yamamoto</span>{" "}
                    ポートフォリオ
                  </h2>
                  <h3 className={styles.subTitle}>{subTitle}</h3>
                  <p className={styles.text}>HTML, Sass, Next.js, TypeScript</p>
                  <div className={styles.comment}>
                    <p>本サイトです。Next.jsを用いております。</p>
                  </div>
                  <ul className={`${styles.linkList} col1`}>
                    <li className={`${styles.list} arrowIcon`}>
                      <LinkLayout
                        url="https://github.com/YUDAI1995/my-portfolio-site"
                        name="GitHub"
                        imgSrc="/images/github-icon01.png"
                        imgWidth={64}
                        imgHeight={64}
                      />
                    </li>
                  </ul>
                </section>
              </Modal>
            </section>
            <section className={`${styles.workSection} others`}>
              <div className={styles.othersContent}>
                <p className={styles.text}>
                  よろしければGitHubもご覧ください。
                </p>
                <p className={`${styles.link} arrowIcon`}>
                  <LinkLayout
                    url="https://github.com/YUDAI1995"
                    name="GitHub"
                    imgSrc="/images/github-icon01.png"
                    imgWidth={64}
                    imgHeight={64}
                  />
                </p>
              </div>
            </section>
          </div>
        </>
      </ContentLayout>
    </Layout>
  );
};

export default Works;
