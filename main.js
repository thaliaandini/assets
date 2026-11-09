// toko-wa-plus-blogger-template
const $license_item = 'apotek-hnm-blogger-template';

license();

function license() {
    function decodeKey(encodedStr) {
        function isBase64(str) {
            try {
                return btoa(atob(str)) == str;
            } catch (err) {
                return false;
            }
        }
        if (isBase64(encodedStr)) {
            encodedStr = atob(encodedStr);
            encodedStr = encodedStr.replaceAll('XXX', '.');
            encodedStr = encodedStr.replaceAll('YY', '-');
            encodedStr = encodedStr.replaceAll('O5', 'a');
            encodedStr = encodedStr.replaceAll('E4', 'i');
            encodedStr = encodedStr.replaceAll('U3', 'u');
            encodedStr = encodedStr.replaceAll('I2', 'e');
            encodedStr = encodedStr.replaceAll('A1', 'o');

            function reverseStr(str) {
                return str.split('').reverse().join('');
            }
            return reverseStr(encodedStr);
        } else {
            return '';
        }
    }

    function showNotice(message) {
        var noticeHtml = `
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet">
            <style>hr { margin:0!important; } body { padding: 0px!important; } * { font-family: "Rubik", sans-serif; font-weight:400; box-sizing:border-box;margin:0;padding:0; text-decoration:none; color:#636363; } b { font-weight: 500; color:#232323; }</style>
            <div id="notice_html" style="display:flex;background:#fafafa;min-height:100vh;text-align:center;">
                <div style="margin:auto;width:480px;max-width:80%;background:white;padding:30px;border-radius:10px;border:1px solid #ddd;">
                    <svg style="fill:#636363;width:100px;height:100px;display:block;margin:0 auto 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"/></svg>
                    <h2><b>Peringatan</b> :</h2>
                    <br>
                    <p>${message}</p>
                    <br>
                    <hr style="border:0;border-top:1px solid #ddd;">
                    <br>
                    <a href="https://apotek-hnm.web.id/asset?detail=${$license_item}" target="_blank" style="opacity:.7;font-size:70%;letter-spacing:1px;">https://apotek-hnm.web.id</a>
                </div>
            </div>
        `;
        return document.body.innerHTML = noticeHtml;
    }

    if (typeof $license_key === 'undefined') {
        showNotice('Dilarang menghapus variable <b>$license_key</b>..');
    } else if (typeof $license_item === 'undefined') {
        showNotice('Dilarang menghapus variable <b>$license_item</b>..');
    } else {
        if (location.hostname.indexOf('localhost') != -1 || location.hostname.indexOf('.blogspot.com') != -1 || location.hostname.indexOf('.blogger.com') != -1) {
            console.log('Developed by. https://apotek-hnm.web.id ( Free / Trial Version )');
            var copyrightEl = document.getElementById('copyright');
            if (copyrightEl === null) {
                showNotice('<b>Hargailah Hak Cipta</b><br><br><small>Gunakan "Lisensi Premium" untuk menghapus credit.</small><br><br><small>#ERR_COPYRIGHT</small>');
            } else {
                var currentYear = new Date().getFullYear();
                copyrightEl.innerHTML = '&#0169;' + currentYear + ' &#8212; Made with. <a href="https://apotek-hnm.web.id/asset?detail=' + $license_item + '" target="_blank"><b>Twi</b></a>';
                copyrightEl.setAttribute('style', 'display:inline-block!important;opacity:1!important;position:static!important;visibility:visible!important;text-indent:0px!important;color:currentColor!important');
            }
        } else {
            if ($license_key === '') {
                showNotice('<b>Kode Lisensi</b> dibutuhkan..<br><br><small>#ERR_LICENSE</small>');
            } else {
                const domainKey = decodeKey($license_key).split('|')[0];
                const itemKey = decodeKey($license_key).split('|')[1];
                if (domainKey == '' || domainKey == undefined) {
                    showNotice('<b>Kode Lisensi</b> yang digunakan tidak valid.</b><br><br><small>#ERR_KEY</small>');
                } else if (location.hostname.indexOf(domainKey) == -1) {
                    showNotice('<b>Kode Lisensi</b> hanya bisa digunakan pada website dengan domain : <b>' + domainKey + '</b><br><br><small>#ERR_DOMAIN</small>');
                } else if (itemKey != $license_item) {
                    function toTitleCase(str) {
                        str = str.split(' ');
                        for (var i = 0; i < str.length; i++) {
                            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                        }
                        return str.join(' ');
                    }
                    showNotice('<b>Kode Lisensi</b> hanya bisa digunakan untuk <b>' + toTitleCase($license_item.replaceAll('-', ' ')) + '</b><br><br><small>#ERR_ITEM</small>');
                } else {
                    console.log('Developed by. https://apotek-hnm.web.id ( Premium Version )');
                }
            }
        }
    }
}

window.onload = function() {
    etc();
    slideshow();
    product_convert();
    product_sort();
    shortcode();
    cart();
    lazyload();
    lightbox();
    pop();
    popwin();
    timeago();
    translate();
    custom_js();
};

function cart() {
    var formHtml = `
        <fieldset>
            <input type="text" name="name" placeholder="${$_config.text.checkout_name}" required>
            <input type="tel" name="phone" placeholder="${$_config.text.checkout_phone}" required>
        </fieldset>
    `;

    if ($_config.checkout_form.email) {
        formHtml += `<input type="email" name="email" placeholder="${$_config.text.checkout_email}" required>`;
    }
    if ($_config.checkout_form.address) {
        formHtml += `<textarea name="address" placeholder="${$_config.text.checkout_address}" required></textarea>`;
    }
    if ($_config.checkout_form.note) {
        formHtml += `<textarea name="note" placeholder="${$_config.text.checkout_note}"></textarea>`;
    }

    if ($_config.checkout_form.shipping) {
        formHtml += `
            <select name="shipping" required>
                <option value="" selected hidden>${$_config.text.checkout_shipping}</option>
                <optgroup label="${$_config.text.checkout_shipping} :">
        `;
        for (var shipKey in $_config.checkout_form_shipping) {
            var shipItem = $_config.checkout_form_shipping[shipKey];
            if (shipItem.status == true) {
                $('<img src="' + shipItem.img + '"/>').on('load', function() {});
                formHtml += `<option value="${shipKey}" data-info="${shipItem.info}" data-img="${shipItem.img}">${shipKey}</option>`;
            }
        }
        formHtml += `</optgroup></select>`;
    }

    if ($_config.checkout_form.payment) {
        $('#contact').append(`<p class="shippay"><b>${$_config.text.checkout_payment} :</b></p>`);
        formHtml += `
            <select name="payment" required>
                <option value="" selected hidden>${$_config.text.checkout_payment}</option>
                <optgroup label="${$_config.text.checkout_payment} :">
        `;
        for (var payKey in $_config.checkout_form_payment) {
            var payItem = $_config.checkout_form_payment[payKey];
            if (payItem.status == true) {
                $('#contact .shippay').append(`<figure><img alt="${payKey}" src="${payItem.img}" width="24" height="24"/><figcaption>${payKey}</figcaption></figure>`);
                $('<img src="' + payItem.img + '"/>').on('load', function() {});
                formHtml += `<option value="${payKey}" data-info="${payItem.info}" data-img="${payItem.img}">${payKey}</option>`;
            }
        }
        formHtml += `</optgroup></select>`;
    }

    $('#cart .form').append(formHtml);

    $('#cart .form').on('change', 'select', function() {
        var selectEl = $(this);
        var val = selectEl.val();
        var selectedOpt = $('option:selected', selectEl);
        var info = selectedOpt.attr('data-info');
        var img = selectedOpt.attr('data-img');
        selectEl.prev('.detail').remove();
        $('<img src="' + img + '"/>').on('load', function() {
            $(`
                <div class="detail">
                    <img src="${img}">
                    <h4>${val}</h4>
                    <p>${info}</p>
                </div>
            `).insertBefore(selectEl).hide().fadeIn();
        });
    });

    $('#cart .form').on('click', '.detail', function() {
        $(this).next('select').focus();
    });

    var cartData = [];
    if (localStorage.cart) {
        cartData = JSON.parse(localStorage.cart);
        renderCart();
    }

    $('.product').on('click', '.cart-add', function() {
        var productEl = $(this).closest('.product');
        var id = Number(productEl.attr('id'));
        var img = $('.img', productEl).attr('src');
        var link = location.href;
        var title = $('.title', productEl).text().replace(/\n/g, '').replaceAll('  ', '');
        var variantObj = '';
        var price = Number($('.price b', productEl).attr('data-price'));
        var weight = Number($('.price', productEl).attr('data-weight'));
        var unit = $('.price', productEl).attr('data-unit');
        var qty = Number($('.qty input', productEl).val());

        if ($('.variant', productEl).length && $('.variant button.active', productEl).length) {
            var varLabel = $('.variant label', productEl).text().replace(/\n/g, '').replaceAll('  ', '');
            var varVal = $('.variant button.active', productEl).text().replace(/\n/g, '').replaceAll('  ', '');
            id = id + '|' + varLabel + ' : ' + varVal;
            variantObj = {
                label: varLabel,
                value: varVal
            };
        }

        $('#cart-btn').removeClass('open');
        setTimeout(function() {
            $('#cart-btn').addClass('open');
        }, 100);

        for (var i in cartData) {
            if (cartData[i].id == id) {
                cartData[i].qty = qty;
                saveCart();
                renderCart();
                return;
            }
        }

        var newItem = {
            id: id,
            img: img,
            title: title,
            link: link,
            variant: variantObj,
            price: price,
            weight: weight,
            unit: unit,
            qty: qty
        };
        cartData.push(newItem);
        saveCart();
        renderCart();
    });

    $('#cart-btn, .cart-btn-head').on('click', function() {
        $('#cart').addClass('open');
        $('body').css('overflow', 'hidden');
    });

    $('#cart-close').on('click', function() {
        $('#cart').removeClass('open');
        $('body').css('overflow', 'auto');
    });

    $('#cart').on('click', '.qty button', function() {
        var itemEl = $(this).closest('.item');
        var currentQty = Number($('.qty input', itemEl).val());
        currentQty = $(this).text() == '-' ? currentQty - 1 : currentQty + 1;
        $('.qty input', itemEl).val(currentQty).trigger('change');
    });

    $('#cart').on('change', '.item .qty input', function() {
        var itemEl = $(this).closest('.item');
        var idx = itemEl.attr('data-index');
        var newQty = Number($(this).val());
        if (newQty > 0) {
            cartData[idx].qty = newQty;
            saveCart();
            renderCart();
            return;
        } else {
            if (!confirm($_config.text.cart_remove)) {
                newQty = 1;
                $('.qty input', itemEl).val(newQty).trigger('change');
            } else {
                cartData.splice(idx, 1);
                saveCart();
                renderCart();
            }
        }
    });

    $('#cart').on('change', '.item .note', function() {
        var itemEl = $(this).closest('.item');
        var idx = itemEl.attr('data-index');
        var noteVal = $(this).val();
        cartData[idx].note = noteVal;
        saveCart();
        renderCart();
    });

    var buyerData = {};
    $('#cart').on('change', '[name]', function() {
        var fieldName = $(this).attr('name');
        var fieldVal = $(this).val();
        if (fieldName != 'note' && fieldName != 'shipping' && fieldName != 'payment') {
            buyerData[fieldName] = fieldVal;
            localStorage.buyer = JSON.stringify(buyerData);
        }
    });

    if (localStorage.buyer) {
        var buyerData = JSON.parse(localStorage.buyer);
        for (var key in buyerData) {
            $('#cart .form [name=' + key + ']').val(buyerData[key]).trigger('change');
        }
    }

    $('#cart').on('submit', function(e) {
        e.preventDefault();
        if (!confirm($_config.text.checkout_confirm)) return;

        var formValues = {};
        $('[name]:visible', this).each(function() {
            formValues[$(this).attr('name')] = $(this).val();
        });

        var waText = $_config.text.checkout_intro + '\n\n';
        var totalQty = 0;
        var totalPrice = 0;
        var totalWeight = 0;
        var itemNo = 0;

        for (var i in cartData) {
            itemNo++;
            var item = cartData[i];
            waText += '                    ' + (cartData.length > 1 ? itemNo + '. ' : '') + '*' + item.title + '*\n\n                    ' +
                (item.variant ? '[tab]' + item.variant.label + ' : *' + item.variant.value + '*\n' : '') +
                '                    [tab]' + $_config.text.cart_qty_n_price + ' : *' + item.qty + ' x ' + separator(item.price) + ' = *' + separator(item.price * item.qty) + '*\n' +
                '                    [tab]' + $_config.text.cart_note + ' : ' + (item.note ? '*' + item.note + '*' : '-') + '\n\n                ';

            totalQty += Number(item.qty);
            totalPrice += Number(item.price * item.qty);
            totalWeight += Number(item.weight * item.qty);
        }

        waText += '                = = = = = = = = = = = = = = =\n\n                ' +
            (totalWeight ? $_config.text.cart_weight + ' = *' + kg(totalWeight) + '*\n' : '') +
            '                ' + $_config.text.cart_total + ' ( ' + totalQty + ' ' + $_config.text.cart_order + ' ) = *' + separator(totalPrice) + '*\n\n                = = = = = = = = = = = = = = =\n\n                ' +
            $_config.text.checkout_info + ' :\n\n                *' + formValues.name + '* ( ' + formValues.phone + ' )\n\n                ' +
            (formValues.email ? '*' + $_config.text.checkout_email + '* : ' + formValues.email + '\n\n' : '') +
            '                ' + (formValues.address ? '*' + $_config.text.checkout_address + '* :\n\n' + formValues.address + '\n\n' : '') +
            '                *' + $_config.text.checkout_note + '* : ' + (formValues.note ? '\n\n' + formValues.note : '-') + '\n\n                ' +
            (formValues.shipping ? '*' + $_config.text.checkout_shipping + '* : ' + formValues.shipping + '\n' + $_config.checkout_form_shipping[formValues.shipping].info + '\n\n' : '') +
            '                ' + (formValues.payment ? '*' + $_config.text.checkout_payment + '* : ' + formValues.payment + '\n' + $_config.checkout_form_payment[formValues.payment].info + '\n\n' : '') +
            '                via. ' + location.protocol + '//' + location.hostname + '            ';

        waText = waText.replaceAll('  ', '').replaceAll('[tab]', '    ');
        waText = encodeURIComponent(waText);

        var waUrl = 'https://api.whatsapp.com/send?phone=' + $_config.whatsapp + '&text=' + waText;
        localStorage.removeItem('cart');
        location.href = waUrl;
    });

    function saveCart() {
        if (window.localStorage) {
            localStorage.cart = JSON.stringify(cartData);
        }
    }

    function renderCart() {
        $('#cart .list').empty();
        if (cartData.length == 0) {
            $('#cart .list_n_form, #cart .cta').hide();
            $('#cart-btn').removeClass('open');
            $('#cart .empty').show();
            return;
        }
        $('#cart .list_n_form, #cart .cta').show();
        $('#cart-btn').addClass('open');
        $('#cart .empty').hide();

        var totalQty = 0;
        var totalPrice = 0;
        var totalWeight = 0;

        for (var i in cartData) {
            var item = cartData[i];
            var itemHtml = `
                <div class="item" data-id="${item.id}" data-index="${i}">
                    <div class="left">
                        <b class="title">${item.title}</b>
                        <br>
                        ${item.variant ? item.variant.label + ' : <b class="variant">' + item.variant.value + '</b><br>' : ''}
                        <input class="note" type="text" placeholder="+ ${$_config.text.cart_note}.." value="${item.note ? item.note : ''}">
                        <b class="total">${separator(item.price)}</b>${item.unit ? ' <span class="unit">/' + item.unit + '</span>' : ''}
                    </div>
                    <div class="right">
                        <a class="link" href="${item.link}">
                            <img class="img" src="${item.img}"/>
                            ${item.weight ? '<small class="weight" title="' + $_config.text.cart_weight + '">' + kg(item.weight) + '</small>' : ''}
                        </a>
                        <fieldset class="qty">
                            <button type="button">-</button>
                            <input type="number" value="${item.qty}">
                            <button type="button">+</button>
                        </fieldset>
                    </div>
                </div>
            `;
            $('#cart .list').prepend(itemHtml);
            totalQty += Number(item.qty);
            totalPrice += Number(item.price * item.qty);
            totalWeight += Number(item.weight * item.qty);
        }

        $('#cart .cta .subtotal .wrap .grid.weight').remove();
        if (totalWeight > 0) {
            $('#cart .cta .subtotal .wrap').prepend(`
                <div class="grid weight">
                    <span>${$_config.text.cart_weight}</span>
                    <b>${kg(totalWeight)}</b>
                </div>
            `);
            $('#cart [name=shipping]').show().removeAttr('disabled');
            $('#cart [name=shipping]').prev('.detail').show();
        } else {
            $('#cart [name=shipping]').hide().attr('disabled', true);
            $('#cart [name=shipping]').prev('.detail').hide();
        }

        $('#cart .cta .subtotal .qty, #cart-btn .qty').text(totalQty);
        $('#cart .cta .subtotal .sub, #cart-btn .sub').text(separator(totalPrice));
        $('#cart-btn').removeClass('open');
        setTimeout(function() {
            $('#cart-btn').addClass('open');
        }, 100);
    }
}

function slideshow() {
    $('.slideshow').each(function() {
        var el = $(this);
        var delay = parseInt(el.attr('data-delay')) || 4000;
        var fade = parseInt(el.attr('data-fade')) || 1000;
        var timer;

        if ($('.slideshow-item, .widget', el).length > 1) {
            timer = setInterval(function() {
                $('.slideshow-item:visible, .widget:visible', el).each(function() {
                    var current = $(this);
                    current.hide();
                    if (current.next('.slideshow-item, .widget').length) {
                        current.next('.slideshow-item, .widget').fadeIn(fade);
                    } else {
                        current.closest('.slideshow').find('.slideshow-item, .widget').first().fadeIn(fade);
                    }
                });
            }, delay);

            $(this).append(`
                <button class="nav-left" aria-label="Navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>
                </button>
                <button class="nav-right" aria-label="Navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>
                </button>
            `);
        }

        $('.nav-left', el).on('click', function() {
            clearInterval(timer);
            $('.slideshow-item:visible, .widget:visible', el).each(function() {
                var current = $(this);
                current.hide();
                if (current.prev('.slideshow-item, .widget').length) {
                    current.prev('.slideshow-item, .widget').fadeIn(fade);
                } else {
                    current.closest('.slideshow').find('.slideshow-item, .widget').last().fadeIn(fade);
                }
            });
        });

        $('.nav-right', el).on('click', function() {
            clearInterval(timer);
            $('.slideshow-item:visible, .widget:visible', el).each(function() {
                var current = $(this);
                current.hide();
                if (current.next('.slideshow-item, .widget').length) {
                    current.next('.slideshow-item, .widget').fadeIn(fade);
                } else {
                    current.closest('.slideshow').find('.slideshow-item, .widget').first().fadeIn(fade);
                }
            });
        });
    });
}

function product_sort() {
    $('#sort select').on('change', function() {
        $('#sort').addClass('loading');
        var sortBy = $(this).val();
        var articles = $('.Blog article');

        if (sortBy == 'terbaru') {
            articles.sort(function(a, b) {
                return new Date($('[itemprop="releaseDate"]', b).attr('content')).getTime() - new Date($('[itemprop="releaseDate"]', a).attr('content')).getTime();
            });
        } else if (sortBy == 'terlama') {
            articles.sort(function(a, b) {
                return new Date($('[itemprop="releaseDate"]', a).attr('content')).getTime() - new Date($('[itemprop="releaseDate"]', b).attr('content')).getTime();
            });
        } else if (sortBy == 'terendah') {
            articles.sort(function(a, b) {
                return $('.price b', a).attr('data-price') - $('.price b', b).attr('data-price');
            });
        } else if (sortBy == 'tertinggi') {
            articles.sort(function(a, b) {
                return $('.price b', b).attr('data-price') - $('.price b', a).attr('data-price');
            });
        }

        setTimeout(function() {
            $('.Blog .is_loop').append(articles);
            $('#sort').removeClass('loading');
            lazyload();
        }, 500);
    });

    if ($('#sort select').val() != '') {
        $('#sort select').trigger('change');
    }
}

function product_convert() {
    $('.product:not(.field_loaded)').each(function() {
        var prod = $(this);
        prod.addClass('field_loaded');
        $('meta[itemprop="priceCurrency"]', prod).attr('content', $_config.money.currency);

        if (prod.hasClass('is_post') && $('.image .gallery', this).length) {
            $('.image .gallery img', this).each(function() {
                var rawSrc = $(this).attr('src').split('=')[0];
                var sizeSegment = rawSrc.split('/')[7];
                var thumbSrc = rawSrc.replace(sizeSegment, 'w150-h150-c') + '=w150-h150-c';
                var fullSrc = rawSrc.replace(sizeSegment, 's800') + '=s800';
                $('figure.cover', prod).append(`<a data-lightbox="gallery" data-lightbox-title="${$('.title', prod).text()}" href="${fullSrc}"><img data-src="${thumbSrc}"/></a>`);
            });
        }

        var fields = {};
        $('.field td[class]', prod).each(function() {
            var cls = $(this).attr('class');
            if (cls != 'img') {
                fields[cls] = $(this).text().replaceAll(' ', '').replaceAll('.', '').replaceAll(',', '').replaceAll('%', '').replaceAll(/(?:\r\n|\r|\n)/g, '');
            }
        });

        if (fields.status == 'off') {
            prod.addClass('empty');
            $('figure.cover a:first', prod).append(`<span class="empty"><b>${$_config.text.product_empty}</b></span>`);
            $('[itemprop="availability"]', prod).attr('content', 'https://schema.org/OutOfStock');
        }

        var htmlOut = `<div class="price" data-price="${Number(fields.price)}" data-discount="${Number(fields.discount)}" data-unit="${fields.unit}" data-weight="${Number(fields.weight)}"></div>`;

        if (prod.hasClass('is_post')) {
            htmlOut += `<br><div class="option">`;
            var variantEl = $('.variant', prod);
            if ($('.status', variantEl).text() == 'on') {
                htmlOut += `<div class="item variant"><label>${$('.label', variantEl).text()}</label><fieldset>`;
                $('.name', variantEl).each(function() {
                    if ($(this).text()) {
                        var varPrice = $(this).next('.price').text();
                        htmlOut += `<button ${varPrice ? 'data-price="' + varPrice.replaceAll('.', '').replaceAll(',', '') + '"' : ''}>${$(this).text()}</button>`;
                    }
                });
                htmlOut += `</fieldset></div>`;
            }

            htmlOut += `
                <div class="item qty">
                    <label>${$_config.text.product_qty}</label>
                    <fieldset>
                        <button>-</button>
                        <input type="number" value="1">
                        <button>+</button>
                    </fieldset>
                </div>
                <div class="cta ${fields.status == 'off' ? 'disabled' : ''}">
                    <button class="chat" target="pop-chat">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg>
                    </button>
                    <button class="cart-add">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M387.9 373.7h49.2l17.5-75.4h-66.7zM387.9 448h.5c18.7 0 33.4-12.5 38.3-29.5l6-25.9h-44.8V448zM265.4 392.5h103.7V448H265.4zM75 373.7h49v-75.4H57.5zM142.9 192h103.7v87.5H142.9zM265.4 192h103.7v87.5H265.4zM85.5 418.3c4.7 17 19.4 29.7 38.1 29.7h.5v-55.5H79.4l6.1 25.8zM142.9 392.5h103.7V448H142.9zM265.4 298.3h103.7v75.4H265.4zM142.9 298.3h103.7v75.4H142.9z" /><path d="M464 192h-47.9V96c0-17.6-14.4-32-32-32H127.9c-17.6 0-32 14.4-32 32v96H48c-10.3 0-17.9 9.6-15.6 19.6l19.7 67.9H124V106c0-7.7 6.3-14 14-14h236c7.7 0 14 6.3 14 14v173.5h72l19.6-67.9c2.3-10-5.3-19.6-15.6-19.6z" /></svg>
                        ${$_config.text.product_add}
                    </button>
            `;

            if (fields.status == 'on') {
                var mpEl = $('.marketplace', prod);
                if ($('.status', mpEl).text() == 'on') {
                    htmlOut += `<div class="marketplace"><small>${$_config.text.product_via_marketplace}</small><br>`;
                    $('.link', mpEl).each(function() {
                        if ($(this).text()) {
                            var mpUrl = $(this).text();
                            var domain = mpUrl.split('/')[2].toLowerCase().replace('www.', '');
                            htmlOut += `<a href="${mpUrl}" target="_blank" title="${domain}" rel="nofollow"><img src="https://www.google.com/s2/favicons?domain=${mpUrl.split('/')[2]}&sz=24" alt="favicon"/></a>`;
                        }
                    });
                    htmlOut += `</div>`;
                }
            }
            htmlOut += `</div>`;
        }

        var titleEl = $('.title', this);
        $(htmlOut).insertAfter(titleEl);

        var unit = $('.price', prod).attr('data-unit');
        var basePrice = Number($('.price', prod).attr('data-price'));
        var discount = Number($('.price', prod).attr('data-discount'));

        function renderPriceDisplay(priceVal) {
            if (discount) {
                var finalPrice = priceVal - (priceVal * discount / 100);
                var badge = fields.mark ? `<small>${fields.mark}</small>` : `<small>-${discount}%</small>`;
                $('.price', prod).html(`${badge}<s>${separator(priceVal)}</s><b data-price="${finalPrice}">${separator(finalPrice)}</b>${unit ? '<span>/' + unit + '</span>' : ''}`);
                $('[itemprop="price"]', prod).attr('content', finalPrice);
            } else {
                var badge = fields.mark ? `<small>${fields.mark}</small>` : '';
                $('.price', prod).html(`${badge}<b data-price="${priceVal}">${separator(priceVal)}</b>${unit ? '<span>/' + unit + '</span>' : ''}`);
                $('[itemprop="price"]', prod).attr('content', priceVal);
            }
        }

        renderPriceDisplay(basePrice);

        $('.variant button', prod).each(function() {
            if (!$(this).attr('data-price')) {
                $(this).attr('data-price', $('.price', prod).attr('data-price'));
            }
        });

        $('.variant button', prod).on('click', function() {
            $('.variant button', prod).removeClass('active');
            $(this).addClass('active');
            var varPrice = Number($(this).attr('data-price'));
            if (varPrice) {
                renderPriceDisplay(varPrice);
            }
        });

        $('.variant button:first', prod).trigger('click');

        $('.qty input', prod).on('change', function() {
            var q = Number($('.qty input', prod).val());
            if (q < 1) q = 1;
            $('.qty input', prod).val(q);
        });

        $('.qty button', prod).on('click', function() {
            var q = Number($('.qty input', prod).val());
            q = $(this).text() == '-' ? q - 1 : q + 1;
            $('.qty input', prod).val(q).trigger('change');
        });
    });
}

function popwin(url = '', w = '', h = '') {
    if (url) {
        var width = w || 960;
        var height = h || 540;
        var left = Number((screen.width / 2) - (width / 2));
        var top = Number((screen.height / 2) - (height / 2));
        var win = window.open(url, '', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);
        win.focus();
    } else {
        $(document).on('click', '[target="_popwin"]', function(e) {
            e.stopPropagation();
            e.preventDefault();
            var targetUrl = $(this).attr('href');
            var width = $(this).attr('data-popwin-width') || 960;
            var height = $(this).attr('data-popwin-height') || 540;
            var left = Number((screen.width / 2) - (width / 2));
            var top = Number((screen.height / 2) - (height / 2));
            var win = window.open(targetUrl, '', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);
            win.focus();
        });
    }
}

function shortcode() {
    $('.post-body').each(function() {
        $(this).html(
            $(this).html()
            .replace(/\[youtube\]/g, '<div class="video"><iframe allowfullscreen="true" data-shortcode="youtube" data-src="')
            .replace(/\[\/youtube\]/g, '"></iframe></div>')
            .replace(/\[code\]/g, '<pre data-shortcode="code"><code>')
            .replace(/\[\/code\]/g, '</code></pre>')
            .replace(/\[img\]/g, '<img style="display:block;width:100%;border-radius:10px;" data-shortcode="img" src="')
            .replace(/\[\/img\]/g, '" alt="image"/>')
            .replace(/\[url\]/g, '<a data-shortcode="url" href="')
            .replace(/\[\/url\]/g, '" target="_blank" rel="nofollow external">Lihat Tautan</a>')
        );
    });

    $('[data-shortcode]').each(function() {
        var type = $(this).attr('data-shortcode');
        if (type == 'img') {
            var src = $(this).attr('src');
            $(this).wrap(`<a class="lightbox" href="${src}"></a>`);
        }
        if (type == 'youtube') {
            var url = $(this).attr('data-src');
            var videoId = url.split('/')[3];
            if (url.indexOf('https://www.youtube.com/watch?v=') >= 0) {
                videoId = get_url_parameter('v', url);
            }
            $(this).attr('data-src', 'https://www.youtube.com/embed/' + videoId + '?rel=0');
        }
    });
}

function translate() {
    $('[data-text]').each(function() {
        var key = $(this).attr('data-text');
        $(this).text($_config.text[key] ? $_config.text[key] : key);
    });
    $('[data-text-label]').each(function() {
        var key = $(this).attr('data-text-label');
        $(this).attr('label', $_config.text[key] ? $_config.text[key] : key);
    });
    $('[data-text-placeholder]').each(function() {
        var key = $(this).attr('data-text-placeholder');
        $(this).attr('placeholder', $_config.text[key] ? $_config.text[key] : key);
    });
    $('[data-text-pop-title]').each(function() {
        var key = $(this).attr('data-text-pop-title');
        $(this).attr('data-pop-title', $_config.text[key] ? $_config.text[key] : key);
    });
}

function etc() {
    $(window).on('beforeunload', function() {
        $('body').addClass('loading');
        setTimeout(function() {
            $('body').removeClass('loading');
        }, 2000);
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('shadow');
        } else {
            $('#header').removeClass('shadow');
        }
    });

    $('#header a[target=pop-search]').on('click', function() {
        setTimeout(function() {
            $('#header #pop-search [type=search]').focus();
        }, 50);
    });

    $('#pop-chat').on('submit', 'form', function(e) {
        e.preventDefault();
        var msg = $('input', this).val() + '\n\nvia. ' + location.href;
        var waUrl = 'https://api.whatsapp.com/send?phone=' + $_config.whatsapp + '&text=' + encodeURIComponent(msg);
        popwin(waUrl);
    });

    $('.LinkList li a[href*="#"]').each(function() {
        $(this).attr('href', 'javascript:void(0)');
        $(this).append('<i class="icon right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg></i>');
        var li = $(this).parent('li');
        li.addClass('dropdown');
        li.wrapInner('<span class="dropdown-title"></span>');
        li.append('<ul class="sub"></ul>');
    });

    $('.LinkList li a:contains("_")').each(function() {
        var subUl = $(this).parent('li').prev('.dropdown').find('ul');
        $(this).parent('li').appendTo(subUl);
        var cleanText = $(this).text().replaceAll('_', '').replaceAll('_ ', '');
        $(this).text(cleanText);
    });

    $('.LinkList').on('click', 'li.dropdown', function() {
        $(this).find('ul:first').toggle();
        $(this).toggleClass('active');
    });

    if ($('[data-feed]').length) {
        $('[data-feed]').each(function() {
            var container = $(this);
            var feedUrl = $(this).attr('data-feed').replace('?m=1', '').replace('&m=1', '').replaceAll(' ', '%20');
            container.addClass('loading');
            container.load(feedUrl + ' .is_loop', function() {
                container.html($(this).html());
                var hideId = container.attr('data-hide-id');
                if (hideId) {
                    if (container.find('article#' + hideId).length) {
                        container.find('article#' + hideId).remove();
                    } else {
                        container.find('article:last-of-type').remove();
                    }
                }
                product_convert();
                lazyload();
                timeago();
                container.removeClass('loading');
                if (container.find('article').length == 0) {
                    container.closest('#related').remove();
                }
            });
        });
    }

    $('#pop-bagikan .copy button').on('click', function() {
        var btn = $(this);
        btn.siblings('input').select();
        document.execCommand('copy');
        btn.text('Disalin!');
        setTimeout(function() {
            btn.text('Salin');
        }, 2000);
    });

    if (window.location.hash && $(window.location.hash).length) {
        var headerH = $('#header').outerHeight();
        var stickyH = $('.is_single article .attr-sticky').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $(window.location.hash).offset().top - headerH - stickyH - 20
        }, 500);
        $(window.location.hash).addClass('focus');
        setTimeout(function() {
            $(window.location.hash).removeClass('focus');
        }, 2000);
    }

    $(document).on('click', 'a[href*="#"]', function(e) {
        var hash = '#' + $(this).attr('href').split('#')[1];
        if ($(hash).length && $(this).attr('href').split('#')[0] === '') {
            e.preventDefault();
            var headerH = $('#header').outerHeight();
            var stickyH = $('.is_single article .attr-sticky').outerHeight();
            var targetTop = $(hash).offset().top - headerH - (stickyH ? stickyH : 0) - 20;
            $('html, body').stop().animate({ scrollTop: targetTop }, 500);
            $(hash).addClass('focus');
            setTimeout(function() {
                $(hash).removeClass('focus');
            }, 2000);
        }
    });

    $(document).on('click', '.loadmore-btn', function(e) {
        e.preventDefault();
        let nextUrl = $(this).attr('href');
        let btn = $('#blog-pager .loadmore-btn');
        if (nextUrl) {
            $.ajax({
                url: nextUrl,
                beforeSend: function() {
                    btn.addClass('loading');
                },
                complete: function() {
                    btn.removeClass('loading');
                },
                success: function(res) {
                    let posts = $(res).find('.Blog .is_loop').html();
                    let newNextUrl = $(res).find('.loadmore-btn').attr('href');
                    $('.Blog .is_loop').append(posts);
                    btn.show();
                    product_convert();
                    product_sort();
                    lazyload();
                    timeago();
                    if (newNextUrl) {
                        btn.attr('href', newNextUrl);
                    } else {
                        btn.fadeOut();
                    }
                }
            });
        }
    });

    if ($_config.url.view == 'single') {
        var prevLabel = $_config.text.product_prev;
        var olderLink = $('a.blog-pager-older-link').attr('href');
        $('a.blog-pager-older-link').load(olderLink + ' article h1', function() {
            var postTitle = $('a.blog-pager-older-link').text();
            $('a.blog-pager-older-link').html(`<figure class="loading"></figure><div class="flex left"><div class="wrap"><small><b>${prevLabel}</b></small><h3>${postTitle}</h3></div></div>`);
            $('a.blog-pager-older-link > figure').load(olderLink + ' article .post-body img:first-of-type', function() {
                var imgSrc = $(this).html().split('src="')[1].split('"')[0].split('=')[0];
                var seg = imgSrc.split('/')[7];
                imgSrc = imgSrc.replace(seg, 'w100-h100-c') + '=w100-h100-c';
                $('a.blog-pager-older-link > figure').html(`<img src="${imgSrc}"/>`).removeClass('loading');
            });
        });

        var nextLabel = $_config.text.product_next;
        var newerLink = $('a.blog-pager-newer-link').attr('href');
        $('a.blog-pager-newer-link').load(newerLink + ' article h1', function() {
            var postTitle = $('a.blog-pager-newer-link').text();
            $('a.blog-pager-newer-link').html(`<figure class="loading"></figure><div class="flex right"><div class="wrap"><small><b>${nextLabel}</b></small><h3>${postTitle}</h3></div></div>`);
            $('a.blog-pager-newer-link > figure').load(newerLink + ' article .post-body img:first-of-type', function() {
                var imgSrc = $(this).html().split('src="')[1].split('"')[0].split('=')[0];
                var seg = imgSrc.split('/')[7];
                imgSrc = imgSrc.replace(seg, 'w100-h100-c') + '=w100-h100-c';
                $('a.blog-pager-newer-link > figure').html(`<img src="${imgSrc}"/>`).removeClass('loading');
            });
        });
    }
}

function timeago() {
    $('[datetime]:not(.timeago)').each(function() {
        var el = $(this);
        var dt = el.attr('datetime');
        el.addClass('timeago');
        if (!el.attr('title')) el.attr('title', dt);
        el.text(calcTimeAgo(dt));
    });

    function calcTimeAgo(dateStr) {
        var suffix = 'ago', sec = 'seconds', min = 'minutes', hr = 'hours', day = 'days', mo = 'months', yr = 'years';
        if ($_config.money.country_id == 'id-ID') {
            suffix = 'yang lalu';
            sec = 'detik';
            min = 'menit';
            hr = 'jam';
            day = 'hari';
            mo = 'bulan';
            yr = 'tahun';
        }
        var date = new Date(dateStr);
        var hourMs = 3600000;
        var dayMs = 24 * hourMs;
        var monthMs = 30 * dayMs;
        var yearMs = 365 * dayMs;
        var diff = new Date() - date;

        return diff < 60000 ? Math.round(diff / 1000) + ' ' + sec + ' ' + suffix :
               diff < hourMs ? Math.round(diff / 60000) + ' ' + min + ' ' + suffix :
               diff < dayMs ? Math.round(diff / hourMs) + ' ' + hr + ' ' + suffix :
               diff < monthMs ? Math.round(diff / dayMs) + ' ' + day + ' ' + suffix :
               diff < yearMs ? Math.round(diff / monthMs) + ' ' + mo + ' ' + suffix :
               Math.round(diff / yearMs) + ' ' + yr + ' ' + suffix;
    }

    $('#comments .datetime a:not(.timeago)').each(function() {
        var el = $(this);
        var txt = el.text();
        el.attr('datetime', txt).addClass('timeago').attr('title', txt).text(calcTimeAgo(txt));
    });
}

function separator(num) {
    var out = '';
    var rev = num.toString().split('').reverse().join('');
    for (var i = 0; i < rev.length; i++) {
        if (i % 3 == 0) out += rev.substr(i, 3) + '.';
    }
    return out.split('', out.length - 1).reverse().join('');
}

function kg(grams) {
    var out = grams + ' Gram';
    if (grams >= 1000) out = (grams / 1000) + ' Kg';
    return out;
}

function pop() {
    if ($('[target=pop-video]').length) {
        var popVideoHtml = `
            <div id="pop-video" data-pop-title="Video" data-pop-width="960">
                <div class="video">
                    <iframe allowfullscreen="true"></iframe>
                </div>
            </div>
        `;
        $(popVideoHtml).appendTo('body');
    }

    $('[id*="pop-"]:not(".pop-loaded")').each(function() {
        var el = $(this);
        var title = el.attr('data-pop-title');
        var width = el.attr('data-pop-width');
        el.wrap('<div class="pop"></div>');
        el.wrap('<div class="pop-wrap"></div>');
        el.addClass('pop-content pop-loaded');
        var headerHtml = `
            <header class="pop-header">
                <div class="pop-title"><h3>${title}</h3></div>
                <div class="pop-close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>
                </div>
            </header>
        `;
        el.closest('.pop-wrap').prepend(headerHtml);
        if (width) el.closest('.pop-wrap').css('width', width);
    });

    $('.pop-close').on('click', function() {
        $(this).closest('.pop').removeClass('open');
        $('body').removeClass('pop-open');
        if ($('[id=pop-video] iframe').length) {
            $('[id=pop-video] iframe').attr('src', '');
        }
    });

    $(document).on('click', '[target*="pop-"]', function(e) {
        e.preventDefault();
        var btn = $(this);
        var targetId = btn.attr('target');
        var title = btn.attr('data-pop-title') ? btn.attr('data-pop-title') : $('#' + targetId).attr('data-pop-title');

        btn.closest('.pop').removeClass('open');
        $('body').removeClass('pop-open');

        if ($('#' + targetId).length) {
            $('body').addClass('pop-open');
            $('#' + targetId).closest('.pop').addClass('open');
            if (btn.closest('.pop-content').length) {
                var backId = btn.closest('.pop-content').attr('id');
                title = `<a target="${backId}"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>` + title;
            }
            if (title) {
                $('#' + targetId).closest('.pop').find('.pop-title h3').html(title);
            }
            $('[data-src]').each(function() {
                var dataSrc = $(this).attr('data-src');
                $(this).attr('src', dataSrc).removeAttr('data-src');
            });
        }

        if (targetId == 'pop-video') {
            var href = $(this).attr('href');
            var videoId = href.split('/')[3];
            if (href.indexOf('https://www.youtube.com/watch?v=') >= 0) {
                videoId = get_url_parameter('v', href);
            }
            $('[id=pop-video] iframe').attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&showinfo=0');
        }
    });

    $(document).on('click', '.pop.open', function() {
        $(this).find('.pop-close').trigger('click');
    });

    $(document).on('click', '.pop-wrap', function(e) {
        e.stopPropagation();
    });
}

function lightbox() {
    var lbHtml = `
        <div id="lightbox">
            <div class="lb-wrap">
                <figure>
                    <div class="lb-img">
                        <div class="lb-count"></div>
                    </div>
                    <nav class="lb-nav">
                        <div class="lb-np lb-prev"></div>
                        <div class="lb-close"></div>
                        <div class="lb-np lb-next"></div>
                    </nav>
                </figure>
            </div>
        </div>
    `;
    $(lbHtml).appendTo('body');

    $('[data-lightbox]').each(function() {
        var group = $(this).attr('data-lightbox');
        var total = $('[data-lightbox=' + group + ']').length;
        if (total > 1) {
            $('[data-lightbox=' + group + ']').each(function(idx) {
                $(this).attr('data-lightbox-index', (idx + 1) + ' / ' + total);
            });
        }
        $(this).on('mousedown', function() { return false; });
        $(this).on('contextmenu', function() {
            alert('© ' + $_config.page.title);
            return false;
        });
    });

    $(document).on('click', '[data-lightbox]', function(e) {
        e.preventDefault();
        var el = $(this);
        var group = el.attr('data-lightbox');
        var indexTxt = el.attr('data-lightbox-index');
        var title = el.attr('data-lightbox-title');
        var desc = el.attr('data-lightbox-desc');
        var href = el.attr('href');

        $('#lightbox').scrollTop(0);
        $('#lightbox .lb-close').hide();
        $('#lightbox .lb-wrap figure .lb-img img').remove();
        $('#lightbox .lb-count').hide();
        $('#lightbox .lb-wrap figure figcaption').remove();
        $('#lightbox .lb-np').hide();

        if (href) {
            $('#lightbox .lb-wrap').addClass('lb-loading');
            $('#lightbox .lb-wrap figure .lb-img').prepend(`<img data-src="${href}"/>`);
            $('#lightbox .lb-wrap figure .lb-img img').attr('src', href).on('load', function() {
                $(this).removeAttr('data-src');
                $(this).on('mousedown', function() { return false; });
                $(this).on('contextmenu', function() {
                    alert('© ' + $_config.page.title);
                    return false;
                });
                $('#lightbox .lb-wrap').removeClass('lb-loading');
                if (title || desc) $('#lightbox .lb-wrap figure').append('<figcaption></figcaption>');
                if (title) $('#lightbox .lb-wrap figure figcaption').append(`<h4>${title}</h4>`);
                if (desc) $('#lightbox .lb-wrap figure figcaption').append(`<p>${desc}</p>`);
                if (indexTxt) $('#lightbox .lb-count').html(indexTxt).show();
                $('#lightbox .lb-np').show();

                var prevEl = el.prev('[data-lightbox="' + group + '"]');
                if (prevEl.length) {
                    var prevHref = prevEl.attr('href');
                    $('#lightbox .lb-np.lb-prev').attr('data-id', group).attr('data-url', prevHref).show();
                    $('body').append(`<img src="${prevHref}" style="display:none;"/>`);
                } else {
                    $('#lightbox .lb-np.lb-prev').hide();
                }

                var nextEl = el.next('[data-lightbox="' + group + '"]');
                if (nextEl.length) {
                    var nextHref = nextEl.attr('href');
                    $('#lightbox .lb-np.lb-next').attr('data-id', group).attr('data-url', nextHref).show();
                    $('body').append(`<img src="${nextHref}" style="display:none;"/>`);
                } else {
                    $('#lightbox .lb-np.lb-next').hide();
                }

                $('#lightbox .lb-close').show();
            });
        }
        $('#lightbox').addClass('open');
        $('body').addClass('lightbox_open');
    });

    $('#lightbox .lb-np.lb-prev, #lightbox .lb-np.lb-next').on('click', function(e) {
        e.stopPropagation();
        var url = $(this).attr('data-url');
        var group = $(this).attr('data-id');
        $(`[href="${url}"][data-lightbox="${group}"]`).trigger('click');
    });

    $('#lightbox').click(function() {
        $('#lightbox').removeClass('open');
        $('body').removeClass('lightbox_open');
    });

    $('#lightbox .lb-wrap').on('click', function(e) {
        e.stopPropagation();
    });

    $('#lightbox .lb-close').on('click', function(e) {
        e.stopPropagation();
        $('#lightbox').removeClass('open');
        $('body').removeClass('lightbox_open');
    });

    $(document).on('keydown', function(e) {
        var code = e.keyCode || e.which;
        if (e.key === 'Escape') {
            $('#lightbox').removeClass('open');
            $('body').removeClass('lightbox_open');
        }
        if (code === 37) $('#lightbox .lb-np.lb-prev:visible').trigger('click');
        if (code === 39) $('#lightbox .lb-np.lb-next:visible').trigger('click');
        if (code === 38) $('#lightbox').scrollTop(0);
        if (code === 40) $('#lightbox').scrollTop($('#lightbox').height());
    });
}

function lazyload() {
    $('[data-bg]').each(function() {
        var el = $(this);
        var bg = el.attr('data-bg');
        el.css('background-image', 'url(' + bg + ')').removeAttr('data-bg');
    });

    function loadVisibleImages() {
        var winH = $(window).height();
        var scrollT = $(window).scrollTop();
        var viewportBottom = scrollT + winH;

        $('[data-src]:not([lazy="true"])').each(function() {
            var el = $(this);
            var top = el.offset().top;
            el.attr('data-offset-top', top);

            var src = el.attr('data-src')
                .replace('1.bp.blogspot.com', 'lh3.googleusercontent.com')
                .replace('2.bp.blogspot.com', 'lh3.googleusercontent.com')
                .replace('3.bp.blogspot.com', 'lh3.googleusercontent.com')
                .replace('4.bp.blogspot.com', 'lh3.googleusercontent.com');

            var tag = el.prop('tagName').toLowerCase();
            if (top <= viewportBottom) {
                if (tag == 'img' || tag == 'iframe') {
                    el.attr('src', src).removeAttr('data-src').attr('lazy', 'true');
                }
            }
        });
    }

    loadVisibleImages();
    $(window).on('scroll', loadVisibleImages);
}

function titleCase(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function $_GET(param) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] === param) {
            return pair[1] === undefined ? true : decodeURIComponent(pair[1]);
        }
    }
}

function get_url_parameter(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}