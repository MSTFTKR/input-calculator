const input = require('input')
const fs = require('fs').promises;
const fs1 = require('fs');
const { error } = require('console');

var islemKopyalamaDeg=0
var gecmisCikis=0;
const topla = async () => {
    const keep = await input.text('Toplamak istediğiniz sayıları(5+15+(-265)+8) şeklinde yazınız.')
    let islemSayilari=keep.split('+')
    

    let param = '+'
    var sonucs = 0;

    if(islemKopyalamaDeg!=0){
        islemSayilari.unshift(islemKopyalamaDeg)
        
        islemSayilari.forEach(element => { sonucs += Number(element) });
        console.log(islemKopyalamaDeg+'+'+keep+'=',sonucs)
        islemKopyalamaDeg=0
    }else{
    // console.log(islemSayilari)
    islemSayilari.forEach(element => { sonucs += Number(element) });
    console.log(keep+'=',sonucs)
}
    gecmiseYaz(islemSayilari, param, sonucs)
    gecmisCikisKontrol()
}




// gecmisiGor()

const cikar = async () => {
    const keep = await input.text('Çıkarılacak sayıları(5-15-265-8) şeklinde yazınız.')
    let islemSayilari= keep.split('-')
    let param = '-'
    var sonucs
    if(islemKopyalamaDeg!=0){
        islemSayilari.unshift(islemKopyalamaDeg)
        sonucs = islemKopyalamaDeg;
        
    

    for (let i = 1; i < islemSayilari.length; i++) {
        sonucs -= Number(islemSayilari[i])
        
        
    }    console.log(islemKopyalamaDeg+'-'+keep+'=',sonucs)
    islemKopyalamaDeg=0
    }else{
    sonucs = islemSayilari[0];

    for (let i = 1; i < islemSayilari.length; i++) {
        sonucs -= Number(islemSayilari[i])
    }
    console.log(keep+'=',sonucs)
}
    // console.log(keep+'=',sonucs)
    gecmiseYaz(islemSayilari, param, sonucs)
    gecmisCikisKontrol()
}
const carp = async () => {
    const keep = await input.text('Çarpmak istediğiniz sayıları(5*(-15)*265*8) şeklinde yazınız.')
    let islemSayilari= keep.split('*')
    let param = '*'
    var sonucs = 1;
    if(islemKopyalamaDeg!=0){
        islemSayilari.unshift(islemKopyalamaDeg)
   
    islemSayilari.forEach(element => { sonucs *= Number(element) });
    console.log(islemKopyalamaDeg+'*'+keep+'=',sonucs)
    islemKopyalamaDeg=0
    }else{
        
    islemSayilari.forEach(element => { sonucs *= Number(element) });
    console.log(keep+'=',sonucs)
    }


    gecmiseYaz(islemSayilari, param, sonucs)
    gecmisCikisKontrol()
}
const bol = async () => {
    var sonucs
    const keep = await input.text('Bölmek istediğiniz sayıları(5/15/(-265)/8) şeklinde yazınız.')
    let islemSayilari= keep.split('/')
    let param = '/'
    if(islemKopyalamaDeg!=0){
        islemSayilari.unshift(islemKopyalamaDeg)
        sonucs = islemKopyalamaDeg;
        for (let i = 1; i < islemSayilari.length; i++) {
        sonucs /= islemSayilari[i]

    }

    console.log(islemKopyalamaDeg+'/'+keep+'=',sonucs)

        islemKopyalamaDeg=0
    
    }else{
    sonucs = islemSayilari[0];
    for (let i = 1; i < islemSayilari.length; i++) {
        sonucs /= islemSayilari[i]

    }
    console.log(keep+'=',sonucs)
    }
    gecmiseYaz(islemSayilari, param, sonucs)

    gecmisCikisKontrol()
}

const log = async () => {
    if(islemKopyalamaDeg!=0){
        console.log('**************Kopyalanan işlemle log işlemi yapamazsınız************')

        islemKopyalamaDeg=0
        return gecmisCikisKontrol()
    }else{

    const taban = await input.text('Tabanı Giriniz :')
    const sayi = await input.text('Sayıyı Giriniz :')
    let islemSayilari=[]
    islemSayilari.push(taban)
    islemSayilari.push(sayi)
    let param = 'é';
    let sonucs;
    if (taban == 'e') {
        sonucs = Math.log(sayi)
        console.log(sonucs)
        let al = taban + ' tabanında ' + sayi + '=' + sonucs + '\n'
        console.log(al)

        gecmiseYaz(islemSayilari, param, sonucs)
        return gecmisCikisKontrol();
    } else {
        sonucs = Math.log(sayi) / Math.log(taban);
        console.log('Sonuç:', sonucs)
        let al = taban + ' ' + 'tabanında ' + sayi + ' = ' + sonucs + '\n'
        console.log(al)
        gecmiseYaz(islemSayilari, param, sonucs)
        return gecmisCikisKontrol();
    }
        }

}

gecmisCikisKontrol=()=>{
    if(gecmisCikis==1){
        gecmisCikis=0;
        gecmisiGor()
    }else{
    main()}
}

const fakt = async () => {
    
    param='!'
    let islemSayilari=[]
    let sonucs
    const recursiveFakt = (islemSayilari) => {
        if (islemSayilari == 1 || islemSayilari == 0) {
            return 1;
        } else {
            return islemSayilari * recursiveFakt(islemSayilari - 1)
        }
    }
    if(islemKopyalamaDeg!=0){
        islemSayilari.push(islemKopyalamaDeg)

         sonucs = recursiveFakt(islemSayilari)
        let SonucCikti = islemSayilari + '!= ' + sonucs
        console.log(SonucCikti)

    islemKopyalamaDeg=0
    }else{
        let a = await input.text('Kaç Faktoriyel:')
        islemSayilari.push(a)
    
     sonucs = recursiveFakt(islemSayilari)
        let SonucCikti = islemSayilari + '!= ' + sonucs
        console.log(SonucCikti)
    }

    
    
    gecmiseYaz(islemSayilari,param,sonucs)

    main()
}

const gecmiseYaz = async (islemSayilari, param, sonucs) => {
   
    const islemdenGelenDizi = { sayilar: islemSayilari, parametre: param, sonuc: sonucs }
    const dosyadanGelenText= fs1.existsSync('gecmis.json')? await fs.readFile('gecmis.json', 'utf-8',(err, data) => {
        if (err) return[]
        return data;
    }):[]

    let strDiziDonusturTut= fs1.existsSync('gecmis.json')?JSON.parse(dosyadanGelenText,'utf-8'):[]
        strDiziDonusturTut.push(islemdenGelenDizi)

        diziyiStrDonustur=JSON.stringify(strDiziDonusturTut,null,2)
    await fs.writeFile('gecmis.json',diziyiStrDonustur,(err)=>{
        if (err) throw err;
    })

}


const gecmisiGor = async () => {
    const gecmisiGor = await fs.readFile('gecmis.json', 'utf-8', (err, data) => {
        if (err) throw err;
        return data;

    })
    var islemArray=[];
    const gecmisArray=JSON.parse(gecmisiGor,'utf-8')
    // console.log(gecmisArray)
    var islem=[]
    var ass=''
    
    for (let i = 0; i < gecmisArray.length; i++) {
        for (let j = 0; j < gecmisArray[i].sayilar.length; j++) {

            ass+=`${gecmisArray[i].sayilar[j]}${gecmisArray[i].parametre}`
        }
        if(ass[ass.length-1]!='!'){
            ass=ass.slice(0,-1)
        }
        islem[i]={sayi:ass,sonuc:gecmisArray[i].sonuc}
        ass='';
        
        
    }
    console.log('Bilgilendirme-->  é=log')
    // console.log(islem)
    islem.forEach(element => {console.log(element.sayi+'='+element.sonuc)
      
    });
    islem.forEach(element => {islemArray.push(`${element.sayi}=${element.sonuc}`)

    });
    // console.log(islemArray)
    islemSecFonk(islemArray)
}

const islemSecFonk=async (islemArray)=>{
    const copyIslemSec=await input.checkboxes('İşleminizi seçin.:',['Sonuç Kopyala','İşlem Sil','Çıkış'])
    if(copyIslemSec=='Sonuç Kopyala'){
        const sonucSec= await input.checkboxes('Devam etmek istediğiniz sonucu seçin:',islemArray)
        let sonucSec1=sonucSec[0].split('=')
        console.log(sonucSec1[1]+' ile hangi islemi yapmak istersiniz')
        islemKopyalamaDeg=sonucSec1[1]
        gecmisCikis=1;
        main()

    }else if(copyIslemSec=='İşlem Sil'){
        const copyIslemSec=await input.checkboxes('Silmek İstediğinizi seçin',islemArray)
        console.log(copyIslemSec+'->silindi')
    
        const dosyadanGelenText= fs1.existsSync('gecmis.json')? await fs.readFile('gecmis.json', 'utf-8',(err, data) => {
            if (err) return[]
            return data;
        }):[]
       
        let strDiziDonusturTut= fs1.existsSync('gecmis.json')?JSON.parse(dosyadanGelenText,'utf-8'):[]
            // strDiziDonusturTut.push(islemdenGelenDizi)
            strDiziDonusturTut.splice(islemArray.indexOf(copyIslemSec[0]),1)
            diziyiStrDonustur=JSON.stringify(strDiziDonusturTut,null,2)
        await fs.writeFile('gecmis.json',diziyiStrDonustur,(err)=>{
            if (err) throw err;
        })
    
        gecmisiGor()
    }else if(copyIslemSec=='Çıkış'){
            main()
    }else {
        console.log('Lütfen bir seçim yapın')
        islemSecFonk()
    }
}


const main = async () => {
    const keep = await input.checkboxes('İşlem Seç(Lütfen Tek Bir Şık İşaretleyiniz):', ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme', 'Faktoriyel', 'Logaritma', 'Geçmişi Gör', 'Çıkış'])
    if (keep == 'Toplama') {
        topla()
    } else if (keep == 'Çıkarma') {
        cikar()
    } else if (keep == 'Çarpma') {
        carp()
    } else if (keep == 'Bölme') {
        bol()
    } else if (keep == 'Faktoriyel') {
        fakt()
    } else if (keep == 'Logaritma') {
        log()
    } else if (keep == 'Geçmişi Gör') {
        gecmisiGor()
    } else if (keep == 'Çıkış') {
        console.log('Çıkılıyor...')
        setTimeout(() => { }, 1000)

    } else {
        console.log('Hatalı İşlem (lütfen tek bir işlem seçiniz)')
        main()
    }
}

main()
