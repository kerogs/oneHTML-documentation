import markdown

print("Start...")

md_text = """
# Titre
Ce texte est **en gras** et _en italique_.
```php
hello world!!
```
``/path/example/``
## Subtitle
### Monkey wizardGang
> Hello world
> I am an important message haha

~~remove me~~
[link](http://www.google.com)
![img](dzpofkezoip)
okay letsgo !!!!!!

===oublier ce que sa fait.===
"""

html = markdown.markdown(md_text)

print(html)