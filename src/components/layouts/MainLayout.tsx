import { Carousel, Footer, Header } from 'components'
import { BannerHeThongRap } from 'components/ui/BannerHeThongRap'
import { BannerLichChieu } from 'components/ui/BannerLichChieu'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const MainLayout = () => {
    return (
        <main>
            <Header />
            <Carousel />
            <MainWrapper id="main-content">
                <Outlet />
                <BannerHeThongRap/>
                <BannerLichChieu />
            </MainWrapper>
            <Footer />
        </main>
    )
}

const MainWrapper = styled.div`
    max-width: var(--max-width);
    margin: auto;
    padding: 40px;
`
