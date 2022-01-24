function myClick(widget) {
  const b = widget.bounds()
  return click(b.centerX(), b.centerY())
}

auto.waitFor()
let cnt = 0
let grid = className('GridView').findOne()
grid.children().forEach((child) => {
  child.children().forEach((i) => {
    let text = i.text()
    if (!text) {
      return
    }
    a = text.match(/([\u4e00-\u9fa5]+).*(203\d{8})/)
    b = text.match(/(203\d{8}).*?([\u4e00-\u9fa5]+)/)
    let s
    if (a) {
      s = a[2] + ', ' + a[1]
    } else if (b) {
      s = b[1] + ', ' + b[2]
    } else {
      return
    }
    log(s)
    cnt++
    files.append('/sdcard/AAA/names.csv', s + '\n')
  })
})
toastLog(cnt + ' completed')
