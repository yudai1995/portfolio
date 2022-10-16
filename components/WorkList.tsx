import { useState } from 'react';
import styles from './styles/WorkList.module.scss';
import LinkLayout from './Layout/LinkLayout';
import Modal from './Modal';
import { works, getTechnologyListText } from './Model/Works';
import Image from 'next/image';
import ContentLayout from './Layout/ContentLayout';

const WorkList: React.FC = () => {
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
  const subTitle = '主な仕様環境';

  return (
    <ContentLayout title='Works'>
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
                <p>{getTechnologyListText(work.tecNum)}</p>
                <div className={styles.comment}>
                  {work.comment.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>

                {work.link ? (
                  <ul className={`${styles.linkList} col${work.link.length}`}>
                    {work.link.map((item, index) => (
                      <li className={`${styles.list} arrowIcon`} key={index}>
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
            onClick={() => onOpenModalHandler('Yudai Yamamoto ポートフォリオ')}
          >
            <figure className={styles.img}>
              <Image
                src='/images/works/my-portfolio-img01.png'
                className={styles.thumb}
                alt='Yudai Yamamoto ポートフォリオ'
                layout={'responsive'}
                width={1584}
                height={934}
              />
            </figure>
          </div>
          <h2 className={styles.title}>
            <span className='logoName'>Yudai Yamamoto</span> ポートフォリオ
          </h2>
          <Modal
            isShow={'Yudai Yamamoto ポートフォリオ' === selectedItem}
            onClose={onCloseModalHandler}
          >
            <section className={styles.detail}>
              <h2 className={styles.title}>
                <span className='logoName'>Yudai Yamamoto</span> ポートフォリオ
              </h2>
              <h3 className={styles.subTitle}>{subTitle}</h3>
              <p className={styles.text}>
                {getTechnologyListText([0, 2, 7, 4])}
              </p>
              <div className={styles.comment}>
                <p>本サイトです。Next.jsを用いております。</p>
              </div>
              <ul className={`${styles.linkList} col1`}>
                <li className={`${styles.list} arrowIcon`}>
                  <LinkLayout
                    url='https://github.com/YUDAI1995/my-portfolio-site'
                    name='GitHub'
                    imgSrc='/images/github-icon01.png'
                    imgWidth={64}
                    imgHeight={64}
                  />
                </li>
              </ul>
            </section>
          </Modal>
        </section>
      </div>
      <div className={styles.others}>
        <p className={styles.text}>よろしければGitHubもご覧ください。</p>
        <p className={`${styles.link} arrowIcon`}>
          <LinkLayout
            url='https://github.com/YUDAI1995'
            name='GitHub'
            imgSrc='/images/github-icon01.png'
            imgWidth={64}
            imgHeight={64}
          />
        </p>
      </div>
    </ContentLayout>
  );
};

export default WorkList;
