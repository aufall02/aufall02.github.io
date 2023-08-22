const content = {
    message : [
        'haloo aufaaal','idiiih umurnya berkurang nich', 
        'tambah tua ajaa', 'umur 21 ya kan?', 'doa baik buat aufaal', 'semoga hal hal baik selalu ada dan datang buat aufal',
        'terima kasih sudah ada sampai hari inii hihihi', 'i love u more than you know', 'sekiaaan aufal ganteng wkwk',
        'dadaa ganteng love uuu', 'tutup ish, ga di tutup tutup kangen aku fiks uda ini',
    ],
    button: [
        'haloo eva cantik, baik, tidak sombong, dan suka menabung', 'iya nich',
        'bener lagii', 'jelas iya, gamungkin tidak, wajib dipencet', 'next', 'amiiin','sama sama evaaa',
        'wajib i love u too evaa sii gabisa pilih yang lain','next', 'tutup tutup', 'terakhir nih pencet aja'
    ],
}

const button = document.getElementById('button');
const message = document.getElementById('message');
const buttonContainer = document.getElementById('button_container');

let i = 0;
button.addEventListener('click',function(){
    if (i === (content.button.length - 1)) {
       buttonContainer.innerHTML = `<a href="untuk aufal marom.pdf" target="_self">
        <button>terakhir nih pencet aja</button>
        </a>` 
    }
    message.innerHTML = content.message[i];
    button.innerHTML = content.button[i];
    i++ 
});
