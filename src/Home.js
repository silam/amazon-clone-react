import React from 'react'
import "./Home.css";
import Product from "./Product";


{/* <img 
alt="All-new Blink Outdoor. Alexa, 
show me the front door camera. $99.99" 
src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w3000._CB406837549_.jpg" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w3000._CB406837549_.jpg" width="1500px" height="600px"></img> */}

function  s() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w3000._CB406837549_.jpg" alt="" />
            

                <div className="home__row">
                    <Product id="111"
                        title={'The lean startup'} price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg" 
                         rating={5}></Product>
                    <Product id="112"
                        title={'The lean startup'} price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg" 
                         rating={5}></Product>

                </div>   
                <div className="home__row">
                
                <Product id="113"
                        title={'The lean startup'} price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg" 
                         rating={5}></Product>
                    <Product id="114"
                        title={'The lean startup'} price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg" 
                         rating={5}></Product>
                
                    <Product id="115"
                            title={'The lean startup'} price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg" 
                            rating={5}></Product>
                </div>   

                <div className="home__row">
                <Product id="116"
                        title={'The lean startup'} price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/PLF/LARKRO/2020/SPRING-DRIVERS/LR-PRINT-TOP_DT_CC758x608-2X._SY608_CB410269718_.jpg" 
                         rating={5}></Product>

                </div>   
            </div>
        </div>
    )
}

export default  s
