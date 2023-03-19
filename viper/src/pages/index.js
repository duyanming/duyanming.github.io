import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>简单、优雅、体验好</>,
    imageUrl: 'img/homebanner1.jpg',
    description: (
      <>
        <b>Viper</b> 是Anno微服务框架的一个示例项目，也是一个Dashboard面板项目。<code>Anno</code> 简单易用、高性能、可监控、可追踪。
        文档部分我们以<code>Viper</code>作为示例来学习Anno。简单的注册中心、优雅的容器服务、好用的客户端库。
        自带服务发现、调用链追踪、Cron调度、限流、事件总线依赖少。类似MVC的开发体验及插件化开发。
      </>
    ),
  },
  {
    title: <>安全、稳定、高可用</>,
    imageUrl: 'img/homebanner3.jpg',
    description: (
      <>
        <b>Anno</b> 底层通讯RPC库我们采用了有很多成功案例（<code>HBase、Hive</code>等等）并且是<code>Apache</code>顶级项目的<code>Thrift</code>，以及谷歌出品深受用户喜爱的
        <code>Grpc</code>并且有微软加持。两个通讯库我们可以任选其一，并且切换通讯库的时候业务代码可以实现零改动（通讯库和业务依赖库深度解耦）。
      </>
    ),
  },
  {
    title: <>全平台、可追踪、可监控</>,
    imageUrl: 'img/homebanner2.jpg',
    description: (
      <>
        一个<code>不可监控</code>的微服务平台是<code>可怕</code>的，出了问题 难以<code>快速</code>、<code>准确</code>、定位问题的<code>根源</code>，
        然而<b>Anno</b>则提供了完善的监控体系，包括<code>链路追踪</code>、
        <code>服务占用的系统资源</code>、系统自身 <code>CPU、内存、硬盘使用率</code>
        实时可监控等等。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={clsx(styles.featureTitle)}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Anno 是一个可监控、可追踪、简单易用、高性能的微服务引擎框架, ${siteConfig.title}`}
      description="Anno 是一个可监控、可追踪、简单易用、高性能的微服务引擎框架,包含注册中心、服务注册、服务发现、调用链追踪、平台性能监控、接口文档">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h2 className="hero__title">{siteConfig.title}</h2>
          <p className="hero__subtitle"><h3>{siteConfig.tagline}</h3></p>
          <p><h4>QQ交流群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=6dg5yMmXtu49mPgJeLjw6ZeCozurwRsU&jump_from=webapi">478399354</a></h4></p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              快速入门
            </Link>
          </div>
        </div>
        <div className={styles.imgHome}>
         <img  src="img/home.png" alt="home" />
        </div>
      </header>
      <main>
        
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={styles.footer}>
        <img  src="https://z3.ax1x.com/2021/06/29/Rade3R.png" alt="home" />
        </div>
        <div className={styles.footer}>
          <img  src="https://z3.ax1x.com/2021/06/29/RadaKP.png" alt="home" />
        </div>

        <div className={styles.footer}>
          <img  src="https://z3.ax1x.com/2021/06/29/Ra0tnP.png" alt="home" />
        </div>

        <div className={styles.footer}>
          <img  src="https://z3.ax1x.com/2021/06/29/Ra0ocR.png" alt="home" />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
