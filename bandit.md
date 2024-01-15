0.
The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.

bandit0@bandit:~$ ls
readme
bandit0@bandit:~$ cat readme
NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL

1.
The password for the next level is stored in a file called - located in the home directory

bandit1@bandit:~$ ls
-
bandit1@bandit:~$ cat ./-
rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi

2.
The password for the next level is stored in a file called spaces in this filename located in the home directory

bandit2@bandit:~$ ls
spaces in this filename
bandit2@bandit:~$ cat spaces\ in\ this\ filename
aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG

3.
The password for the next level is stored in a hidden file in the inhere directory.

bandit3@bandit:~$ ls
inhere
bandit3@bandit:~$ cd inhere
bandit3@bandit:~/inhere$ ls
bandit3@bandit:~/inhere$ ls -a
.  ..  .hidden
bandit3@bandit:~/inhere$ cat ./.hidden
2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe

4.
The password for the next level is stored in the only human-readable file in the inhere directory.

bandit4@bandit:~$ ls
inhere
bandit4@bandit:~$ cd inhere
bandit4@bandit:~/inhere$ ls
-file00  -file02  -file04  -file06  -file08
-file01  -file03  -file05  -file07  -file09
bandit4@bandit:~/inhere$ file ./*
./-file00: data
./-file01: data
./-file02: data
./-file03: data
./-file04: data
./-file05: data
./-file06: data
./-file07: ASCII text
./-file08: data
./-file09: data
bandit4@bandit:~/inhere$ cat ./-file07
lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR

5.
The password for the next level is stored in a file somewhere under the inhere directory and has all of the following properties:

human-readable
1033 bytes in size
not executable

bandit5@bandit:~$ 
bandit5@bandit:~$ ls
inhere
bandit5@bandit:~$ cd inhere
bandit5@bandit:~/inhere$ ls
maybehere00  maybehere04  maybehere08  maybehere12  maybehere16
maybehere01  maybehere05  maybehere09  maybehere13  maybehere17
maybehere02  maybehere06  maybehere10  maybehere14  maybehere18
maybehere03  maybehere07  maybehere11  maybehere15  maybehere19
bandit5@bandit:~/inhere$ find -size 1033c
./maybehere07/.file2
bandit5@bandit:~/inhere$ cat ./maybehere07/.file2
P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU

6.
The password for the next level is stored somewhere on the server and has all of the following properties:

owned by user bandit7
owned by group bandit6
33 bytes in size

bandit6@bandit:~$ find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
/var/lib/dpkg/info/bandit7.password
bandit6@bandit:~$ cat /var/lib/dpkg/info/bandit7.password
z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S

7.
The password for the next level is stored in the file data.txt next to the word millionth

bandit7@bandit:~$ ls
data.txt
bandit7@bandit:~$ cat data.txt | grep millionth
millionth       TESKZC0XvTetK0S9xNwm25STk5iWrBvPexit

8.
The password for the next level is stored in the file data.txt and is the only line of text that occurs only once

bandit8@bandit:~$ sort data.txt | uniq -u
EN632PlfYiZbn3PhVK3XOGSlNInNE00t

9.
The password for the next level is stored in the file data.txt in one of the few human-readable strings, preceded by several ‘=’ characters.

bandit9@bandit:~$ strings data.txt | grep ==
x]T========== theG)"
========== passwordk^
========== is
========== G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s

10.
The password for the next level is stored in the file data.txt, which contains base64 encoded data

bandit10@bandit:~$ cat data.txt
VGhlIHBhc3N3b3JkIGlzIDZ6UGV6aUxkUjJSS05kTllGTmI2blZDS3pwaGxYSEJNCg==
bandit10@bandit:~$ cat data.txt | base64 -d
The password is 6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM

11.
The password for the next level is stored in the file data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions

bandit11@bandit:~$ cat data.txt
Gur cnffjbeq vf WIAOOSFzMjXXBC0KoSKBbJ8puQm5lIEi
bandit11@bandit:~$ cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
The password is JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv

12.
The password for the next level is stored in the file data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions

bandit11@bandit:~$ cat data.txt
Gur cnffjbeq vf WIAOOSFzMjXXBC0KoSKBbJ8puQm5lIEi
bandit11@bandit:~$ cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
The password is JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv

The password for the next level is stored in the file data.txt, which is a hexdump of a file that has been repeatedly compressed

bandit12@bandit:~$ cd /tmp/naram
bandit12@bandit:~$ xxd -r data.txt > /tmp/naram/data
bandit12@bandit:~$ cd /tmp/naram
bandit12@bandit:/tmp/naram$ ls
data
bandit12@bandit:/tmp/naram$ file data
data: gzip compressed data, was "data2.bin"
bandit12@bandit:/tmp/naram$ mv data data.gz
bandit12@bandit:/tmp/naram$ gzip -d data.gz
bandit12@bandit:/tmp/naram$ ls
data
bandit12@bandit:/tmp/naram$ file data
data: bzip2 compressed data, block size = 900k
bandit12@bandit:/tmp/naram$ mv data data.bz
bandit12@bandit:/tmp/naram$ bzip2 -d data.bz
bandit12@bandit:/tmp/naram$ ls
data
bandit12@bandit:/tmp/naram$ file data
data: gzip compressed data, was "data4.bin"
bandit12@bandit:/tmp/naram$ mv data data.gz
bandit12@bandit:/tmp/naram$ gzip -d data.gz
bandit12@bandit:/tmp/naram$ ls
data
bandit12@bandit:/tmp/naram$ file data
data: POSIX tar archive (GNU)
bandit12@bandit:/tmp/naram$ tar -xf data
bandit12@bandit:/tmp/naram$ ls
data  data5.bin
bandit12@bandit:/tmp/naram$ file data
data: POSIX tar archive (GNU)
bandit12@bandit:/tmp/naram$ file data5.bin
data5.bin: POSIX tar archive (GNU)
bandit12@bandit:/tmp/naram$ tar -xf data
bandit12@bandit:/tmp/naram$ ls
data  data5.bin
bandit12@bandit:/tmp/naram$ tar -xf data5.bin
bandit12@bandit:/tmp/naram$ ls
data  data5.bin  data6.bin
bandit12@bandit:/tmp/naram$ file data6.bin
data6.bin: bzip2 compressed data, block size = 900k
bandit12@bandit:/tmp/naram$ mv data6.bin data6.bz2
bandit12@bandit:/tmp/naram$ bzip2 -d data6.bz2
bandit12@bandit:/tmp/naram$ ls
data  data5.bin  data6
bandit12@bandit:/tmp/naram$ file data6
data6: POSIX tar archive (GNU)
bandit12@bandit:/tmp/naram$ rm data
bandit12@bandit:/tmp/naram$ rm data5.bin
bandit12@bandit:/tmp/naram$ ls
data6
bandit12@bandit:/tmp/naram$ tar -xf data6
bandit12@bandit:/tmp/naram$ ls
data6  data8.bin
bandit12@bandit:/tmp/naram$ file data8.bin
data8.bin: gzip compressed data, was "data9.bin", last modified: Thu Oct  5 06:19:20 2023, max compression, from Unix, original size modulo 2^32 49
bandit12@bandit:/tmp/naram$ mv data8.bin data8.gz
bandit12@bandit:/tmp/naram$ gzip -d data8.gz
bandit12@bandit:/tmp/naram$ ls
data6  data8
bandit12@bandit:/tmp/naram$ file data8
data8: ASCII text
bandit12@bandit:/tmp/naram$ cat data8
The password is wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw
