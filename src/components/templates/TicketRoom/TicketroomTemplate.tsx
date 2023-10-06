
import { Choose } from "."
import { ChairList } from "./ChairList"
import { ToastContainer } from "react-toastify"

export const TicketroomTemplate = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="col-start-2 col-end-8">
        <div className="bg-black h-12 w-100 text-white text-3xl text-center leading-10 mb-10">Screen</div>
        <ChairList />
      </div>
      <div className="col-start-9 col-end-12">
        <Choose />
      </div>
    </div>
  )
}