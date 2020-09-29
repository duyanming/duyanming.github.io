import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>快速入门</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <b>Viper</b> 简单易用，拉取项目代码、执行工程database目录下的数据库脚本SQL文件创建数据库、
        修改 <code>ViperService</code> 数据库连接字符串，便可依次启动注册中心 <code>ViperCenter</code>、服务Provider <code>ViperService</code>,
        、网关已经监控 <code>Viper</code>。
      </>
    ),
  },
  {
    title: <>安全、稳定、高可用</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Viper 是微服务快速开发框架<code>Anno<sub>后期整理后开源核心代码</sub></code>下的一个模板工程，
        底层通讯可以随意切换<code>thrift</code> <code>grpc</code>。
       <b> 自带服务发现、调用链追踪、Cron 调度、限流、事件总线、CQRS 、DDD、类似MVC的开发体验，插件化开发</b>。
      </>
    ),
  },
  {
    title: <>全平台可监控</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <b> 一个<code>不可监控</code>的微服务平台是<code>可怕的</code></b>，出了问题<b> 难以准确定位问题的根源</b>，
        Anno则提供了一套完整的监控体系，包括<b><code>链路追踪</code>、
        <code>服务占用的系统资源</code>、系统自身 <code>CPU、内存、硬盘使用率</code>
        </b>实时可监控等等。
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
      title={`Viper 是基于.NET平台下的Anno微服务框架的一个示例项目, ${siteConfig.title}`}
      description="Viper 是基于.NET平台下的Anno微服务框架的一个示例项目,包含注册中心、服务注册、服务发现、调用链追踪、平台性能监控、接口文档">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              快速入门
            </Link>
          </div>
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
      </main>
    </Layout>
  );
}

export default Home;
