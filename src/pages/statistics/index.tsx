import { type NextPage } from "next"
import Head from "next/head"

import { Layout } from "~/ui"
import { cn } from "~/utils/helpers"

const StatisticsPage: NextPage = () => (
  <>
    <Head>
      <title>Hirica statistics</title>
      <meta
        name="description"
        content="Compensation statistics of current year in the IT industry"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <main
        className={cn(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "bg-[#FDFBF6]",
          "text-left"
        )}
      >
        <h1>Statistics (building)</h1>
        <p className="text-lg">
          <a
            href="https://www.glassdoor.com/Salaries/it-salary-SRCH_KO0,2.htm"
            className={cn("text-blue-600", "hover:underline")}
          >
            Glassdoor
          </a>
        </p>
        <p className="text-lg">
          <a
            href="https://www.levels.fyi/"
            className={cn("text-blue-600", "hover:underline")}
          >
            Levels.fyi
          </a>
        </p>
      </main>
    </Layout>
  </>
)

export default StatisticsPage
