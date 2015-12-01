# request-ms-cli

This is the CLI app for the [request-ms](http://github.com/MichielvdVelde/request-ms) module. Just like the module it allows you to get the response time for a remote endpoint. It's a `ping` for HTTP(S) host.

For more info, read the [request-ms](http://github.com/MichielvdVelde/request-ms) readme.

# Install

	npm install -g request-ms-cli

# Usage

    $> request-ms example.com

What you will get is something similar to this:

    HEAD example.com - 200 - 43.45643ms

See the help (`request-ms -h`) for all available options.

# Version history

* 0.0.1 - 0.0.2 - 1 December 2015
  * (0.0.2) Fixed issue where HTTPS won't work
  * (0.0.1) Moved CLI app to separate package from [request-ms](http://github.com/MichielvdVelde/request-ms)

# License

Copyright 2015 Michiel van der Velde.

This software is licensed under the [MIT License](LICENSE)
