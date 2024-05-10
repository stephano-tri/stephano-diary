import {getAllJsonData} from "@/utils/getAllJsonData";

const handler = (req, res) => {
    const diaryDatas = getAllJsonData('src/datas');

    const titleDatas : string[] = diaryDatas.map((diary) => {
        return diary.title;
    })

    res.status(200).json({
        titles : titleDatas
    })
}

export default handler;