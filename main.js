// 일렉트론 모듈에서 앱구동 : app, 웹페이지실행: BrowserWindow 을 위한 라이브러리 가져오기
const {app, BrowserWindow} = require('electron')
// 생성한 웹페이지 로드 및 설정
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

// 모든 창 닫힘 이벤트
app.on('window-all-closed', () => {
    console.log('모든 창 닫힘')
    if (process.platform !== 'darwin') app.quit() // darwin 은 macOS 를 의미
})
// 앱 활성화 이벤트
app.on('activate', () => { // 앱이 활성화 되었을때
    console.log('앱 활성화')
    // 모든 창이 닫혀있다면 새창 만들기
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// 앱 설정 및 실행
app.whenReady().then(()=>{
    createWindow()
})
