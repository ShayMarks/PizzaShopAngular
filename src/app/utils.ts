// File: src/app/utils.ts
// מחלקת עזר המכילה פונקציות למיון מערכים.
export default class Utils {
  static sortString(xs: any[], key: string, desc: boolean) {
    return xs.sort((a, b) => {
      let nameA = a[key].toUpperCase();
      let nameB = b[key].toUpperCase();
      if (desc) {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      } else {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      }
      return 0;
    });
  }

  static sortNumber(xs: any[], key: string, desc: boolean) {
    return xs.sort((a, b) => (desc ? b[key] - a[key] : a[key] - b[key]));
  }
}
