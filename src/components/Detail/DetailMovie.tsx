"use client"
import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab, Box } from '@mui/material'
import Image from 'next/image';

export default function DetailMovie() {
  const [value, setValue] = useState('1');
  const movies = Array.from({ length: 6 }, (_, i) => i + 1);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className='detail-movie w-full '>
      <div className='detail-movie__background flex justify-center items-center'>
        <Image src="/imgs/background.png" alt="" className='w-full' />
      </div>
      <div className="filter_movie">
        <div className="title">

        </div>
        <div className="start_watching">

        </div>

        <div className="filter_movie ml-32">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="" sx={{
                '& .MuiTab-root': {
                  color: '#fff',
                  fontWeight: 500,
                },
                '& .Mui-selected': {
                  color: '#ff944d',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ff944d',
                },
              }}>
                <Tab label="Thông tin" value="1" />
                <Tab label="Seasons" value="2" />
                <Tab label="Diễn viên" value="3" />
                <Tab label="Hình ảnh" value="4" />

              </TabList>
            </Box>

          </TabContext>
        </div>
      </div>
      <div className='detail-movie__content text-white w-full flex mx-32'>
     
          <TabContext value={value}>
            <TabPanel value="1">
              <div className='flex'>
            <div className='detail-movie_content_left  w-2/3'>
              <div className="detail_categories flex flex-col">
                <div className='detail_categories_item flex'>
                    <div className="detail_categories_name">Các tập mới:</div>
                    <div className="detail_categories_content flex gap-5">
                        <div className="episode flex rounded-md border border-des px-2 py-0.5 active:border-transparent active:bg-primary active:text-black lg:hover:border-transparent lg:hover:bg-primary lg:hover:text-black">Tập 16</div>
                        <div className="episode flex rounded-md border border-des px-2 py-0.5 active:border-transparent active:bg-primary active:text-black lg:hover:border-transparent lg:hover:bg-primary lg:hover:text-black">Tập 15</div>

                        <div className="episode flex rounded-md border border-des px-2 py-0.5 active:border-transparent active:bg-primary active:text-black lg:hover:border-transparent lg:hover:bg-primary lg:hover:text-black">Tập 14</div>

                    </div>
                </div>
                <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Đánh giá:</div>
                  <div className="detail_categories_content">8.94</div>
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Loại:</div>
                  <div className="detail_categories_content">TV</div>
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Số tập:</div>
              
                  <div className="detail_categories_content">38</div>
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Trạng thái:</div>
              
                  <div className="detail_categories_content">Hoàn thành</div>
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Phát sóng từ:</div>
              
                  <div className="detail_categories_content">2/10/2024 đến 1/1/2025</div>
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Thể loại:</div>
                 
                 
                  <div className="detail_categories_content flex gap-5">
                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">Drama</div>
                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">Fantasy</div>

                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">Suspense</div>

                    </div>

                 
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Chủ đề:</div>
              
                  <div className="detail_categories_content flex gap-5">
                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">Isekai</div>
                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">Pssychological</div>
                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">Time Travel</div>
                    </div>
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Phát hành:</div>
                  <div className="detail_categories_content flex gap-5">
                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">Fall 2025</div>
                        
                    </div>
                  </div>
                  <div className='detail_categories_item flex'>
                  <div className="detail_categories_name">Studio:</div>
                  <div className="detail_categories_content flex gap-5">
                        <div className="flex rounded bg-slate-700 px-1 capitalize xl:hover:bg-orange-400 xl:hover:text-black">White Fox</div>
                   

                    </div>
                  </div>

              </div>
              </div>
              <div className='detail-movie_content_right w-1/3 mr-64'>
          <div className="introduce">
            <span className='font-bold'> Giới thiệu:</span> <br/>
            After being suddenly transported to another world, Subaru Natsuki and his new female partner are brutally murdered.
            However, Subaru awakens to a familiar scene, meeting the same girl again. The day begins to mysteriously repeat itself.
          </div>
          <div className="other_name mt-6">
            <span className='font-bold'>Tên khác:</span> <br/>
            Re:ZERO -Starting Life in Another World- Season 3
          </div>


        </div>
        </div>
            </TabPanel>
            <TabPanel value="2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 w-full ">
 {movies.map((movie,index) => (
      <a key={index} className="p-2 cursor-pointer">                     
         <div
             className="w-full flex justify-center align-center items-center flex-col rounded-lg shadow-lg bg-[#1f1f1f]"
           >
             <Image width={300} height={300} alt="#" src="/imgs/spider.jpg" className="w-full h-full"  />
             <div className="title_movie title_categories w-full my-2 text-xl font-bold">Dr. Stone: Science Future</div>
             <div className="content_movie flex justify-between w-full mb-3">
              <div className="season text-white">Season 4</div>
              <div className="status text-white">Hoàn thành</div>
             </div>
           </div>
      </a>
    ))} 
  </div>
            </TabPanel>
            <TabPanel value="3">(Coming)</TabPanel>
            <TabPanel value="4">(Coming)</TabPanel>
          </TabContext>
       


      

      </div>
    </div>
  )
}
