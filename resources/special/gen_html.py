import os
import sys
from os import walk

list_prefix = '<div class="container"><div class="row img-gallery"><ul>'
prefix = '<li><img src="/resources/special/For_mom_and_nick/'
suffix = '" alt="" class="col-lg-2 col-md-2 col-sm-3 col-xs-4"></li>'
list_suffix = '</ul></div></div>'

files = []
for (dirpath, dirnames, filenames) in walk("./For_mom_and_nick"):
    files.extend(filenames)
    break


# Start Main Print

print list_prefix

for thisFile in filenames:
    sys.stdout.write(prefix)
    sys.stdout.write(thisFile)
    sys.stdout.write(suffix)

print list_suffix
