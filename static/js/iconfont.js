;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832.905242 191.093223c-177.249937-177.249937-464.560548-177.249937-641.811508 0-177.249937 177.221284-177.249937 464.591247 0 641.811508 177.249937 177.25096 464.561571 177.25096 641.811508 0C1010.155179 655.68447 1010.155179 368.314507 832.905242 191.093223zM792.810059 792.81057c-155.090241 155.060565-406.5309 155.060565-561.622164 0-155.060565-155.090241-155.060565-406.531923 0-561.622164 155.090241-155.060565 406.531923-155.060565 561.622164 0C947.870624 386.278647 947.870624 637.721353 792.810059 792.81057z"  ></path>' +
    '' +
    '<path d="M699.797665 357.500207 665.937486 323.610352 511.409041 478.126518 357.471043 324.201823 323.609841 358.091678 477.531466 512 323.609841 665.907299 357.471043 699.7992 511.409041 545.874505 665.937486 700.389648 699.797665 666.49877 545.285592 512Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ditu" viewBox="0 0 1399 1024">' +
    '' +
    '<path d="M557.793546 308.547728c0-15.46655 3.077147-30.923776 8.992108-45.209198 5.924285-14.288531 14.67706-27.392827 25.618028-38.330686 10.931643-10.934751 24.035939-19.693742 38.32447-25.611811 14.294748-5.924285 29.751973-8.995216 45.218523-8.995216s30.926884 3.070931 45.209198 8.995216c14.285423 5.918069 27.392827 14.67706 38.333795 25.611811 10.931643 10.93786 19.690634 24.042155 25.608703 38.330686 5.914961 14.285423 8.992108 29.742648 8.992108 45.209198 0 15.469658-3.074039 30.926884-8.992108 45.215415-5.918069 14.285423-14.680168 27.395935-25.608703 38.330686-10.944076 10.940968-24.048372 19.693742-38.333795 25.611811-14.282315 5.911853-29.742648 8.995216-45.209198 8.995216s-30.926884-3.083364-45.218523-8.995216c-14.288531-5.918069-27.392827-14.673952-38.32447-25.611811-10.940968-10.934751-19.693742-24.045264-25.618028-38.330686C560.870693 339.474612 557.793546 324.017387 557.793546 308.547728L557.793546 308.547728zM189.173065 543.610694l0 1.081664L189.173065 543.610694zM675.896943 3.552706c-181.825211 0-329.232996 147.404677-329.232996 329.226779 0 181.815886 329.232996 548.698866 329.232996 548.698866s329.214346-366.88298 329.214346-548.698866C1005.111289 150.954275 857.706612 3.552706 675.896943 3.552706L675.896943 3.552706 675.896943 3.552706zM675.896943 469.951871c-90.915714 0-164.614944-73.69923-164.614944-164.614944 0-90.931255 73.69923-164.608727 164.614944-164.608727 90.925038 0 164.627377 73.677473 164.627377 164.608727C840.524319 396.252641 766.821981 469.951871 675.896943 469.951871L675.896943 469.951871 675.896943 469.951871zM750.547291 821.175591l-20.604454 35.682475c210.744178 3.788932 374.411112 31.893543 374.411112 66.006362 0 36.69265-189.409291 66.438406-423.054904 66.438406-323.827785 0-423.064229-29.745757-423.064229-66.438406 0-33.590636 158.647143-61.347126 364.666812-65.810544l-20.71635-35.878293c-224.507418 7.711517-396.137636 49.896409-396.137636 100.775018 0 56.361526 110.32039 102.049392 470.315534 102.049392 259.745417 0 470.315534-45.684758 470.315534-102.049392C1146.681819 871.068891 975.05471 828.884 750.547291 821.175591L750.547291 821.175591zM750.547291 821.175591"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)