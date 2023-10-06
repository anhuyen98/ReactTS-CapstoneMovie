import { MovieCalendar } from "types"
import format from 'date-fns/format'
import { formatTime } from "utils/formatTime";
import { ShowTime, Tabs } from "components";

type ShowType = {
  lichChieu?: MovieCalendar
}

export const Show = ({ lichChieu }: ShowType) => {
  console.log("lichChieu: ", lichChieu);
  const arr: string[] = []
  lichChieu?.forEach((item) => {
    const dayMS = format(formatTime(String(item.ngayChieuGioChieu)), 'dd/MM/yyyy')
    const index = arr.indexOf(dayMS)
    if (index === -1) {
      arr.push(dayMS)
    }
  })
  console.log("arr: ", arr);
  return (
    <div className="text-center p-10 shadow-2xl">
      <Tabs
        tabPosition="top"
        onChange={(activeKey) => {
          console.log(activeKey)
        }}
        items={arr?.map((day, index) => {
          return {
            key: String(index),
            label: day,
            children: <ShowTime day={day} lichChieu={lichChieu}/>,
          }
        })}
      />

    </div>
  )
}
