import {  DO} from './models.js';
export const printTemplates = [
 {
      name:"交货单样本出库单",
      templateId:"551937541976002560",
      params:{
        deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.零剪
  },
 {
      name:"零剪账套细码单（不带价单）",
      templateId:"551939070816587776",
      params:{
        deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.零剪
  },
 {
      name:"零剪账套细码单（带价单）",
      templateId:"551940036236316672",
      params:{
        deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.零剪
  },
   {
      name:"交货单样本细码单",
      templateId:"551940072689012736",
      params:{
        deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.职业装
  },
   {
      name:"职业装细码单",
      templateId:"548006634697166848",
      params:{
              deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.职业装
  },
   {
      name:"职业装细码单（不带价单）",
      templateId:"551964271361036288",
      params:{
              deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.职业装
  },
   {
      name:"大样付款单",
      templateId:"552014034655678464",
      params:{
              deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.订货
  },
   {
      name:"大样签收单",
      templateId:"550906237163573248",
      params:{
              deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.订货
  },
   {
      name:"订货细码单（带价格）",
      templateId:"554889085738291200",
      params:{
              deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.订货
  },
   {
      name:"订货细码单（不带价格）",
      templateId:"554884058038669312",
      params:{
              deliver_code:(order)=>order.invoiceNo,
      },
      isShow:(order)=> order.businessType==DO.BUSINESSTYPE.订货
  },
];
