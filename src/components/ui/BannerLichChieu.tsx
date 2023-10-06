import { Card, Skeleton } from 'components'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { lichChieuThunk } from "store/lichChieu"


export const BannerLichChieu = () => {
    const dispatch = useAppDispatch()
    const { listLichChieu, isFetchingLichChieu } = useSelector((state: RootState) => state.lichChieu)
    console.log("isFetchingLichChieu: ", isFetchingLichChieu);
    console.log("listLichChieu: ", listLichChieu);


    useEffect(() => {
        dispatch(lichChieuThunk())
    }, [dispatch])

    if (isFetchingLichChieu) {
        return (
            <div className="grid grid-cols-4">
                {[...Array(12)].map(() => {
                    return (
                        <Card className="!w-[300px] !mt-20">
                            <Skeleton.Image className="!w-full !h-[250px]" />
                            <Skeleton.Input className="!w-full mt-16" />
                            <Skeleton.Input className="!w-full mt-16" />
                        </Card>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-4">
                {listLichChieu?.map((m) => (
                    <Card
                        key={}
                        className="!mt-20 !mb-5"
                        hoverable
                        style={{ width: 240 }}
                        title={movie.tenHeThongRap}
                        cover={<img alt="example" src={movie.hinh} />}
                    >
                        <Card.Meta
                            title={movie.mahom}
                            //description={movie.giaVe}
                        />
                    </Card>
                ))}
            </div>
        </div>
    )
}
