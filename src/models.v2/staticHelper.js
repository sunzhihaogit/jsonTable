// commonHelper
import {DictArray} from "./utils/dictArray"
import {
  getToday,
  round,
  toHash,
  toHashByGroup,
  timeFormat
} from '@/utils/index.js';
import { postApi } from '@/api/utils';
export const reservationRemarkStaticHelper={
   STATUS:{
    未占货: '未占货',
    已占货: '已占货',
    待发货: '待发货',
    已发货: '已发货'
  }
}
export const departmentStaticHelper={
    businessTypes(departments){
          let r=departments.filter(g=>g.businessTypes).map(group=>group.businessTypes.split(",")).reduce((r,b)=>r.concat(b),[]).filter(r=>r)
          r=DictArray.$(r).uniqBy()
          return r||[]
    }
};
export const oBOrderStaticHelper={
  SHIPPMENTTYPE:{ 即时发货: 'I', 延期发货: 'D'}
}
