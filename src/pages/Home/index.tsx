import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import style from './index.module.scss';
export interface indexProps { }
import { Table } from 'antd'
import { useDispatch, useSelector } from "react-redux";
const index: FC<indexProps> = () => {
  // const lang = useSelector((state: any) => state.global.lang)
  // console.log(1111,lang);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return <div className={style.index}>
    <Table dataSource={[]} columns={columns} />
  </div>
}
export default index