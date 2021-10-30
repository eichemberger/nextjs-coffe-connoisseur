import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';
import Card from '../components/card';

import coffeeStores from '../data/coffee-store.json';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('banner boton');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={'View stores nearby'}
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src='/static/hero-image.png'
            alt='hero-img'
            width={700}
            height={400}
          />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeStore) => {
            return (
              <Card
                name={coffeStore.name}
                imgUrl={coffeStore.imgUrl}
                href={`/coffee-store/${coffeStore.id}`}
                className={styles.card}
                key={coffeStore.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
