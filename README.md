# NK's Cilentside Boilerplate

## Use Yeoman

This boilerplate is based off [yeoman/generator-angular][yg] and you can still
use their generators once you've installed yo.

E.g:

``` bash
$ yo angular:directive myNewDirective
```

## Express as asset server

In addition to the `yo angular` boilerplate, I tacked on [express][expres] as a static
asset server. Probably overkill and something like [connect][connect] would
do, but the added flexibility may be helpful.

## Build around an API

Ultimately you should be building around an API server, this can be anything
from Rails to another express instance.

[yg]: https://github.com/yeoman/generator-angular
[express]: https://github.com/visionmedia/express
[connect]: https://github.com/senchalabs/connect

## License

> The MIT License (MIT)

> Copyright (c) <year> <copyright holders>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
