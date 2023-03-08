import { createClient } from 'contentful'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IBlog } from '../../@types/generated/contentful'
import Header from '../../components/shared/Header/Header'
import { cn } from '../../utils/style'

const colors = [
  'bg-red-100 text-red-800',
  'bg-orange-100 text-orange-800',
  'bg-amber-100 text-orange-800',
  'bg-green-100 text-orange-800',
  'bg-teal-100 text-teal-800',
  'bg-blue-100 text-blue-800',
  'bg-violet-100 text-violet-800',
]

export const getServerSideProps: GetServerSideProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const res = await client.getEntries({ content_type: 'blog' })

  return {
    props: {
      blogs: res.items,
    },
  }
}

interface Props {
  blogs: IBlog[]
}

const BlogPage: NextPage<Props> = (props) => {
  const { blogs } = props

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
          <Link href="/">
            <Image src="/close.png" width={24} height={24} alt="close" />
          </Link>
        </div>
      </div>

      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent publications
            </h2>
            {/* <p className="mt-3 text-xl text-gray-500 sm:mt-4"></p> */}
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {blogs.map((post, index) => (
              <Link
                href={`/blog/${post.fields.slug}`}
                key={post.sys.id}
                className="cursor-pointer"
              >
                <div>
                  <span
                    className={cn(
                      colors[index % 7],
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
                    )}
                  >
                    {post.fields.category}
                  </span>
                </div>
                <p className="text-xl font-semibold text-gray-900">
                  {post.fields.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.fields.shortDescription}
                </p>
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
                    <p className="text-sm font-medium text-gray-900">
                      Code Cleanse
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.sys.createdAt}>
                        {new Date(post.sys.createdAt).toDateString()}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>5 min. read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
