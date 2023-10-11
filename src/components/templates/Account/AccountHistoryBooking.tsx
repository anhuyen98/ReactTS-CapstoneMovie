
import { useAuth } from "hooks"
import { ChairBook, ListChair, UserByAccessToken } from "types";
import format from 'date-fns/format'
import { formatTime } from "utils/formatTime";
import styled from "styled-components";
// import { ColumnType } from "antd/es/table";
// import { Table } from "components";
export const AccountHistoryBooking = () => {
  const { user } = useAuth()
  const mapNe = (user as UserByAccessToken<ListChair<ChairBook>>).thongTinDatVe
  // interface DataType {
  //   ngayDat: string,
  //     gioDat: string,
  //     hinhAnh: string,
  //     tenPhim: string,
  //     thoiLuongPhim: string,
  //     danhSachGhe: {
  //         soGhe: string,
  //         tenRap: string,
  //         tenHeThongRap: string
  //   }[]
  // }
  // const columns: ColumnType<ChairBook> = [
  //   // {
  //   //   title: 'Hình ảnh',
  //   //   dataIndex: 'hinhAnh',
  //   //   key: 'hinhAnh',
  //   // },
  //   // {
  //   //   title: 'Tên Phim',
  //   //   dataIndex: 'tenPhim',
  //   //   key: 'tenPhim'
  //   // },
  //   // {
  //   //   title: 'Ngày đặt',
  //   //   dataIndex: 'ngayDat',
  //   //   key: 'ngayDat'
  //   // },
  //   // {
  //   //   title: 'Giờ đặt',
  //   //   dataIndex: 'gioDat',
  //   //   key: 'gioDat',
  //   // },
  //   // {
  //   //   title: 'Thời lượng phim',
  //   //   dataIndex: 'thoiLuongPhim',
  //   //   key: 'thoiLuongPhim',
  //   // },
  //   // {
  //   //   title: 'Danh sách Ghế',
  //   //   children: [
  //       {
  //         title: 'Số ghế',
  //         dataIndex: 'soGhe',
  //         key: 'soGhe',
  //       },
  //       {
  //         title: 'Rạp',
  //         dataIndex: 'tenRap',
  //         key: 'tenRap',
  //       },
  //       {
  //         title: 'Địa chỉ',
  //         dataIndex: 'tenHeThongRap',
  //         key: 'tenHeThongRap',
  //       },
  //   //   ]
  //   // },

  // ]
  // const dataSource = 
  // return {
  //   ngayDat: format(formatTime(String(item1.ngayDat)), 'dd/MM/yyyy'),
  //   gioDat: format(formatTime(String(item1.ngayDat)), 'HH:mm'),
  //   hinhAnh: item1.hinhAnh,
  //   tenPhim: item1.tenPhim,
  //   thoiLuongPhim: String(item1.thoiLuongPhim),
  //   danhSachGhe: item1.danhSachGhe?.map((item2) => {
  // return {
  //   soGhe: item2.tenGhe,
  //   tenRap: item2.tenRap,
  //   tenHeThongRap: item2.tenHeThongRap
  // }
  // })
  //   }
  // })
  return (
    <Container>
      <h1 className="text-20 font-600 mt-20">Lịch sử đặt vé</h1>
      <div className="px-9">
      {
        mapNe?.map((item) => {
          const dayMS = format(formatTime(String(item.ngayDat)), 'dd/MM/yyyy')
          const timeMS = format(formatTime(String(item.ngayDat)), 'HH:mm')
          return (
            <div key={item.tenPhim} className="my-[20px] text-center ">
              <hr />
              <span className="shadow-xl pb-[15px] w-1/3 my-[20px] inline-block font-600"><span className="font-500 tenPhim text-[15px] rounded text-white px-[8px] py-2">Tên Phim:</span> {item.tenPhim}</span>
              <span className="shadow-xl pb-[15px] w-1/5 my-[20px] inline-block"><span className="font-500 ngayDat text-[15px] rounded text-white px-[8px] py-2">Ngày đặt:</span> {dayMS}</span>
              <span className="shadow-xl pb-[15px] w-1/5 my-[20px] inline-block"><span className="font-500 timeDat text-[15px] rounded text-white px-[8px] py-2">Thời gian đặt:</span> {timeMS}</span>
              <span className="shadow-xl pb-[15px] w-1/5 my-[20px] inline-block"><span className="font-500 thoiLuong text-[15px] rounded text-white px-[8px] py-2">Thời lượng:</span> {item.thoiLuongPhim} phút</span>
              <div className="grid grid-cols-6 mt-[15px] ">
                <div className="col-start-1 col-span-2 flex justify-center  ">
                  <img src={item.hinhAnh} alt="" className="rounded-10" />
                </div>
                <div className="col-start-3 col-span-4 shadow-xl rounded-10 p-[20px]">
                  {
                    item?.danhSachGhe?.map((i) => {
                      return (
                        <div key={i.maGhe} className="px-6 py-[15px] text-center flex justify-between items-center">
                          <span className="w-1/4 inline-block py-2 ">Số ghế: <span className="font-600 text-[15px] ">{i.tenGhe}</span></span>
                          <span className="w-1/4 inline-block py-2 font-600 text-[15px] bg-slate-300">{i.tenRap}</span>
                          <span className="w-1/4 inline-block py-2 ">Địa chỉ: <span className="font-600 text-[15px] ">{i.tenHeThongRap}</span></span>
                        </div>

                      )
                    })
                  }
                </div>
              </div>
            </div>

          )
        })
      }
      </div>

      {/* <Table className="my-5" columns={columns} dataSource={dataSource} /> */}
    </Container>
  )
}

const Container = styled.div`
  .tenPhim {
    background-color: #ff4d4f;
  }
  .ngayDat {
    background-color: #faad14;
  }
  .timeDat {
    background-color: #52c41a;
  }
  .thoiLuong {
    background-color: #1ab6c4;
  }
  
`
