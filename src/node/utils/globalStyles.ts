import path from 'path'
import fs from 'fs'
import { EOL } from 'os'

export const injectGlobalSCSS = (root: string, css: string) => {
  const globalSCSS = path.join(root, 'src', 'styles', 'var.scss')
  if (fs.existsSync(globalSCSS) && fs.statSync(globalSCSS).isFile()) {
    css = fs.readFileSync(globalSCSS, 'utf-8') + EOL + css
  }
  return css
}
