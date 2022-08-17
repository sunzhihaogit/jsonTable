import { DictArray } from "./dictArray.js";
export class Query{
  query;
  constructor() {
    this.query = DictArray.$([])
    Query.define(this,"eq")
    Query.define(this,"in")
    Query.define(this,"like")
    Query.define(this,"le")
    Query.define(this,"lte")
    Query.define(this,"ge")
    Query.define(this,"gte")
    Query.define(this,"ne")
    Query.define(this,"between")
  };
  then() {
    return this.toArray();
  }
  toArray() {
    return this.query.uniqBy2("fieldName").toArray();
  };
  static define(obj, opr) {
    obj[opr] = (fieldName, value) => {
      let q = {fieldName, opr, value};
      if(['between', 'ge', 'gte', 'lte', 'le'].includes(opr) && !(fieldName.includes('Time') || fieldName.includes('Date'))) q.typeAs = 'NUMERIC'
      obj.query.data.push(q);
      return obj;
    }
  };
}
export default Query;
