import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { componentPath, pkgPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

//删除yh-design
export const removeDist = () => {
  return delPath(`${pkgPath}/yh-design`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/yh-design/lib/src`))
    .pipe(dest(`${pkgPath}/yh-design/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
