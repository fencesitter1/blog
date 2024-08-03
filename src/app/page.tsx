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
        <TextBlock>你好 👋，我是无为</TextBlock>
        <TextBlock>就读于ECUST控制专业,目前研二</TextBlock>
        <TextBlock>
          真正开始写代码是去年，学习前端也是去年，希望一切都还来得及，早日变强哈哈
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
