import React from 'react'
import Profile from '@/components/Profile'
import useTranslation from '@/hooks/useTranslation'
import Link from 'next/link'
import LatestPosts from '@/app/LatestPosts'
import Projects from './Projects'

// export const revalidate = 86400

const Title: React.FC<{ text: string }> = props => {
  const { text } = props

  return <h2 className="flex items-center justify-between mt-16 text-2xl font-bold">{text}</h2>
}

const TextBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-4 break-words leading-loose">{children}</p>
)

const CenteredLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <div className="text-center mt-6">
    <Link
      className="inline-flex items-center justify-center gap-1 font-medium text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
      href={href}
    >
      {children}
    </Link>
  </div>
)

const Home: React.FC = async () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="prose-container">
        <Profile />
        <TextBlock>
          你好 👋，我是一个前端开发人员（2017 ～ 至今），从事于直播行业，工作地在杭州。
        </TextBlock>
        <TextBlock>
          我一直对前端开发怀着浓厚的兴趣，同时也持续关注着设计领域的动态与发展，让我感到兴奋的一些事情包括
          CSS、设计风格、动效、打造出色的组件 API、以及让界面更加生动有趣。
        </TextBlock>
        <TextBlock>
          除此之外我还痴迷于提高个人生产力，我认为同样一个设备或 App 在我手中总能变得更好用 😎。
        </TextBlock>
        <Title text={t('home-page.posts.title')} />
        <LatestPosts />
        <CenteredLink href="/posts">{t('home-page.posts.view-all')}</CenteredLink>
        <Title text={t('home-page.projects.title')} />
        <Projects />
        <CenteredLink href="https://github.com/fencesitter1?tab=repositories">
          {t('home-page.projects.view-all')}
        </CenteredLink>
      </div>
    </>
  )
}

export default Home
