git pull;newData=`date '+%B %-d, %Y'`;sed -i'.bak' -e "s/Last updated : .*/Last updated : ${newData}/g" a/hashes.html
git add -u ; git commit -m "modify Last updated of a/hashes.html"; git push