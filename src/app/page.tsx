import Image from "next/image";
import Link from "next/link";
import { getJsonData } from "@/utils/getJsonData";

async function getData() {
    const res = await fetch('http://localhost:3000/api/list', {cache: "no-store"})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {

  const diaryData = await getData();

  return (
      <div className="container mx-auto px-4 pt-10">
          <div className="text-lg sm:text-left">
              <div className="flex flex-row justify-start items-center">
                  <Link className={"flex flex-row"} href={"https://github.com/stephano-tri"}>
                      <div className="pr-2">
                          <Image
                              className={"rounded-full aspect-square object-cover"}
                              src="/profile.jpg"
                              alt={"github profile"}
                              width={28}
                              height={28}
                              priority
                          ></Image>
                      </div>
                      <div>
                          Stephano: Success depends on attitude.
                      </div>
                  </Link>
              </div>
          </div>

          <div className={"flex flex-row justify-start items-center pt-10"}>
              <div className={"text-lg sm:text-left px-10"}>
                  {diaryData.titles.map((title : string) => {
                      return (
                          <div key={title} className={"second-child-pt-10"}>{title}</div>
                      )
                  })}
              </div>
          </div>
      </div>
  );
}

