# on macOS: bash shahash.sh

odir=`pwd`;
ls "${odir}"

androidapk="TempTalk-android-latest.apk"
macx64="temptalk-desktop-mac-x64-latest.dmg"
macarm64="temptalk-desktop-mac-arm64-latest.dmg"
linuxdeb64="chative-linux-amd64-latest.deb"
MYLOG="logs_`date +%F`.log"

function loginfo(){
        echo "$1"
        echo "$(date  +"%Y%m%d %H:%M:%S") - $1"  >> ${MYLOG} 2>> ${MYLOG}
}

function download_file(){
    wget https://d.temptalk.app/d/TempTalk-android-latest.apk
    wget https://d.temptalk.app/d/temptalk-desktop-mac-x64-latest.dmg
    wget https://d.temptalk.app/d/temptalk-desktop-mac-arm64-latest.dmg
    wget https://d.temptalk.app/d/linux/chative-linux-amd64-latest.deb
}

function check_file(){
    if [[ -f "${androidapk}" ]]; then
        androidapksha=`shasum -a 256 ${androidapk}|cut -d ' ' -f1`
        printf "check ${androidapk} sha256sum ${androidapksha}"
        sed -i "" "s/TempTalk-android-latest.apksplited.*/TempTalk-android-latest.apksplited${androidapksha}/g" ${odir}/a/hashes.html
        rm -rf ${androidapk}
    else
        loginfo "check ${odir}/${androidapk} fail"
        exit 1
    fi

    if [[ -f "${macx64}" ]]; then
        macx64sha=`shasum -a 256 ${macx64}|cut -d ' ' -f1`
        printf "check ${macx64} sha256sum ${macx64sha}"
        sed -i "" "s/temptalk-desktop-mac-x64-latest.dmgsplited.*/temptalk-desktop-mac-x64-latest.dmgsplited${macx64sha}/g" ${odir}/a/hashes.html
        rm -rf ${macx64}
    else
        loginfo "check ${macx64} fail"
        exit 1
    fi

    if [[ -f "${macarm64}" ]]; then
        macarm64sha=`shasum -a 256 ${macarm64}|cut -d ' ' -f1`
        printf "check ${macarm64} sha256sum ${macarm64sha}"
        sed -i "" "s/temptalk-desktop-mac-arm64-latest.dmgsplited.*/temptalk-desktop-mac-arm64-latest.dmgsplited${macarm64sha}/g" ${odir}/a/hashes.html
        rm -rf ${macarm64}
    else
        loginfo "check ${macarm64} fail"
        exit 1
    fi

    if [[ -f "${linuxdeb64}" ]]; then
      linuxdeb64sha=`shasum -a 256 ${linuxdeb64} | cut -d ' ' -f1`
      printf "check ${linuxdeb64} sha256sum ${linuxdeb64sha}"
      sed -i "" "s/chative-linux-amd64-latest.debsplited.*/chative-linux-amd64-latest.debsplited${linuxdeb64sha}/g" ${odir}/a/hashes.html
      rm -rf ${linuxdeb64}
    else
      loginfo "check ${linuxdeb64} fail"
      exit 1
    fi
}

mkdir -p shahashtemp
cd shahashtemp

download_file
if [ "$?" != 0 ];then
    loginfo "Fail, download file error "
    exit 1;
fi

check_file
if [ "$?" != 0 ];then
    loginfo "Fail, check file error "
    exit 1;
fi
