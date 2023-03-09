import { createClient } from 'contentful'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOCKS } from '@contentful/rich-text-types'
import { IBlog, IBlogFields } from '../../@types/generated/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  console.log(params.id)

  const { items } = await client.getEntries<IBlogFields>({
    content_type: 'blog',
    'fields.slug': params.id,
  })

  return {
    props: { blog: items[0] },
  }
}

interface Props {
  blog: IBlog
}

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-5 text-[#1f2937] leading-7">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-bold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl font-bold">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg font-bold">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base font-bold">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-sm font-bold">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="ml-12">{children}</li>
    ),
  },
}

const BlogDetailPage: NextPage<Props> = (props) => {
  const { blog } = props
  const router = useRouter()

  return (
    <div>
      <div className="hire-header w-full bg-black p-6">
        <div className="flex justify-between items-center">
          <div />
          <Link href="/">
            <Image
              priority
              src="/logo-full.png"
              width={200}
              height={32}
              alt="logo"
            />
          </Link>
          <button onClick={router.back}>
            <Image src="/close.png" width={24} height={24} alt="close" />
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-16">
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex justify-center items-center">
            <span className="sr-only">Code Cleanse</span>
            <Image
              width={32}
              height={32}
              className="rounded-full object-contain"
              src="/logo-icon.png"
              alt="Code Cleanse"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Code Cleanse</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={blog.sys.createdAt}>
                {new Date(blog.sys.createdAt).toDateString()}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>5 min. read</span>
            </div>
          </div>
        </div>

        <p className="my-4 text-3xl font-semibold text-gray-900">
          {blog.fields.title}
        </p>

        <div>
          <p>{documentToReactComponents(blog.fields.content, options)}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
