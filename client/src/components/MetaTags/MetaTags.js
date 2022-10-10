import Head from 'next/head'
import Logo from '../../../public/favicon-32x32.png'

const MetaTags = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:image" content={image ? image : Logo} key="image" />
    </Head>
  )
}

export default MetaTags
