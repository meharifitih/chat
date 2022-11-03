(() => {
  var e = {
      27: (e, t, a) => {
        var s, n;
        (s = function () {
          var e = {
            172351395: { name: "EBML", type: "Container" },
            646: { name: "EBMLVersion", type: "Uint" },
            759: { name: "EBMLReadVersion", type: "Uint" },
            754: { name: "EBMLMaxIDLength", type: "Uint" },
            755: { name: "EBMLMaxSizeLength", type: "Uint" },
            642: { name: "DocType", type: "String" },
            647: { name: "DocTypeVersion", type: "Uint" },
            645: { name: "DocTypeReadVersion", type: "Uint" },
            108: { name: "Void", type: "Binary" },
            63: { name: "CRC-32", type: "Binary" },
            190023271: { name: "SignatureSlot", type: "Container" },
            16010: { name: "SignatureAlgo", type: "Uint" },
            16026: { name: "SignatureHash", type: "Uint" },
            16037: { name: "SignaturePublicKey", type: "Binary" },
            16053: { name: "Signature", type: "Binary" },
            15963: { name: "SignatureElements", type: "Container" },
            15995: { name: "SignatureElementList", type: "Container" },
            9522: { name: "SignedElement", type: "Binary" },
            139690087: { name: "Segment", type: "Container" },
            21863284: { name: "SeekHead", type: "Container" },
            3515: { name: "Seek", type: "Container" },
            5035: { name: "SeekID", type: "Binary" },
            5036: { name: "SeekPosition", type: "Uint" },
            88713574: { name: "Info", type: "Container" },
            13220: { name: "SegmentUID", type: "Binary" },
            13188: { name: "SegmentFilename", type: "String" },
            1882403: { name: "PrevUID", type: "Binary" },
            1868715: { name: "PrevFilename", type: "String" },
            2013475: { name: "NextUID", type: "Binary" },
            1999803: { name: "NextFilename", type: "String" },
            1092: { name: "SegmentFamily", type: "Binary" },
            10532: { name: "ChapterTranslate", type: "Container" },
            10748: { name: "ChapterTranslateEditionUID", type: "Uint" },
            10687: { name: "ChapterTranslateCodec", type: "Uint" },
            10661: { name: "ChapterTranslateID", type: "Binary" },
            710577: { name: "TimecodeScale", type: "Uint" },
            1161: { name: "Duration", type: "Float" },
            1121: { name: "DateUTC", type: "Date" },
            15273: { name: "Title", type: "String" },
            3456: { name: "MuxingApp", type: "String" },
            5953: { name: "WritingApp", type: "String" },
            103: { name: "Timecode", type: "Uint" },
            6228: { name: "SilentTracks", type: "Container" },
            6359: { name: "SilentTrackNumber", type: "Uint" },
            39: { name: "Position", type: "Uint" },
            43: { name: "PrevSize", type: "Uint" },
            35: { name: "SimpleBlock", type: "Binary" },
            32: { name: "BlockGroup", type: "Container" },
            33: { name: "Block", type: "Binary" },
            34: { name: "BlockVirtual", type: "Binary" },
            13729: { name: "BlockAdditions", type: "Container" },
            38: { name: "BlockMore", type: "Container" },
            110: { name: "BlockAddID", type: "Uint" },
            37: { name: "BlockAdditional", type: "Binary" },
            27: { name: "BlockDuration", type: "Uint" },
            122: { name: "ReferencePriority", type: "Uint" },
            123: { name: "ReferenceBlock", type: "Int" },
            125: { name: "ReferenceVirtual", type: "Int" },
            36: { name: "CodecState", type: "Binary" },
            13730: { name: "DiscardPadding", type: "Int" },
            14: { name: "Slices", type: "Container" },
            104: { name: "TimeSlice", type: "Container" },
            76: { name: "LaceNumber", type: "Uint" },
            77: { name: "FrameNumber", type: "Uint" },
            75: { name: "BlockAdditionID", type: "Uint" },
            78: { name: "Delay", type: "Uint" },
            79: { name: "SliceDuration", type: "Uint" },
            72: { name: "ReferenceFrame", type: "Container" },
            73: { name: "ReferenceOffset", type: "Uint" },
            74: { name: "ReferenceTimeCode", type: "Uint" },
            47: { name: "EncryptedBlock", type: "Binary" },
            106212971: { name: "Tracks", type: "Container" },
            46: { name: "TrackEntry", type: "Container" },
            87: { name: "TrackNumber", type: "Uint" },
            13253: { name: "TrackUID", type: "Uint" },
            3: { name: "TrackType", type: "Uint" },
            57: { name: "FlagEnabled", type: "Uint" },
            8: { name: "FlagDefault", type: "Uint" },
            5546: { name: "FlagForced", type: "Uint" },
            28: { name: "FlagLacing", type: "Uint" },
            11751: { name: "MinCache", type: "Uint" },
            11768: { name: "MaxCache", type: "Uint" },
            254851: { name: "DefaultDuration", type: "Uint" },
            216698: { name: "DefaultDecodedFieldDuration", type: "Uint" },
            209231: { name: "TrackTimecodeScale", type: "Float" },
            4991: { name: "TrackOffset", type: "Int" },
            5614: { name: "MaxBlockAdditionID", type: "Uint" },
            4974: { name: "Name", type: "String" },
            177564: { name: "Language", type: "String" },
            6: { name: "CodecID", type: "String" },
            9122: { name: "CodecPrivate", type: "Binary" },
            362120: { name: "CodecName", type: "String" },
            13382: { name: "AttachmentLink", type: "Uint" },
            1742487: { name: "CodecSettings", type: "String" },
            1785920: { name: "CodecInfoURL", type: "String" },
            438848: { name: "CodecDownloadURL", type: "String" },
            42: { name: "CodecDecodeAll", type: "Uint" },
            12203: { name: "TrackOverlay", type: "Uint" },
            5802: { name: "CodecDelay", type: "Uint" },
            5819: { name: "SeekPreRoll", type: "Uint" },
            9764: { name: "TrackTranslate", type: "Container" },
            9980: { name: "TrackTranslateEditionUID", type: "Uint" },
            9919: { name: "TrackTranslateCodec", type: "Uint" },
            9893: { name: "TrackTranslateTrackID", type: "Binary" },
            96: { name: "Video", type: "Container" },
            26: { name: "FlagInterlaced", type: "Uint" },
            5048: { name: "StereoMode", type: "Uint" },
            5056: { name: "AlphaMode", type: "Uint" },
            5049: { name: "OldStereoMode", type: "Uint" },
            48: { name: "PixelWidth", type: "Uint" },
            58: { name: "PixelHeight", type: "Uint" },
            5290: { name: "PixelCropBottom", type: "Uint" },
            5307: { name: "PixelCropTop", type: "Uint" },
            5324: { name: "PixelCropLeft", type: "Uint" },
            5341: { name: "PixelCropRight", type: "Uint" },
            5296: { name: "DisplayWidth", type: "Uint" },
            5306: { name: "DisplayHeight", type: "Uint" },
            5298: { name: "DisplayUnit", type: "Uint" },
            5299: { name: "AspectRatioType", type: "Uint" },
            963876: { name: "ColourSpace", type: "Binary" },
            1029411: { name: "GammaValue", type: "Float" },
            230371: { name: "FrameRate", type: "Float" },
            97: { name: "Audio", type: "Container" },
            53: { name: "SamplingFrequency", type: "Float" },
            14517: { name: "OutputSamplingFrequency", type: "Float" },
            31: { name: "Channels", type: "Uint" },
            15739: { name: "ChannelPositions", type: "Binary" },
            8804: { name: "BitDepth", type: "Uint" },
            98: { name: "TrackOperation", type: "Container" },
            99: { name: "TrackCombinePlanes", type: "Container" },
            100: { name: "TrackPlane", type: "Container" },
            101: { name: "TrackPlaneUID", type: "Uint" },
            102: { name: "TrackPlaneType", type: "Uint" },
            105: { name: "TrackJoinBlocks", type: "Container" },
            109: { name: "TrackJoinUID", type: "Uint" },
            64: { name: "TrickTrackUID", type: "Uint" },
            65: { name: "TrickTrackSegmentUID", type: "Binary" },
            70: { name: "TrickTrackFlag", type: "Uint" },
            71: { name: "TrickMasterTrackUID", type: "Uint" },
            68: { name: "TrickMasterTrackSegmentUID", type: "Binary" },
            11648: { name: "ContentEncodings", type: "Container" },
            8768: { name: "ContentEncoding", type: "Container" },
            4145: { name: "ContentEncodingOrder", type: "Uint" },
            4146: { name: "ContentEncodingScope", type: "Uint" },
            4147: { name: "ContentEncodingType", type: "Uint" },
            4148: { name: "ContentCompression", type: "Container" },
            596: { name: "ContentCompAlgo", type: "Uint" },
            597: { name: "ContentCompSettings", type: "Binary" },
            4149: { name: "ContentEncryption", type: "Container" },
            2017: { name: "ContentEncAlgo", type: "Uint" },
            2018: { name: "ContentEncKeyID", type: "Binary" },
            2019: { name: "ContentSignature", type: "Binary" },
            2020: { name: "ContentSigKeyID", type: "Binary" },
            2021: { name: "ContentSigAlgo", type: "Uint" },
            2022: { name: "ContentSigHashAlgo", type: "Uint" },
            206814059: { name: "Cues", type: "Container" },
            59: { name: "CuePoint", type: "Container" },
            51: { name: "CueTime", type: "Uint" },
            55: { name: "CueTrackPositions", type: "Container" },
            119: { name: "CueTrack", type: "Uint" },
            113: { name: "CueClusterPosition", type: "Uint" },
            112: { name: "CueRelativePosition", type: "Uint" },
            50: { name: "CueDuration", type: "Uint" },
            4984: { name: "CueBlockNumber", type: "Uint" },
            106: { name: "CueCodecState", type: "Uint" },
            91: { name: "CueReference", type: "Container" },
            22: { name: "CueRefTime", type: "Uint" },
            23: { name: "CueRefCluster", type: "Uint" },
            4959: { name: "CueRefNumber", type: "Uint" },
            107: { name: "CueRefCodecState", type: "Uint" },
            155296873: { name: "Attachments", type: "Container" },
            8615: { name: "AttachedFile", type: "Container" },
            1662: { name: "FileDescription", type: "String" },
            1646: { name: "FileName", type: "String" },
            1632: { name: "FileMimeType", type: "String" },
            1628: { name: "FileData", type: "Binary" },
            1710: { name: "FileUID", type: "Uint" },
            1653: { name: "FileReferral", type: "Binary" },
            1633: { name: "FileUsedStartTime", type: "Uint" },
            1634: { name: "FileUsedEndTime", type: "Uint" },
            4433776: { name: "Chapters", type: "Container" },
            1465: { name: "EditionEntry", type: "Container" },
            1468: { name: "EditionUID", type: "Uint" },
            1469: { name: "EditionFlagHidden", type: "Uint" },
            1499: { name: "EditionFlagDefault", type: "Uint" },
            1501: { name: "EditionFlagOrdered", type: "Uint" },
            54: { name: "ChapterAtom", type: "Container" },
            13252: { name: "ChapterUID", type: "Uint" },
            5716: { name: "ChapterStringUID", type: "String" },
            17: { name: "ChapterTimeStart", type: "Uint" },
            18: { name: "ChapterTimeEnd", type: "Uint" },
            24: { name: "ChapterFlagHidden", type: "Uint" },
            1432: { name: "ChapterFlagEnabled", type: "Uint" },
            11879: { name: "ChapterSegmentUID", type: "Binary" },
            11964: { name: "ChapterSegmentEditionUID", type: "Uint" },
            9155: { name: "ChapterPhysicalEquiv", type: "Uint" },
            15: { name: "ChapterTrack", type: "Container" },
            9: { name: "ChapterTrackNumber", type: "Uint" },
            0: { name: "ChapterDisplay", type: "Container" },
            5: { name: "ChapString", type: "String" },
            892: { name: "ChapLanguage", type: "String" },
            894: { name: "ChapCountry", type: "String" },
            10564: { name: "ChapProcess", type: "Container" },
            10581: { name: "ChapProcessCodecID", type: "Uint" },
            1293: { name: "ChapProcessPrivate", type: "Binary" },
            10513: { name: "ChapProcessCommand", type: "Container" },
            10530: { name: "ChapProcessTime", type: "Uint" },
            10547: { name: "ChapProcessData", type: "Binary" },
            39109479: { name: "Tags", type: "Container" },
            13171: { name: "Tag", type: "Container" },
            9152: { name: "Targets", type: "Container" },
            10442: { name: "TargetTypeValue", type: "Uint" },
            9162: { name: "TargetType", type: "String" },
            9157: { name: "TagTrackUID", type: "Uint" },
            9161: { name: "TagEditionUID", type: "Uint" },
            9156: { name: "TagChapterUID", type: "Uint" },
            9158: { name: "TagAttachmentUID", type: "Uint" },
            10184: { name: "SimpleTag", type: "Container" },
            1443: { name: "TagName", type: "String" },
            1146: { name: "TagLanguage", type: "String" },
            1156: { name: "TagDefault", type: "Uint" },
            1159: { name: "TagString", type: "String" },
            1157: { name: "TagBinary", type: "Binary" },
          };
          function t(e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e);
          }
          function a(e, t) {
            (this.name = e || "Unknown"), (this.type = t || "Unknown");
          }
          function s(e, t) {
            a.call(this, e, t || "Uint");
          }
          function n(e) {
            return e.length % 2 == 1 ? "0" + e : e;
          }
          function i(e, t) {
            a.call(this, e, t || "Float");
          }
          function o(e, t) {
            a.call(this, e, t || "Container");
          }
          function r(e) {
            o.call(this, "File", "File"), this.setSource(e);
          }
          function l(e, t, a, s) {
            if (("object" == typeof a && ((s = a), (a = void 0)), !a))
              return new Promise(function (a) {
                l(e, t, a, s);
              });
            try {
              var n = new FileReader();
              (n.onloadend = function () {
                try {
                  var i = new r(new Uint8Array(n.result));
                  i.fixDuration(t, s) && (e = i.toBlob(e.type));
                } catch (e) {}
                a(e);
              }),
                n.readAsArrayBuffer(e);
            } catch (t) {
              a(e);
            }
          }
          return (
            (a.prototype.updateBySource = function () {}),
            (a.prototype.setSource = function (e) {
              (this.source = e), this.updateBySource();
            }),
            (a.prototype.updateByData = function () {}),
            (a.prototype.setData = function (e) {
              (this.data = e), this.updateByData();
            }),
            t(s, a),
            (s.prototype.updateBySource = function () {
              this.data = "";
              for (var e = 0; e < this.source.length; e++) {
                var t = this.source[e].toString(16);
                this.data += n(t);
              }
            }),
            (s.prototype.updateByData = function () {
              var e = this.data.length / 2;
              this.source = new Uint8Array(e);
              for (var t = 0; t < e; t++) {
                var a = this.data.substr(2 * t, 2);
                this.source[t] = parseInt(a, 16);
              }
            }),
            (s.prototype.getValue = function () {
              return parseInt(this.data, 16);
            }),
            (s.prototype.setValue = function (e) {
              this.setData(n(e.toString(16)));
            }),
            t(i, a),
            (i.prototype.getFloatArrayType = function () {
              return this.source && 4 === this.source.length
                ? Float32Array
                : Float64Array;
            }),
            (i.prototype.updateBySource = function () {
              var e = this.source.reverse(),
                t = new (this.getFloatArrayType())(e.buffer);
              this.data = t[0];
            }),
            (i.prototype.updateByData = function () {
              var e = new (this.getFloatArrayType())([this.data]),
                t = new Uint8Array(e.buffer);
              this.source = t.reverse();
            }),
            (i.prototype.getValue = function () {
              return this.data;
            }),
            (i.prototype.setValue = function (e) {
              this.setData(e);
            }),
            t(o, a),
            (o.prototype.readByte = function () {
              return this.source[this.offset++];
            }),
            (o.prototype.readUint = function () {
              for (
                var e = this.readByte(),
                  t = 8 - e.toString(2).length,
                  a = e - (1 << (7 - t)),
                  s = 0;
                s < t;
                s++
              )
                (a *= 256), (a += this.readByte());
              return a;
            }),
            (o.prototype.updateBySource = function () {
              for (
                this.data = [], this.offset = 0;
                this.offset < this.source.length;
                this.offset = r
              ) {
                var t = this.readUint(),
                  n = this.readUint(),
                  r = Math.min(this.offset + n, this.source.length),
                  l = this.source.slice(this.offset, r),
                  c = e[t] || { name: "Unknown", type: "Unknown" },
                  d = a;
                switch (c.type) {
                  case "Container":
                    d = o;
                    break;
                  case "Uint":
                    d = s;
                    break;
                  case "Float":
                    d = i;
                }
                var h = new d(c.name, c.type);
                h.setSource(l),
                  this.data.push({ id: t, idHex: t.toString(16), data: h });
              }
            }),
            (o.prototype.writeUint = function (e, t) {
              for (var a = 1, s = 128; e >= s && a < 8; a++, s *= 128);
              if (!t)
                for (var n = s + e, i = a - 1; i >= 0; i--) {
                  var o = n % 256;
                  (this.source[this.offset + i] = o), (n = (n - o) / 256);
                }
              this.offset += a;
            }),
            (o.prototype.writeSections = function (e) {
              this.offset = 0;
              for (var t = 0; t < this.data.length; t++) {
                var a = this.data[t],
                  s = a.data.source,
                  n = s.length;
                this.writeUint(a.id, e),
                  this.writeUint(n, e),
                  e || this.source.set(s, this.offset),
                  (this.offset += n);
              }
              return this.offset;
            }),
            (o.prototype.updateByData = function () {
              var e = this.writeSections("draft");
              (this.source = new Uint8Array(e)), this.writeSections();
            }),
            (o.prototype.getSectionById = function (e) {
              for (var t = 0; t < this.data.length; t++) {
                var a = this.data[t];
                if (a.id === e) return a.data;
              }
              return null;
            }),
            t(r, o),
            (r.prototype.fixDuration = function (e, t) {
              var a = t && t.logger;
              void 0 === a
                ? (a = function (e) {
                    console.log(e);
                  })
                : a || (a = function () {});
              var s = this.getSectionById(139690087);
              if (!s)
                return a("[fix-webm-duration] Segment section is missing"), !1;
              var n = s.getSectionById(88713574);
              if (!n)
                return a("[fix-webm-duration] Info section is missing"), !1;
              var o = n.getSectionById(710577);
              if (!o)
                return (
                  a("[fix-webm-duration] TimecodeScale section is missing"), !1
                );
              var r = n.getSectionById(1161);
              if (r) {
                if (!(r.getValue() <= 0))
                  return (
                    a("[fix-webm-duration] Duration section is present"), !1
                  );
                a(
                  "[fix-webm-duration] Duration section is present, but the value is empty"
                ),
                  r.setValue(e);
              } else
                a("[fix-webm-duration] Duration section is missing"),
                  (r = new i("Duration", "Float")).setValue(e),
                  n.data.push({ id: 1161, data: r });
              return (
                o.setValue(1e6),
                n.updateByData(),
                s.updateByData(),
                this.updateByData(),
                !0
              );
            }),
            (r.prototype.toBlob = function (e) {
              return new Blob([this.source.buffer], {
                type: e || "video/webm",
              });
            }),
            (l.default = l),
            l
          );
        }),
          void 0 === (n = "function" == typeof s ? s.call(t, a, t, e) : s) ||
            (e.exports = n);
      },
    },
    t = {};
  function a(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var i = (t[s] = { exports: {} });
    return e[s](i, i.exports, a), i.exports;
  }
  (a.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, { a: t }), t;
  }),
    (a.d = (e, t) => {
      for (var s in t)
        a.o(t, s) &&
          !a.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = React;
      var t = a.n(e);
      const s = ReactDOM;
      var n = a.n(s);
      const i = ReactIntl,
        o = JSON.parse(
          '{"de":{"action_block_contact":"Kontakt blockieren","action_cancel":"Abbrechen","action_clear_messages":"Nachrichten leeren","action_delete_messages":"Nachrichten für alle löschen","action_leave_chat":"Unterhaltung verlassen","action_report_chat":"Unterhaltung melden","archived_contacts":"Archivierte Kontakte ({count})","badge_danger":"Verdächtig","badge_owner":"Besitzer","badge_staff":"Verwaltung","badge_verified":"Verifiziert","badge_you":"Sie","block_contact_warning":"Möchten Sie diesen Kontakt wirklich blockieren?","blocked_contacts_link":"Blockierte Kontakte ({count})","button_add_another":"Hinzufügen","button_add_members":"Mitglieder hinzufügen","button_cancel":"Abbrechen","button_confirm":"Bestätigen","button_create":"Erstellen","button_delete_account":"Konto löschen","button_edit":"Bearbeiten","button_logout":"Abmelden","button_ok":"OK","button_reset":"Zurücksetzen","button_send_request":"Anfrage senden","button_sign_in":"Anmelden","button_sign_up":"Anmelden","button_subscribe":"Abbonieren","button_update":"Aktualisieren","cannot_initiate_file_upload":"Datei kann nicht hochgeladen werden.","channel":"Sender","channel_prompt":"Dies ist ein Sender","chat_invitation":"Sie sind eingeladen, an einem neuen Chat teilzunehmen. Was möchten Sie tun?","chat_invitation_accept":"Akzeptieren","chat_invitation_block":"Blockieren","chat_invitation_ignore":"Ignorieren","clear_messages_warning":"Sind Sie sicher, dass Sie diese Unterhaltung für alle leeren wollen? Das kann nicht rückgängig gemacht werden.","code_doesnot_match":"Code stimmt nicht überein","contacts_not_found":"Sie haben keine Unterhaltungen<br />¯∖_(ツ)_/¯","contacts_not_found_short":"Keine Kontakte für \'\'{query}\'\'","credential_email_prompt":"E-Mail Adresse für Registrierung","delete_account":"Konto löschen","delete_account_warning":"Möchten Sie das Konto wirklich löschen? Das kann nicht rückgängig gemacht werden","delete_messages_warning":"Sind Sie sicher, dass Sie diese Unterhaltung für alle löschen wollen? Das kann nicht rückgängig gemacht werden.","deleted_content":"Inhalt gelöscht","download_action":"herunterladen","drafty_attachment":"Dateianhang","drafty_form":"Formular:","drafty_image":"Bild","email_dative":"E-Mail","email_prompt":"E-Mail, z.B. lisam@beispiel.de","enable_peers_messaging":"Aktivieren","enter_confirmation_code_prompt":"Geben Sie den Bestätigungscode ein, der per {method} geschickt wurde:","error_invalid_id":"ungültige ID","file_attachment_too_large":"Die Dateigröße {size} überschreitet das Limit von {limit}.","forgot_password_link":"Passwort vergessen?","full_name_prompt":"Vollständiger Name, z.B. Lisa Musterfrau","granted_permissions":"Erteilt","group_has_no_members":"Keine Mitglieder","group_user_id_prompt":"Gruppe oder Benutzer ID","image_caption_prompt":"Bildunterschrift","invalid_content":"ungültiger Inhalt","invalid_security_token":"Ungültiger Sicherheitsschlüssel","label_client":"Client:","label_content_type":"Inhaltsart:","label_default_access_mode":"Standard Zugriffsmodus:","label_file_name":"Dateiname:","label_group_members":"Gruppenmitglieder:","label_incognito_mode":"inkognito-Modus:","label_message_sound":"Benachrichtigungston:","label_muting_topic":"Stumm geschaltet:","label_other_user":"Andere","label_password":"Passwort","label_permissions":"Berechtigungen:","label_private":"Privater Kommentar","label_push_notifications":"Benachrichtigungsmeldungen:","label_push_notifications_disabled":"Benachrichtigungsmeldungen (erfordert HTTPS):","label_reset_password":"Passwort per E-Mail wiederherstellen:","label_sdk":"SDK:","label_server":"Server:","label_server_address":"Server Adresse:","label_server_to_use":"Server verwenden:","label_size":"Größe:","label_topic_name":"Name","label_user_contacts":"Kontakte:","label_user_id":"ID:","label_wire_transport":"Übertragung per Kabel:","label_you":"Sie:","label_your_name":"Ihr Name","label_your_permissions":"Ihre Berechtigungen:","last_seen_timestamp":"Zuletzt gesehen","leave_chat_warning":"Möchten Sie diese Unterhaltung wirklich verlassen?","link_contact_us":"Kontakt","link_privacy_policy":"Datenschutzerklärung","link_terms_of_service":"Nutzungsbedingungen","login_prompt":"Anmelden","menu_item_archive_topic":"Archivieren","menu_item_block":"Blockieren","menu_item_clear_messages":"Nachrichten leeren","menu_item_clear_messages_for_all":"Für alle leeren","menu_item_delete":"Löschen","menu_item_delete_for_all":"Für alle löschen","menu_item_delete_topic":"Entfernen","menu_item_edit_permissions":"Berechtigungen ändern","menu_item_info":"Info","menu_item_member_delete":"Entfernen","menu_item_mute":"Unterhaltung stumm schalten","menu_item_restore_topic":"Wiederherstellen","menu_item_send_retry":"Wiederholen","menu_item_unblock":"Blockierung aufheben","menu_item_unmute":"Stumm schalten beenden","message_sending":"wird gesendet...","message_sending_failed":"fehlgeschlagen","messages_not_readable":"Neue Nachrichten können nicht gelesen werden","messaging_disabled_prompt":"Nachrichtenübermittlung deaktiviert","more_online_members":"+{overflow} mehr","new_message_prompt":"Neue Nachricht","new_password_placeholder":"Geben Sie ein neues Passwort ein","no_connection":"Keine Verbindung","no_contacts":"Sie haben keine Kontakte :-(","numeric_confirmation_code_prompt":"Nur zahlen","online_now":"jetzt online","password_prompt":"Passwort","password_unchanged_prompt":"unverändert","peers_messaging_disabled":"Gruppennachrichten sind deaktiviert","permission_admin":"Bestätigen ({val})","permission_delete":"Entfernen ({val})","permission_join":"Beitreten ({val})","permission_owner":"Besitzer ({val})","permission_pres":"Benachrichtigt werden ({val})","permission_read":"Lesen ({val})","permission_share":"Teilen ({val})","permission_write":"Schreiben ({val})","phone_dative":"Telefon","private_editing_placeholder":"Nur für Sie sichtbar","push_init_failed":"Initialisierung von Push-Benachrichtigungen fehlgeschlagen","reconnect_countdown":"Getrennt. Wiederverbinden in {seconds}…","reconnect_now":"Jetzt probieren","reload_update":"Neu laden","report_chat_warning":"Möchten Sie diese Unterhaltung wirklich blockieren und melden?","requested_permissions":"Angefordert","save_attachment":"Speichern","search_for_contacts":"Nutzen Sie die Suche um Kontakte zu finden","search_no_results":"Die Suche hatte keine Ergebnisse","search_placeholder":"Liste: email:lisa@beispiel.de, tel:17025550003...","sidepanel_title_acc_notifications":"Benachrichtigungen","sidepanel_title_acc_support":"Unterstützung","sidepanel_title_account_settings":"Konto-Einstellungen","sidepanel_title_archive":"Archivierte Unterhaltungen","sidepanel_title_blocked":"Blockierte Unterhaltungen","sidepanel_title_cred":"Anmeldeinformationen bestätigen","sidepanel_title_login":"Anmelden","sidepanel_title_newtpk":"Neue Unterhaltung starten","sidepanel_title_register":"Konto erstellen","sidepanel_title_reset":"Passwort zurücksetzen","sidepanel_title_settings":"Einstellungen","stay_logged_in":"Angemeldet bleiben","tabtitle_find_user":"Suchen","tabtitle_group_by_id":"nach ID","tabtitle_new_group":"Neue Gruppe","tags_editor_no_tags":"Schlagworte hinzufügen","tags_not_found":"Keine Schlagworte definiert. Erstellen Sie welche.","title_all_contacts":"Alle Kontakte","title_group_members":"Gruppenmitglieder","panel_title_info":"Info","title_manage_tags":"Verwalten","title_not_found":"Nicht gefunden","title_permissions":"Berechtigungen","title_tag_manager":"Schlagworte (Nutzer entdecken)","topic_block_warning":"Möchten Sie diese Unterhaltung wirklich blockieren?","topic_delete_warning":"Möchten Sie diese Unterhaltung wirklich löschen?","topic_name_editing_placeholder":"Freiform Name der Gruppe","unnamed_topic":"Unbenannt","update_available":"Aktualisierung verfügbar.","upload_finishing":"wird abgeschlossen...","user_not_found":"Nicht gefunden","validate_credential_action":"bestätigen","description_editing_placeholder":"Beschreibung (optional)","label_description":"Beschreibung","button_security":"Sicherheit","panel_title_general":"Allgemein","panel_title_security":"Sicherheit","panel_title_crop":"Zum Anpassen ziehen","panel_title_members":"Mitglieder","permissions_anonymous":"Anonym","permissions_authenticated":"Authentifiziert","topic_delete":"Chat löschen","permissions_user":"Benutzerberechtigungen","password_reset_email_sent":"Eine E-Mail wurde an {email} gesendet. Folgen Sie den Anweisungen in der E-Mail, um Ihr Passwort zurückzusetzen.","label_unarchive_topic":"Archiviert:","menu_item_reply":"Antwort","menu_item_forward":"Nach vorne","forward_to":"Weiterleiten","forward_to_search_placeholder":"Kontakte durchsuchen","label_new_password":"Neues Kennwort","drafty_unknown":"Nicht unterstützt","calls_incoming":"Eingehender Anruf","calls_outgoing":"Ausgehender Anruf","calls_you_label":"Du","menu_item_video_call":"Videoanruf","already_in_call":"Du redest schon!","call_cancelled":"abgebrochen","call_missed":"verpasster","call_declined":"abgelehnt","call_disconnected":"getrennt","label_use_secure_connection":"Verwenden Sie eine sichere Verbindung","phone_or_email_prompt":"Telefonnummer oder E-Mail","cred_confirmed_successfully":"Erfolgreich bestätigt"},"en":{"action_block_contact":"Block Contact","action_cancel":"cancel","action_clear_messages":"Clear Messages","action_delete_messages":"Clear Messages for All","action_leave_chat":"Leave Conversation","action_report_chat":"Report Conversation","archived_contacts":"Archived contacts ({count})","badge_danger":"Untrustworthy","badge_owner":"owner","badge_staff":"Staff-managed","badge_verified":"Verified/official","badge_you":"you","block_contact_warning":"Are you sure you want to block this contact?","blocked_contacts_link":"Blocked contacts ({count})","button_add_another":"Add another","button_add_members":"Add members","button_cancel":"Cancel","button_confirm":"Confirm","button_create":"Create","button_delete_account":"Delete account","button_edit":"Edit","button_logout":"Logout","button_ok":"OK","button_reset":"Reset","button_send_request":"Send request","button_sign_in":"Sign in","button_sign_up":"Sign up","button_subscribe":"Subscribe","button_update":"Update","cannot_initiate_file_upload":"Cannot initiate file upload.","channel":"channel","channel_prompt":"This is a channel","chat_invitation":"You are invited to start a new chat. What would you like to do?","chat_invitation_accept":"Accept","chat_invitation_block":"Block","chat_invitation_ignore":"Ignore","clear_messages_warning":"Are you sure you want to clear all messages? It cannot be undone.","code_doesnot_match":"Code does not match","contacts_not_found":"You have no chats<br />¯∖_(ツ)_/¯","contacts_not_found_short":"No contacts match \'\'{query}\'\'","credential_email_prompt":"Your registration email","delete_account":"Delete account","delete_account_warning":"Are you sure you want to delete your account? It cannot be undone.","delete_messages_warning":"Are you sure you want to delete all messages for everyone? It cannot be undone.","deleted_content":"content deleted","download_action":"download","drafty_attachment":"Attachment","drafty_form":"Form:","drafty_image":"Picture","email_dative":"email","email_prompt":"Email, e.g. jdoe@example.com","enable_peers_messaging":"Enable","enter_confirmation_code_prompt":"Enter confirmation code sent to you by {method}:","error_invalid_id":"Invalid ID","file_attachment_too_large":"The file size {size} exceeds the {limit} limit.","forgot_password_link":"Forgot password?","full_name_prompt":"Full name, e.g. John Doe","granted_permissions":"Granted","group_has_no_members":"No members","group_user_id_prompt":"Group or User ID","image_caption_prompt":"Image caption","invalid_content":"invalid content","invalid_security_token":"Invalid security token","label_client":"Client:","label_content_type":"Content type:","label_default_access_mode":"Default access mode:","label_file_name":"File name:","label_group_members":"Group members:","label_incognito_mode":"Incognito mode:","label_message_sound":"Message sound:","label_muting_topic":"Muted:","label_other_user":"Other","label_password":"Password","label_permissions":"Permissions:","label_private":"Private comment","label_push_notifications":"Notification alerts:","label_push_notifications_disabled":"Notification alerts (requires HTTPS):","label_reset_password":"Send a password reset email:","label_sdk":"SDK:","label_server":"Server:","label_server_address":"Server address:","label_server_to_use":"Server to use:","label_size":"Size:","label_topic_name":"Name","label_user_contacts":"Contacts:","label_user_id":"ID:","label_wire_transport":"Wire transport:","label_you":"You:","label_your_name":"Your name","label_your_permissions":"Your permissions:","last_seen_timestamp":"Last seen","leave_chat_warning":"Are you sure you want to leave this conversation?","link_contact_us":"Contact Us","link_privacy_policy":"Privacy Policy","link_terms_of_service":"Terms of Service","login_prompt":"Login","menu_item_archive_topic":"Archive","menu_item_block":"Block","menu_item_clear_messages":"Clear messages","menu_item_clear_messages_for_all":"Clear for All","menu_item_delete":"Delete","menu_item_delete_for_all":"Delete for All","menu_item_delete_topic":"Delete","menu_item_edit_permissions":"Edit permissions","menu_item_info":"Info","menu_item_member_delete":"Remove","menu_item_mute":"Mute","menu_item_reply":"Reply","menu_item_restore_topic":"Restore","menu_item_send_retry":"Retry","menu_item_unblock":"Unblock","menu_item_unmute":"Unmute","message_sending":"sending...","message_sending_failed":"failed","messages_not_readable":"no access to messages","messaging_disabled_prompt":"Messaging disabled","more_online_members":"+{overflow} more","new_message_prompt":"New message","new_password_placeholder":"Enter new password","no_connection":"No connection","no_contacts":"You have no contacts :-(","numeric_confirmation_code_prompt":"Numbers only","online_now":"online now","password_prompt":"Password","password_unchanged_prompt":"Unchanged","peers_messaging_disabled":"Peer\'s messaging is disabled.","permission_admin":"Approve ({val})","permission_delete":"Delete ({val})","permission_join":"Join ({val})","permission_owner":"Owner ({val})","permission_pres":"Get notified ({val})","permission_read":"Read ({val})","permission_share":"Share ({val})","permission_write":"Write ({val})","phone_dative":"phone","private_editing_placeholder":"Visible to you only","push_init_failed":"Failed to initialize push notifications","reconnect_countdown":"Disconnected. Reconnecting in {seconds}…","reconnect_now":"Try now","reload_update":"Reload","report_chat_warning":"Are you sure you want to block and report this conversation?","requested_permissions":"Requested","save_attachment":"save","search_for_contacts":"Use search to find contacts","search_no_results":"Search returned no results","search_placeholder":"List like email:alice@example.com, tel:17025550003...","sidepanel_title_acc_notifications":"Notifications","sidepanel_title_acc_support":"Support","sidepanel_title_account_settings":"Account Settings","sidepanel_title_archive":"Archived Chats","sidepanel_title_blocked":"Blocked Chats","sidepanel_title_cred":"Confirm Credentials","sidepanel_title_login":"Sign In","sidepanel_title_newtpk":"Start New Chat","sidepanel_title_register":"Create Account","sidepanel_title_reset":"Reset Password","sidepanel_title_settings":"Settings","stay_logged_in":"Stay logged in","tabtitle_find_user":"find","tabtitle_group_by_id":"by id","tabtitle_new_group":"new group","tags_editor_no_tags":"Add some tags","tags_not_found":"No tags defined. Add some.","title_all_contacts":"All Contacts","title_group_members":"Group Members","title_manage_tags":"Manage","title_not_found":"Not found","title_permissions":"Permissions","title_tag_manager":"Tags (search & discovery)","topic_block_warning":"Are you sure you want to block this conversation?","topic_delete_warning":"Are you sure you want to delete this conversation?","topic_name_editing_placeholder":"Freeform name of the group","unnamed_topic":"Unnamed","update_available":"Update available.","upload_finishing":"finishing...","user_not_found":"Not found","validate_credential_action":"confirm","description_editing_placeholder":"Optional description","label_description":"Description","button_security":"Security","panel_title_crop":"Drag to Adjust","panel_title_general":"General","panel_title_members":"Members","panel_title_security":"Security","panel_title_info":"Info","permissions_anonymous":"Anonymous","permissions_authenticated":"Authenticated","topic_delete":"Delete Conversation","permissions_user":"User\'s Permissions","password_reset_email_sent":"An email has been sent to {email}. Follow the directions in the email to reset your password.","label_unarchive_topic":"Archived:","menu_item_forward":"Forward","forward_to":"Forward to","forward_to_search_placeholder":"Search contacts","label_new_password":"New password","drafty_unknown":"Unsupported","calls_incoming":"Incoming call","calls_outgoing":"Outgoing call","calls_you_label":"You","menu_item_video_call":"Video call","already_in_call":"You already in an ongoing call!","call_cancelled":"cancelled","call_missed":"missed","call_declined":"declined","call_disconnected":"disconnected","label_use_secure_connection":"Use secure connection","phone_or_email_prompt":"Phone number or email","cred_confirmed_successfully":"Confirmed successfully"},"es":{"action_block_contact":"Bloquear contacto","action_cancel":"cancelar","action_clear_messages":"Borrar mensajes","action_delete_messages":"Borrar mensajes para todos","action_leave_chat":"Dejar conversación","action_report_chat":"Reportar conversación","archived_contacts":"Contactos archivados ({count})","badge_danger":"Suspicaz","badge_owner":"propietario","badge_staff":"Administración","badge_verified":"Verificado","badge_you":"tú","block_contact_warning":"¿Estás seguro de que quieres bloquear a este contacto?","blocked_contacts_link":"Contactos bloqueados ({count})","button_add_another":"Añadir contacto","button_add_members":"Añadir miembros","button_cancel":"Cancelar","button_confirm":"Confirmar","button_create":"Crear","button_delete_account":"Eliminar cuenta","button_edit":"Editar","button_logout":"Cerrar sesión","button_ok":"OK","button_reset":"Restablecer","button_send_request":"Enviar petición","button_sign_in":"Entrar","button_sign_up":"Regístrate","button_subscribe":"Suscribirse","button_update":"Actualizar","cannot_initiate_file_upload":"No se pudo iniciar la carga del archivo.","channel":"canal","channel_prompt":"Este es un canal","chat_invitation":"Estás invitado a participar en un nuevo chat. ¿Qué te gustaría hacer?","chat_invitation_accept":"Aceptar","chat_invitation_block":"Bloquear","chat_invitation_ignore":"Ignorar","clear_messages_warning":"¿Estás seguro de que quieres eliminar todos los mensajes? Esta acción es irreversible.","code_doesnot_match":"El código no coincide","contacts_not_found":"No tienes chats<br />¯∖_(ツ)_/¯","contacts_not_found_short":"Ningún contacto coincide con \'\'{query}\'\'","credential_email_prompt":"Tu correo electrónico de registro","delete_account":"Eliminar cuenta","delete_account_warning":"¿Estás seguro de que deseas eliminar permanentemente tu cuenta? Esta acción es irreversible.","delete_messages_warning":"¿Estás seguro de que quieres eliminar todos los mensajes para todos? Esta acción es irreversible.","deleted_content":"este mensaje fue eliminado","download_action":"descargar","drafty_attachment":"Archivo","drafty_form":"Formulario:","drafty_image":"Imagen","email_dative":"correo electrónico","email_prompt":"Correo electrónico, p.ej. juan@example.com","enable_peers_messaging":"Habilitar","enter_confirmation_code_prompt":"Introduzca el código de confirmación enviado a tu {method}:","error_invalid_id":"ID inválido","file_attachment_too_large":"El tamaño del archivo {size} excede el límite de {limit}.","forgot_password_link":"¿Olvidaste tu contraseña?","full_name_prompt":"Nombre completo, p.ej. Juan González Hernández","granted_permissions":"Otorgados","group_has_no_members":"No hay miembros","group_user_id_prompt":"ID del grupo o usuario","image_caption_prompt":"Añade un comentario","invalid_content":"contenido inválido","invalid_security_token":"Token de seguridad inválido","label_client":"Cliente:","label_content_type":"Tipo de contenido:","label_default_access_mode":"Modo de acceso predeterminado:","label_file_name":"Nombre del archivo:","label_group_members":"Miembros del grupo:","label_incognito_mode":"Modo incógnito:","label_message_sound":"Sonido de mensaje:","label_muting_topic":"Silenciado:","label_other_user":"Otros","label_password":"Contraseña","label_permissions":"Permisos:","label_private":"Comentario privado","label_push_notifications":"Alertas de notificaciones:","label_push_notifications_disabled":"Alertas de notificaciones (requiere HTTPS):","label_reset_password":"Enviar un correo electrónico de restablecimiento de contraseña:","label_sdk":"SDK:","label_server":"Servidor:","label_server_address":"Dirección del servidor:","label_server_to_use":"Servidor para usar:","label_size":"Tamaño:","label_topic_name":"Nombre del tema","label_user_contacts":"Contactos:","label_user_id":"ID:","label_wire_transport":"Transporte de alambre:","label_you":"Tú:","label_your_name":"Tu nombre","label_your_permissions":"Tus permisos:","last_seen_timestamp":"Últ. vez","leave_chat_warning":"¿Estás seguro de que quieres dejar esta conversación?","link_contact_us":"Contáctanos","link_privacy_policy":"Política de privacidad","link_terms_of_service":"Términos de uso","login_prompt":"Nombre de usuario","menu_item_archive_topic":"Archivar","menu_item_block":"Bloquear","menu_item_clear_messages":"Borrar mensajes","menu_item_clear_messages_for_all":"Borrar para todos","menu_item_delete":"Eliminar","menu_item_delete_for_all":"Eliminar para todos","menu_item_delete_topic":"Eliminar","menu_item_edit_permissions":"Editar permisos","menu_item_info":"Información","menu_item_member_delete":"Eliminar","menu_item_mute":"Silenciar","menu_item_restore_topic":"Restaurar","menu_item_send_retry":"Inténtalo de nuevo","menu_item_unblock":"Desbloquear","menu_item_unmute":"Anular el silencio","message_sending":"enviando...","message_sending_failed":"no se pudo enviar el mensaje","messages_not_readable":"sin acceso a mensajes","messaging_disabled_prompt":"El envío de mensajes está deshabilitado","more_online_members":"+{overflow} más","new_message_prompt":"Nuevo mensaje","new_password_placeholder":"Introduzca una nueva contraseña","no_connection":"Sin conexión","no_contacts":"No tienes contactos :-(","numeric_confirmation_code_prompt":"Sólo números","online_now":"en línea","password_prompt":"Contraseña","password_unchanged_prompt":"Sin cambios","peers_messaging_disabled":"La mensajería Peer está deshabilitada.","permission_admin":"Approbar ({val})","permission_delete":"Eliminar ({val})","permission_join":"Unirse ({val})","permission_owner":"Propietario ({val})","permission_pres":"Ser notificado ({val})","permission_read":"Leer ({val})","permission_share":"Compartir ({val})","permission_write":"Escribir ({val})","phone_dative":"teléfono","private_editing_placeholder":"Sólo visible para tí","push_init_failed":"Error al inicializar las notificaciones push","reconnect_countdown":"Desconectado. Reconectando en {seconds}…","reconnect_now":"Reintentar","reload_update":"Recargar","report_chat_warning":"¿Estás seguro de que quieres bloquear y reportar a esta conversación?","requested_permissions":"Solicitados","save_attachment":"guardar","search_for_contacts":"Usa la búsqueda para encontrar contactos","search_no_results":"La búsqueda no arrojó resultados","search_placeholder":"Ej. email:alice@example.com, tel:17025550003...","sidepanel_title_acc_notifications":"Notificaciones","sidepanel_title_acc_support":"Soporte","sidepanel_title_account_settings":"Ajustes de la cuenta","sidepanel_title_archive":"Chats archivados","sidepanel_title_blocked":"Chats bloqueados","sidepanel_title_cred":"Confirmar credenciales","sidepanel_title_login":"Iniciar sesión","sidepanel_title_newtpk":"Iniciar un nuevo chat","sidepanel_title_register":"Crear cuenta","sidepanel_title_reset":"Restablecer contraseña","sidepanel_title_settings":"Ajustes","stay_logged_in":"Permanecer conectado","tabtitle_find_user":"encontrar","tabtitle_group_by_id":"por ID","tabtitle_new_group":"nuevo grupo","tags_editor_no_tags":"Añadir etiquetas","tags_not_found":"No hay etiquetas definidas. Añade unas.","title_all_contacts":"Todos los contactos","title_group_members":"Miembros del grupo","title_manage_tags":"Gestionar","title_not_found":"No encontrado","title_permissions":"Permisos","title_tag_manager":"Etiquetas (descubrimiento de usuarios)","topic_block_warning":"¿Estás seguro de que quieres bloquear esta conversación","topic_delete_warning":"¿Estás seguro de que quieres eliminar esta conversación?","topic_name_editing_placeholder":"Nombre del grupo","unnamed_topic":"Sin nombre","update_available":"Actualización disponible.","upload_finishing":"terminando...","user_not_found":"Usuario no encontrado","validate_credential_action":"confirmar","description_editing_placeholder":"Descripción (opcional)","label_description":"Descripción","button_security":"Seguridad","panel_title_crop":"Arrastra para ajustar","panel_title_general":"General","panel_title_members":"Miembros","panel_title_security":"Seguridad","panel_title_info":"Información","permissions_anonymous":"Anónimo","permissions_authenticated":"Autenticado","topic_delete":"Eliminar chat","permissions_user":"Permisos del usuario","password_reset_email_sent":"Se ha enviado un correo electrónico a {email}. Siga las instrucciones del correo electrónico para restablecer su contraseña.","label_unarchive_topic":"Archivado:","menu_item_reply":"Respuesta","menu_item_forward":"Reenviar","forward_to":"Reenviar a","forward_to_search_placeholder":"Buscar contactos","label_new_password":"Nueva contraseña","drafty_unknown":"No soportado","calls_incoming":"Llamada entrante","calls_outgoing":"Llamada saliente","calls_you_label":"Tú","menu_item_video_call":"Videollamada","already_in_call":"¡Ya estás hablando!","call_cancelled":"cancelada","call_missed":"perdida","call_declined":"rechazada","call_disconnected":"desconectada","label_use_secure_connection":"Usar conexión segura","phone_or_email_prompt":"Número de teléfono o correo electrónico","cred_confirmed_successfully":"Confirmado con éxito"},"fr":{"action_block_contact":"Bloquer le Contact","action_cancel":"annuler","action_clear_messages":"Effacer les Messages","action_delete_messages":"Effacer les Messages pour Tous","action_leave_chat":"Quitter la Conversation","action_report_chat":"Signaler la Conversation","archived_contacts":"Contacts archivés ({count})","badge_danger":"Non fiable","badge_owner":"propriétaire","badge_staff":"Géré par le Staff","badge_verified":"Vérifié / Officiel","badge_you":"vous","block_contact_warning":"Êtes-vous sûr de bloquer le contact ?","blocked_contacts_link":"Contacts bloqués ({count})","button_add_another":"Ajouter un autre","button_add_members":"Ajouter des membres","button_cancel":"Annuler","button_confirm":"Confirmer","button_create":"Créer","button_delete_account":"Supprimer le compte","button_edit":"Modifier","button_logout":"Déconnexion","button_ok":"OK","button_reset":"Remettre à Zéro","button_send_request":"Envoyer une demande","button_sign_in":"Connexion","button_sign_up":"Créer un compte","button_subscribe":"S\'abonner","button_update":"Mettre à jour","cannot_initiate_file_upload":"Impossible de démarrer l\'envoi.","channel":"canal","channel_prompt":"C\'est un canal","chat_invitation":"Vous êtes invité à démarrer une conversation. Que voulez vous faire ?","chat_invitation_accept":"Accepter","chat_invitation_block":"Bloquer","chat_invitation_ignore":"Ignorer","clear_messages_warning":"Êtes-vous sûr de vouloir effacer tous les messages ? Aucun retour possible.","code_doesnot_match":"Le code ne correspond pas","contacts_not_found":"Vous n\'avez aucune conversation<br />¯∖_(ツ)_/¯","contacts_not_found_short":"Aucun contact ne correspond à \'\'{query}\'\'","credential_email_prompt":"Votre email d\'enregistrement","delete_account":"Supprimer le compte","delete_account_warning":"Êtes-vous sûr de vouloir supprimer votre compte ? Aucun retour possible.","delete_messages_warning":"Êtes-vous sûr de vouloir supprimer tous les messages pour tous ? Aucun retour possible.","deleted_content":"contenu supprimé","download_action":"télécharger","drafty_attachment":"Pièce(s) jointe(s)","drafty_form":"Formulaire:","drafty_image":"Image","email_dative":"email","email_prompt":"Email, par exemple jdoe@exemple.com","enable_peers_messaging":"Activer","enter_confirmation_code_prompt":"Entrez le code de confirmation envoyé par {method}:","error_invalid_id":"Identifiant invalide","file_attachment_too_large":"Le fichier de taille {size} dépasse la limite de {limit}.","forgot_password_link":"Mot de passe oublié ?","full_name_prompt":"Nom complet, par exemple John Doe","granted_permissions":"Accordé","group_has_no_members":"Aucun membre","group_user_id_prompt":"Identifiant d\'utilisateur ou de groupe","image_caption_prompt":"Description de l\'image","invalid_content":"contenu invalide","invalid_security_token":"Token de sécurité invalide","label_client":"Client :","label_content_type":"Type de contenu :","label_default_access_mode":"Mode d\'accès par défaut :","label_file_name":"Nom du fichier :","label_group_members":"Membres du groupe :","label_incognito_mode":"Mode incognito :","label_message_sound":"Son du message :","label_muting_topic":"Mué :","label_other_user":"Autre","label_password":"Mot de passe","label_permissions":"Permissions :","label_private":"Commentaire privé","label_push_notifications":"Notifications :","label_push_notifications_disabled":"Notifications (requière HTTPS):","label_reset_password":"Envoyer un mail de remise à zéro de mot de passe :","label_sdk":"SDK :","label_server":"Serveur :","label_server_address":"Adresse du serveur :","label_server_to_use":"Serveur à utiliser :","label_size":"Taille :","label_topic_name":"Nom","label_user_contacts":"Contacts :","label_user_id":"ID :","label_wire_transport":"Transport par cable :","label_you":"Vous :","label_your_name":"Votre nom","label_your_permissions":"Vos permissions :","last_seen_timestamp":"Vu pour la dernière fois","leave_chat_warning":"Êtes-vous sûr de vouloir quitter cette conversation ?","link_contact_us":"Contactez Nous","link_privacy_policy":"Politique de confidentialité","link_terms_of_service":"Conditions d\'utilisation","login_prompt":"Connexion","menu_item_archive_topic":"Archiver","menu_item_block":"Bloquer","menu_item_clear_messages":"Effacer les messages","menu_item_clear_messages_for_all":"Effacer pour Tous","menu_item_delete":"Supprimer","menu_item_delete_for_all":"Supprimer pour Tous","menu_item_delete_topic":"Supprimer","menu_item_edit_permissions":"Modifier les permissions","menu_item_info":"Informations","menu_item_member_delete":"Supprimer","menu_item_mute":"Rendre muer","menu_item_reply":"Répondre","menu_item_restore_topic":"Restorer","menu_item_send_retry":"Réessayer","menu_item_unblock":"Débloquer","menu_item_unmute":"Recevoir à nouveau","message_sending":"envoi en cours...","message_sending_failed":"échoué","messages_not_readable":"aucun accès aux messages","messaging_disabled_prompt":"Discussion désactivée","more_online_members":"+{overflow} de plus","new_message_prompt":"Nouveau message","new_password_placeholder":"Entrez un nouveau mot de passe","no_connection":"Aucune connexion","no_contacts":"Vous n\'avez pas de contacts :-(","numeric_confirmation_code_prompt":"Nombres seulement","online_now":"en ligne","password_prompt":"Mot de passe","password_unchanged_prompt":"Non changé","peers_messaging_disabled":"La messagerie point à point est désactivée.","permission_admin":"Approver ({val})","permission_delete":"Supprimer ({val})","permission_join":"Rejoindre ({val})","permission_owner":"Propriétaire ({val})","permission_pres":"Recevoir une notification ({val})","permission_read":"Lire ({val})","permission_share":"Partager ({val})","permission_write":"Ecrire ({val})","phone_dative":"téléphone","private_editing_placeholder":"Visible par vous seulement","push_init_failed":"Impossible d\'initialiser les notifications push","reconnect_countdown":"Déconnecté. Reconnexion dans {seconds}…","reconnect_now":"Essayer maintenant","reload_update":"Recharger","report_chat_warning":"Êtes-vous sûr de vouloir bloquer et signaler cette conversation ?","requested_permissions":"Demandé","save_attachment":"sauvegarder","search_for_contacts":"Utilisez la recherche pour trouver des contacts","search_no_results":"La recherche n\'a donné aucun résultat","search_placeholder":"Liste comme email:alice@exemple.com, tel:17025550003...","sidepanel_title_acc_notifications":"Notifications","sidepanel_title_acc_support":"Support","sidepanel_title_account_settings":"Paramètres du compte","sidepanel_title_archive":"Conversations Archivées","sidepanel_title_blocked":"Conversations Bloquées","sidepanel_title_cred":"Confirmer les identifiants","sidepanel_title_login":"Se Connecter","sidepanel_title_newtpk":"Démarrer une nouvelle Conversation","sidepanel_title_register":"Créer un compte","sidepanel_title_reset":"Remettre à Zéro le Mot de Passe","sidepanel_title_settings":"Paramètres","stay_logged_in":"Rester connecté","tabtitle_find_user":"trouver","tabtitle_group_by_id":"par identifiant","tabtitle_new_group":"nouveau groupe","tags_editor_no_tags":"Ajouter des étiquettes","tags_not_found":"Aucune étiquette définie. Ajoutez en.","title_all_contacts":"Tous les Contacts","title_group_members":"Membres du Groupe","title_manage_tags":"Gérer","title_not_found":"Pas trouvé","title_permissions":"Permissions","title_tag_manager":"Etiquettes (recherche & découverte)","topic_block_warning":"Êtes-vous sûr de vouloir bloquer cette conversation ?","topic_delete_warning":"Êtes-vous sûr de vouloir supprimer cette conversation ?","topic_name_editing_placeholder":"Nom libre du groupe","unnamed_topic":"Non nommé","update_available":"Mise à jour disponible.","upload_finishing":"fin...","user_not_found":"Pas trouvé","validate_credential_action":"confirmer","description_editing_placeholder":"Description facultative","label_description":"Description","button_security":"Sécurité","panel_title_crop":"Déplacez pour ajuster","panel_title_general":"Général","panel_title_members":"Membres","panel_title_security":"Sécurité","panel_title_info":"Informations","permissions_anonymous":"Anonyme","permissions_authenticated":"Authentifié","topic_delete":"Supprimer la Conversation","permissions_user":"Permissions d\'Utilisateur","password_reset_email_sent":"Un email a été envoyé à {email}. Suivez les instructions du mail pour remettre à zéro votre mot de passe.","label_unarchive_topic":"Archivé:","menu_item_forward":"Transférer","forward_to":"Transférer à","forward_to_search_placeholder":"Rechercher des contacts","label_new_password":"Nouveau mot de passe","drafty_unknown":"Non supporté","already_in_call":"Vous êtes déjà dans un appel en cours!","call_cancelled":"annulé","call_declined":"refusé","call_missed":"manqué","calls_incoming":"Appel entrant","calls_outgoing":"Appel sortant","calls_you_label":"Tu","menu_item_video_call":"Appel vidéo","call_disconnected":"débranché","label_use_secure_connection":"Utiliser une connexion sécurisée","phone_or_email_prompt":"Numéro de téléphone ou email","cred_confirmed_successfully":"Confirmé avec succès"},"ko":{"action_block_contact":"연락차단","action_cancel":"취소","action_clear_messages":"메시지지우기","action_delete_messages":"모든메시지지우기","action_leave_chat":"대화나누기","action_report_chat":"대화기록","archived_contacts":"보관된연락처({수})","badge_danger":"의심 많은","badge_owner":"소유자","badge_staff":"직원 관리하에","badge_verified":"확인 됨","badge_you":"당신","block_contact_warning":"이연락처를차단하시겠습니까?","blocked_contacts_link":"차단된연락처({수})","button_add_another":"다른항목추가","button_add_members":"회원추가","button_cancel":"취소","button_confirm":"확인","button_create":"작성","button_delete_account":"계정삭제","button_edit":"편집","button_logout":"로그아웃","button_ok":"OK","button_reset":"재설정","button_send_request":"요청보내기","button_sign_in":"로그인","button_sign_up":"가입","button_subscribe":"구독","button_update":"업데이트","cannot_initiate_file_upload":"파일업로드를시작할수없습니다.","channel":"채널","channel_prompt":"이 채널입니다","chat_invitation":"새로운대화를시작하도록초대되었습니다.무엇을하시겠습니까?","chat_invitation_accept":"수락","chat_invitation_block":"차단","chat_invitation_ignore":"무시","clear_messages_warning":"모든메시지를지우시겠습니까?실행취소할수없습니다.","code_doesnot_match":"코드가일치하지않습니다","contacts_not_found":"채팅이없습니다<br/>¯∖_(ツ)_/¯","contacts_not_found_short":"\'{문의}\'와일치하는연락처가없습니다.","credential_email_prompt":"등록이메일","delete_account":"계정삭제","delete_account_warning":"계정을삭제하시겠습니까?실행취소할수없습니다.","delete_messages_warning":"모든사람의모든메시지를삭제하시겠습니까?실행취소할수없습니다.","deleted_content":"내용이 삭제되었습니다","download_action":"다운로드","drafty_attachment":"부착","drafty_form":"형태:","drafty_image":"이미지","email_dative":"이메일","email_prompt":"이메일(예:hong@example.com)","enable_peers_messaging":"활성화","enter_confirmation_code_prompt":"{방법}으로보낸확인코드를입력하십시오:","error_invalid_id":"잘못된ID","file_attachment_too_large":"파일크기{크기}이(가){제한}제한을초과합니다.","forgot_password_link":"비밀번호를잊으셨습니까?","full_name_prompt":"전체이름(예:홍길동)","granted_permissions":"승낙하다","group_has_no_members":"회원없음","group_user_id_prompt":"그룹또는사용자ID","image_caption_prompt":"이미지설명","invalid_content":"잘못된내용","invalid_security_token":"유효하지않은보안토큰","label_client":"클라이언트: ","label_content_type":"컨텐츠유형: ","label_default_access_mode":"기본액세스모드: ","label_file_name":"파일이름: ","label_group_members":"그룹회원: ","label_incognito_mode":"시크릿모드: ","label_message_sound":"메시지소리: ","label_muting_topic":"음소거: ","label_other_user":"기타","label_password":"비밀번호","label_permissions":"권한: ","label_private":"개인코멘트","label_push_notifications":"통지경보: ","label_push_notifications_disabled":"통지경보(HTTPS필요): ","label_reset_password":"비밀번호재설정이메일보내기: ","label_sdk":"SDK:","label_server":"서버: ","label_server_address":"서버주소: ","label_server_to_use":"사용할서버:","label_size":"크기: ","label_topic_name":"이름","label_user_contacts":"연락처: ","label_user_id":"ID:","label_wire_transport":"와이어수송:","label_you":"당신: ","label_your_name":"이름","label_your_permissions":"권한: ","last_seen_timestamp":"마지막으로본","leave_chat_warning":"이대화를나가시겠습니까?","link_contact_us":"문의처","link_privacy_policy":"개인정보보호정책","link_terms_of_service":"서비스약관","login_prompt":"로그인","menu_item_archive_topic":"보관","menu_item_block":"차단","menu_item_clear_messages":"메시지지우기","menu_item_clear_messages_for_all":"모두지우기","menu_item_delete":"삭제","menu_item_delete_for_all":"모두삭제","menu_item_delete_topic":"삭제","menu_item_edit_permissions":"편집권한","menu_item_info":"정보","menu_item_member_delete":"제거","menu_item_mute":"음소거","menu_item_restore_topic":"복원","menu_item_send_retry":"다시시도","menu_item_unblock":"차단해제","menu_item_unmute":"음소거해제","message_sending":"보내기...","message_sending_failed":"실패","messages_not_readable":"메시지에 액세스 할 수 없습니다","messaging_disabled_prompt":"메시지비활성화","more_online_members":"+{넘침}더보기","new_message_prompt":"새메시지","new_password_placeholder":"새비밀번호입력","no_connection":"연결없음","no_contacts":"연락처가없습니다 (._.)","numeric_confirmation_code_prompt":"숫자만","online_now":"현재접속중","password_prompt":"비밀번호","password_unchanged_prompt":"변경되지않음","peers_messaging_disabled":"동료의메시지가비활성화되었습니다.","permission_admin":"승인({val})","permission_delete":"삭제({val})","permission_join":"참여({val})","permission_owner":"소유자({val})","permission_pres":"알림받기({val})","permission_read":"읽기({val})","permission_share":"공유({val})","permission_write":"쓰기({val})","phone_dative":"전화","private_editing_placeholder":"나만볼수있습니다","push_init_failed":"푸시알림을초기화하지못했습니다","reconnect_countdown":"연결이끊어졌습니다.다시연결하는중{초}…","reconnect_now":"지금시도","reload_update":"재로드","report_chat_warning":"이대화를차단하고기록하시겠습니까?","requested_permissions":"요청","save_attachment":"저장","search_for_contacts":"검색을사용하여연락처찾기","search_no_results":"검색결과가없습니다","search_placeholder":"email:alice@example.com,tel:17025550003...와같은목록","sidepanel_title_acc_notifications":"알림","sidepanel_title_acc_support":"지원","sidepanel_title_account_settings":"계정설정","sidepanel_title_archive":"보관된채팅","sidepanel_title_blocked":"차단된채팅","sidepanel_title_cred":"자격증명확인","sidepanel_title_login":"로그인","sidepanel_title_newtpk":"새채팅시작","sidepanel_title_register":"계정만들기","sidepanel_title_reset":"비밀번호재설정","sidepanel_title_settings":"설정","stay_logged_in":"로그인상태유지","tabtitle_find_user":"찾기","tabtitle_group_by_id":"id로","tabtitle_new_group":"새그룹","tags_editor_no_tags":"일부태그추가","tags_not_found":"태그가정의되지않았습니다.일부를추가하십시오.","title_all_contacts":"모든연락처","title_group_members":"그룹구성원","title_manage_tags":"관리","title_not_found":"찾을수없음","title_permissions":"권한","title_tag_manager":"태그(사용자검색)","topic_block_warning":"이대화를차단하시겠습니까?","topic_delete_warning":"이대화를삭제하시겠습니까?","topic_name_editing_placeholder":"그룹의자유형이름","unnamed_topic":"이름없는","update_available":"업데이트가능.","upload_finishing":"마무리...","user_not_found":"찾을수없음","validate_credential_action":"확인","description_editing_placeholder":"설명(선택 사항)","label_description":"설명","button_security":"보안","panel_title_crop":"드래그하여 조정","panel_title_general":"일반","panel_title_members":"구성원","panel_title_security":"보안","panel_title_info":"정보","permissions_anonymous":"익명","permissions_authenticated":"인증됨","topic_delete":"채팅 삭제","permissions_user":"사용자 권한","password_reset_email_sent":"이메일이 {email}(으)로 전송되었습니다. 이메일의 지침에 따라 비밀번호를 재설정하세요.","label_unarchive_topic":"보관됨:","menu_item_reply":"회신하다","menu_item_forward":"리디렉션","forward_to":"메시지를 리디렉션","forward_to_search_placeholder":"연락처 검색","label_new_password":"새 비밀번호","drafty_unknown":"지원되지 않음","calls_incoming":"수신 전화","calls_outgoing":"발신 전화","calls_you_label":"너","menu_item_video_call":"영상 통화","already_in_call":"당신은 이미 말하고 있습니다!","call_cancelled":"취소 된","call_missed":"부재중","call_declined":"통화 거부","call_disconnected":"연결 끊김","label_use_secure_connection":"보안 연결 사용","phone_or_email_prompt":"전화번호 또는 이메일","cred_confirmed_successfully":"성공적으로 확인됨"},"ro":{"action_block_contact":"Blochează contact","action_cancel":"anulează","action_clear_messages":"Șterge mesajele","action_delete_messages":"Șterge toate mesajele","action_leave_chat":"Ieși din conversație","action_report_chat":"Raportează conversația","archived_contacts":"Contacte arhivate ({count})","badge_danger":"Suspicios","badge_owner":"owner","badge_staff":"Administrare","badge_verified":"Verificat","badge_you":"tu","block_contact_warning":"Ești sigur că dorești să blochezi acest contact?","blocked_contacts_link":"Contact blocate ({count})","button_add_another":"Adaugă","button_add_members":"Adaugă persoane","button_cancel":"Anulează","button_confirm":"Confirmă","button_create":"Creează","button_delete_account":"Șterge cont","button_edit":"Editează","button_logout":"Deconectare","button_ok":"OK","button_reset":"Resetează","button_send_request":"Trimite cerere","button_sign_in":"Conectează-te","button_sign_up":"Creează cont","button_subscribe":"Subscribe","button_update":"Actualizează","cannot_initiate_file_upload":"Nu se poate face încărcarea.","channel":"canal","channel_prompt":"Acesta este un canal","chat_invitation":"Ai primit invitație într-o conversație. Accepți?","chat_invitation_accept":"Da, accept","chat_invitation_block":"Blochează","chat_invitation_ignore":"Ignoră","clear_messages_warning":"Ești sigur că dorești să ștergi mesajele? Acestea nu pot fi recuperate.","code_doesnot_match":"Codul furnizat nu este valid","contacts_not_found":"Nu ai contacte salvate<br />¯∖_(ツ)_/¯","contacts_not_found_short":"Niciun contact găsit după criteriile \'\'{query}\'\'","credential_email_prompt":"Adresa de e-mail","delete_account":"Șterge contul","delete_account_warning":"Ești sigur că dorești să ștergi contul? Acesta nu va putea fi recuperat.","delete_messages_warning":"Ești sigur că dorești să șterge mesajele din toate conversațiile? Acestea nu pot fi recuperate.","deleted_content":"conținut șters","download_action":"download","drafty_attachment":"Atasament","drafty_form":"Formă:","drafty_image":"Imagine","email_dative":"email","email_prompt":"Adresa de e-mail","enable_peers_messaging":"Activează","enter_confirmation_code_prompt":"Introu codul de confirmare trimis pe {method}:","error_invalid_id":"ID Invalid","file_attachment_too_large":"Dimensiunea fișiterului {size} depășește limita de {limit}.","forgot_password_link":"Ți-ai uitat parola?","full_name_prompt":"Numele tău","granted_permissions":"Oferite","group_has_no_members":"În acest grup nu se află persoane","group_user_id_prompt":"Grup sau user ID","image_caption_prompt":"Titlul imaginii","invalid_content":"conținut invalid","invalid_security_token":"Codul de securitate este invalid","label_client":"Client:","label_content_type":"Tip conținut:","label_default_access_mode":"Default access mode:","label_file_name":"Nume fișier:","label_group_members":"Membrii grupului:","label_incognito_mode":"Mod incognito:","label_message_sound":"Sunet de mesaj:","label_muting_topic":"Mod silențios (muted):","label_other_user":"Altele","label_password":"Parola","label_permissions":"Permisiuni:","label_private":"Comentariu privat","label_push_notifications":"Alerte de notificare:","label_push_notifications_disabled":"Alerte de notificare (necesită HTTPS):","label_reset_password":"Resetează parola:","label_sdk":"SDK:","label_server":"Server:","label_server_address":"Adresa serverului:","label_server_to_use":"Server de utilizat:","label_size":"Size:","label_topic_name":"Nume","label_user_contacts":"Contacte:","label_user_id":"ID:","label_wire_transport":"Transportul legat:","label_you":"Tu:","label_your_name":"Numele tău","label_your_permissions":"Permisiuniile tale:","last_seen_timestamp":"Văzut ultima dată","leave_chat_warning":"Ești sigur că dorești să ieși din conersație?","link_contact_us":"Contactează-ne","link_privacy_policy":"Politica de Confidențialitate","link_terms_of_service":"Termenii Serviciului","login_prompt":"Conectează-te","menu_item_archive_topic":"Arhivează","menu_item_block":"Blochează","menu_item_clear_messages":"Șterge mesajele","menu_item_clear_messages_for_all":"Ștergele pe toate","menu_item_delete":"Șterge","menu_item_delete_for_all":"Ștergele pe toate","menu_item_delete_topic":"Șterge","menu_item_edit_permissions":"Editează permisiuni","menu_item_info":"Info","menu_item_member_delete":"Șterge persoană","menu_item_mute":"Mute","menu_item_restore_topic":"Restabili","menu_item_send_retry":"Reîncearcă","menu_item_unblock":"Deblochează","menu_item_unmute":"Unmute","message_sending":"se trimite...","message_sending_failed":"eroare","messages_not_readable":"Mesajele nu pot fi citite","messaging_disabled_prompt":"Mesageria este dezactivată","more_online_members":"+{overflow} mai mult","new_message_prompt":"Mesaj nou","new_password_placeholder":"Introdu parolă","no_connection":"Nu există conexiune","no_contacts":"Nu ai contacte adăugate :-(","numeric_confirmation_code_prompt":"Doar cifre","online_now":"online acum","password_prompt":"Parola","password_unchanged_prompt":"Neschimbată","peers_messaging_disabled":"Mesageria de tip Peer este dezactivată.","permission_admin":"Aprobare ({val})","permission_delete":"Ștergere ({val})","permission_join":"Participare ({val})","permission_owner":"Deținător ({val})","permission_pres":"Notificare ({val})","permission_read":"Citire ({val})","permission_share":"Distribuire ({val})","permission_write":"Scriere ({val})","phone_dative":"telefon","private_editing_placeholder":"Vizibil doar ție","push_init_failed":"Nu s-a reușit inițializarea tip push notifications","reconnect_countdown":"Deconectat. Se încearcă conectarea în {seconds}…","reconnect_now":"Încearcă din nou","reload_update":"Reîncarcă","report_chat_warning":"Ești sigur că dorești să blochezi și să raportezi această conversație?","requested_permissions":"Necesare","save_attachment":"salvează","search_for_contacts":"Caută în contacte","search_no_results":"Nu s-au găsit rezultate","search_placeholder":"Caută după e-mail sau număr telefon...","sidepanel_title_acc_notifications":"Notificări","sidepanel_title_acc_support":"Ajutor","sidepanel_title_account_settings":"Setările Contului","sidepanel_title_archive":"Conversații Arhivate","sidepanel_title_blocked":"Conversații Blocate","sidepanel_title_cred":"Confirmă credențiale","sidepanel_title_login":"Conectează-te","sidepanel_title_newtpk":"Creeză un nou Chat","sidepanel_title_register":"Creează Cont","sidepanel_title_reset":"Resetează Parola","sidepanel_title_settings":"Setări","stay_logged_in":"Rămâi conectat","tabtitle_find_user":"caută","tabtitle_group_by_id":"după id","tabtitle_new_group":"grup nou","tags_editor_no_tags":"Adaugă tag-uri","tags_not_found":"Niciun tag definit. Adaugă.","title_all_contacts":"Toate Contactele","title_group_members":"Persoanele din grup","title_manage_tags":"Administrează","title_not_found":"Nu a fost găsit","title_permissions":"Permisiuni","title_tag_manager":"Tag-uri (user discovery)","topic_block_warning":"Ești sigur că dorești să blochezi această conversație?","topic_delete_warning":"Ești sigur că dorești să șterge această conversație?","topic_name_editing_placeholder":"Numele grupului","unnamed_topic":"Nedenumit","update_available":"Actualizare disponibilă.","upload_finishing":"se încarcă...","user_not_found":"Utilizatorul nu a fost găsit","validate_credential_action":"confirmă","description_editing_placeholder":"Descriere (opțional)","label_description":"Descriere","button_security":"Securitate","panel_title_crop":"Trageți pentru a ajusta","panel_title_general":"Generale","panel_title_members":"Membri","panel_title_security":"Securitate","panel_title_info":"Info","permissions_anonymous":"Anonim","permissions_authenticated":"Autentificat","topic_delete":"Ștergeți Chat","permissions_user":"Permisiunile utilizatorului","password_reset_email_sent":"Un e-mail a fost trimis către {email}. Urmați instrucțiunile din e-mail pentru a vă reseta parola.","label_unarchive_topic":"Arhivat:","menu_item_reply":"A raspunde","menu_item_forward":"Redirecţiona","forward_to":"Redirecționați către","forward_to_search_placeholder":"Căutați contacte","label_new_password":"Parolă Nouă","drafty_unknown":"Neacceptat","calls_incoming":"Apel primit","calls_outgoing":"Apel efectuat","calls_you_label":"Tu","menu_item_video_call":"Apel video","already_in_call":"Deja vorbesti!","call_cancelled":"anulat","call_missed":"pierdut","call_declined":"refuzat","call_disconnected":"deconectat","label_use_secure_connection":"Utilizați conexiune securizată","phone_or_email_prompt":"Număr de telefon sau e-mail","cred_confirmed_successfully":"Confirmat cu succes"},"ru":{"action_block_contact":"Заблокировать контакт","action_cancel":"отменить","action_clear_messages":"Удалить сообщения","action_delete_messages":"Удалить сообщения","action_leave_chat":"Уйти из чата","action_report_chat":"Сообщить о нарушении","archived_contacts":"Чаты в архиве ({count})","badge_danger":"Подозрительный","badge_owner":"влад.","badge_staff":"Администрация","badge_verified":"Верифицированный","badge_you":"вы","block_contact_warning":"Вы действительно заблокировать этот контакт?","blocked_contacts_link":"Заблокированные ({count})","button_add_another":"Добавить","button_add_members":"Добавить","button_cancel":"Отменить","button_confirm":"Подтвердить","button_create":"Создать","button_delete_account":"Удалить аккаунт","button_edit":"Изменить","button_logout":"Выйти","button_ok":"OK","button_reset":"Изменить","button_send_request":"Отправить","button_sign_in":"Войти","button_sign_up":"Создать аккаунт","button_subscribe":"Подписаться","button_update":"Применить","cannot_initiate_file_upload":"Ошибка загрузки файла.","channel":"канал","channel_prompt":"Создать канал","chat_invitation":"Вас пригласили начать новый чат. Как вы хотите поступить?","chat_invitation_accept":"Принять","chat_invitation_block":"Заблокировать","chat_invitation_ignore":"Игнорировать","clear_messages_warning":"Вы действительно хотите удалить все сообщения в чате? Их будет невозможно восстановить.","code_doesnot_match":"Код не совпадает","contacts_not_found":"Чатов нет<br />¯∖_(ツ)_/¯","contacts_not_found_short":"Нет контактов для запроса \'\'{query}\'\'","credential_email_prompt":"Регистрационный емейл","delete_account":"Удалить аккаунт","delete_account_warning":"Вы уверены, что ходите удалить свой аккаунт? Его невозможно будет восстановить.","delete_messages_warning":"Вы действительно хотите удалить все сообщения?","deleted_content":"удалено","download_action":"скачать","drafty_attachment":"Аттачмент","drafty_form":"Форма:","drafty_image":"Картинка","email_dative":"емейлу","email_prompt":"Email, напр. ivan@example.com","enable_peers_messaging":"Разблокировать.","enter_confirmation_code_prompt":"Код подтверждения, полученный по {method}:","error_invalid_id":"Неверный ID","file_attachment_too_large":"Размер файла {size} превышает {limit} лимит.","forgot_password_link":"Напомнить пароль","full_name_prompt":"Полное имя, напр. Иван Петров","granted_permissions":"Получены","group_has_no_members":"Нет участников","group_user_id_prompt":"ID чата или пользователя","image_caption_prompt":"Подпись к фото","invalid_content":"сообщение не читается","invalid_security_token":"Токен некорректен","label_client":"Клиент:","label_content_type":"Тип:","label_default_access_mode":"Доступ по умолчанию:","label_file_name":"Имя файла:","label_group_members":"Участники чата:","label_incognito_mode":"Режим инкогнито:","label_message_sound":"Звук нового сообщения:","label_muting_topic":"Без уведомлений","label_other_user":"Второй","label_password":"Пароль","label_permissions":"Права доступа:","label_private":"Комментарий","label_push_notifications":"Уведомления:","label_push_notifications_disabled":"Уведомления (требуют HTTPS):","label_reset_password":"Отправить емейл для смены пароля:","label_sdk":"SDK:","label_server":"Сервер:","label_server_address":"Адрес сервера:","label_server_to_use":"Использовать сервер:","label_size":"Размер:","label_topic_name":"Название","label_user_contacts":"Конакты:","label_user_id":"ID:","label_wire_transport":"Соединение:","label_you":"Вы:","label_your_name":"Ваше имя","label_your_permissions":"Ваши права доступа:","last_seen_timestamp":"Был активен","leave_chat_warning":"Вы действительно хотите покинуть этот чат?","link_contact_us":"Связаться с нами","link_privacy_policy":"Политика конфиденциальности","link_terms_of_service":"Условия сервиса","login_prompt":"Логин","menu_item_archive_topic":"В архив","menu_item_block":"Заблокировать","menu_item_clear_messages":"Удалить сообщения","menu_item_clear_messages_for_all":"Удалить для всех","menu_item_delete":"Удалить","menu_item_delete_for_all":"Удалить для всех","menu_item_delete_topic":"Удалить чат","menu_item_edit_permissions":"Права доступа","menu_item_info":"Информация","menu_item_member_delete":"Отписать","menu_item_mute":"Не уведомлять","menu_item_restore_topic":"Разархивировать","menu_item_send_retry":"Отправить заново","menu_item_unblock":"Разблокировать","menu_item_unmute":"Уведомлять","message_sending":"в пути...","message_sending_failed":"ошибка","messages_not_readable":"нет доступа к сообщениям","messaging_disabled_prompt":"Отправка недоступна","more_online_members":"+еще {overflow}","new_message_prompt":"Новое сообщение","new_password_placeholder":"Введите новый пароль","no_connection":"Нет связи","no_contacts":"Ничего нет :-(","numeric_confirmation_code_prompt":"Только цифры","online_now":"онлайн","password_prompt":"Пароль","password_unchanged_prompt":"Не изменен","peers_messaging_disabled":"Чат заблокирован у корреспондента.","permission_admin":"Подтверждать ({val})","permission_delete":"Удалять ({val})","permission_join":"Подписываться ({val})","permission_owner":"Владелец ({val})","permission_pres":"Уведомлять ({val})","permission_read":"Читать ({val})","permission_share":"Приглашать ({val})","permission_write":"Писать ({val})","phone_dative":"телефону","private_editing_placeholder":"Виден только вам","push_init_failed":"Ошибка инициализации пуш уведомлений","reconnect_countdown":"Нет связи. Подключение через {seconds}…","reconnect_now":"Подключить сейчас.","reload_update":"Обновить","report_chat_warning":"Вы действительно хотите сообщить о нарушении и заблокировать этот чат?","requested_permissions":"Требуются","save_attachment":"сохранить","search_for_contacts":"Поиск контактов","search_no_results":"Ничего не найдено","search_placeholder":"Список, напр. email:alice@example.com, tel:+17025550003...","sidepanel_title_acc_notifications":"Уведомления","sidepanel_title_acc_support":"Поддержка","sidepanel_title_account_settings":"Настройки аккаунта","sidepanel_title_archive":"Архив чатов","sidepanel_title_blocked":"Заблокированные чаты","sidepanel_title_cred":"Подтвердить","sidepanel_title_login":"Авторизация","sidepanel_title_newtpk":"Новый чат","sidepanel_title_register":"Зарегистрироваться","sidepanel_title_reset":"Сменить пароль","sidepanel_title_settings":"Настройки","stay_logged_in":"Запомнить","tabtitle_find_user":"найти","tabtitle_group_by_id":"по id","tabtitle_new_group":"создать","tags_editor_no_tags":"Добавьте теги","tags_not_found":"Тегов нет. Добавьте","title_all_contacts":"Все контакты","title_group_members":"Участники","title_manage_tags":"Редактировать","title_not_found":"Не найден","title_permissions":"Права доступа","title_tag_manager":"Теги для поиска","topic_block_warning":"Вы действительно хотите заблокировать этот чат?","topic_delete_warning":"Вы действительно хотите удалить этот чат?","topic_name_editing_placeholder":"Название чата","unnamed_topic":"Без названия","update_available":"Есть новая версия приложения.","upload_finishing":"завершение...","user_not_found":"Не найден","validate_credential_action":"подтвердить","description_editing_placeholder":"Описание (не обязательно)","label_description":"Описание","button_security":"Безопасность","panel_title_crop":"Обрезать картинку","panel_title_general":"Общие настройки","panel_title_members":"Участники","panel_title_security":"Безопасность","panel_title_info":"Подробности","permissions_anonymous":"Анонимный","permissions_authenticated":"Авторизованный","topic_delete":"Удалить чат","permissions_user":"Права доступа","password_reset_email_sent":"Сообщение было отправлено на адрес {email}. Следуйте инструкциям в сообщении, чтобы изменить пароль.","label_unarchive_topic":"Архивирован:","menu_item_reply":"Ответить","menu_item_forward":"Переслать","forward_to":"Переслать","forward_to_search_placeholder":"Поиск контактов","label_new_password":"Новый пароль","drafty_unknown":"Не поддерживается","calls_incoming":"Входящий звонок","calls_outgoing":"Исходящий звонок","calls_you_label":"Вы","menu_item_video_call":"Видеозвонок","already_in_call":"Вы уже звоните кому-то!","call_cancelled":"отменен","call_missed":"пропущен","call_declined":"отклонен","call_disconnected":"разъединен","label_use_secure_connection":"Безопасное соединение","phone_or_email_prompt":"Телефон или емейл","cred_confirmed_successfully":"Подтверждено успешно"},"zh-TW":{"action_block_contact":"封鎖聯絡人","action_cancel":"取消","action_clear_messages":"清除訊息","action_delete_messages":"為所有人清除訊息","action_leave_chat":"離開對話","action_report_chat":"檢舉對話","archived_contacts":"已封存的聯絡人 ({count})","badge_danger":"不可信","badge_owner":"擁有者","badge_staff":"員工管理","badge_verified":"已驗證/官方","badge_you":"您","block_contact_warning":"您確定要封鎖此聯絡人嗎？","blocked_contacts_link":"已封鎖的聯絡人 ({count})","button_add_another":"新增其他人","button_add_members":"新增成員","button_cancel":"取消","button_confirm":"確認","button_create":"建立","button_delete_account":"刪除帳號","button_edit":"編輯","button_logout":"登出","button_ok":"OK","button_reset":"重設","button_send_request":"傳送要求","button_sign_in":"登入","button_sign_up":"註冊","button_subscribe":"訂閱","button_update":"更新","cannot_initiate_file_upload":"無法為檔案上傳初始化。","channel":"頻道","channel_prompt":"這是頻道","chat_invitation":"您已被邀請開始新對話。您接下來要做什麼呢？","chat_invitation_accept":"接受","chat_invitation_block":"封鎖","chat_invitation_ignore":"忽略","clear_messages_warning":"您確定要清除所有訊息嗎？此操作無法復原。","code_doesnot_match":"代碼不相符","contacts_not_found":"您沒有任何對話<br />¯∖_(ツ)_/¯","contacts_not_found_short":"沒有符合 \'\'{query}\'\' 的聯絡人","credential_email_prompt":"您的註冊電子郵件地址","delete_account":"刪除帳號","delete_account_warning":"您確定要刪除您的帳戶嗎？此操作無法撤消。","delete_messages_warning":"您確定要為所有人刪除所有訊息嗎？此操作無法復原。","deleted_content":"內容已被刪除","download_action":"下載","drafty_attachment":"附加檔案","drafty_form":"表單：","drafty_image":"圖片","email_dative":"電子郵件地址","email_prompt":"電子郵件地址，例如：jdoe@example.com","enable_peers_messaging":"啟用","enter_confirmation_code_prompt":"輸入透過 {method} 傳送給您的確認碼：","error_invalid_id":"ID 無效","file_attachment_too_large":"檔案大小 {size} 超出 {limit} 限制。","forgot_password_link":"忘記密碼？","full_name_prompt":"全名，例如：王小明","granted_permissions":"已授權","group_has_no_members":"無成員","group_user_id_prompt":"群組或使用者 ID","image_caption_prompt":"圖片說明","invalid_content":"內容無效","invalid_security_token":"安全權杖無效","label_client":"客戶端：","label_content_type":"類型：","label_default_access_mode":"預設存取模式：","label_file_name":"檔名：","label_group_members":"群組成員：","label_incognito_mode":"無痕模式：","label_message_sound":"訊息提示聲：","label_muting_topic":"靜音：","label_other_user":"其他","label_password":"密碼","label_permissions":"權限：","label_private":"私人留言","label_push_notifications":"通知：","label_push_notifications_disabled":"通知 (需要 HTTPS)：","label_reset_password":"傳送重設密碼郵件：","label_sdk":"SDK：","label_server":"伺服器：","label_server_address":"伺服器位址：","label_server_to_use":"使用的伺服器：","label_size":"大小：","label_topic_name":"名稱","label_user_contacts":"聯絡人：","label_user_id":"ID：","label_wire_transport":"Wire transport：","label_you":"您：","label_your_name":"您的名字","label_your_permissions":"您的權限：","last_seen_timestamp":"最後上線","leave_chat_warning":"您確定要離開此對話嗎？","link_contact_us":"聯絡我們","link_privacy_policy":"隱私權政策","link_terms_of_service":"服務條款","login_prompt":"登入","menu_item_archive_topic":"封存","menu_item_block":"封鎖","menu_item_clear_messages":"清除訊息","menu_item_clear_messages_for_all":"為所有人清除訊息","menu_item_delete":"刪除","menu_item_delete_for_all":"為所有人刪除","menu_item_delete_topic":"刪除","menu_item_edit_permissions":"編輯權限","menu_item_info":"Info","menu_item_member_delete":"移除","menu_item_mute":"靜音","menu_item_restore_topic":"恢復","menu_item_send_retry":"重試","menu_item_unblock":"解除封鎖","menu_item_unmute":"解除靜音","message_sending":"正在傳送...","message_sending_failed":"失敗","messages_not_readable":"沒有存取訊息的權限","messaging_disabled_prompt":"停用訊息","more_online_members":"+{overflow}","new_message_prompt":"新訊息","new_password_placeholder":"輸入新的密碼","no_connection":"無連線","no_contacts":"您沒有任何聯絡人 :-(","numeric_confirmation_code_prompt":"僅數字","online_now":"上線中","password_prompt":"密碼","password_unchanged_prompt":"未修改","peers_messaging_disabled":"Peer 已停用訊息。","permission_admin":"核可 ({val})","permission_delete":"刪除 ({val})","permission_join":"加入 ({val})","permission_owner":"擁有者 ({val})","permission_pres":"收到通知 ({val})","permission_read":"讀取 ({val})","permission_share":"分享 ({val})","permission_write":"撰寫 ({val})","phone_dative":"phone","private_editing_placeholder":"僅您可見","push_init_failed":"初始化通知失敗。","reconnect_countdown":"已斷線。將在 {seconds} 秒後重新連線…","reconnect_now":"現在重試","reload_update":"重新載入","report_chat_warning":"您確定要封鎖並檢舉此對話嗎？","requested_permissions":"重新請求","save_attachment":"儲存","search_for_contacts":"使用搜尋來尋找聯絡人","search_no_results":"搜尋無結果","search_placeholder":"例如 email:alice@example.com, tel:17025550003... 的清單","sidepanel_title_acc_notifications":"通知","sidepanel_title_acc_support":"支援","sidepanel_title_account_settings":"帳號設定","sidepanel_title_archive":"已封存的對話","sidepanel_title_blocked":"已封鎖的對話","sidepanel_title_cred":"確認認證","sidepanel_title_login":"登入","sidepanel_title_newtpk":"開始新對話","sidepanel_title_register":"建立帳號","sidepanel_title_reset":"重設密碼","sidepanel_title_settings":"設定","stay_logged_in":"保持登入","tabtitle_find_user":"尋找","tabtitle_group_by_id":"以 id","tabtitle_new_group":"新群組","tags_editor_no_tags":"新增一些標籤","tags_not_found":"未定義任何標籤。請新增一些標籤。","title_all_contacts":"所有聯絡人","title_group_members":"群組成員","title_manage_tags":"管理","title_not_found":"找不到","title_permissions":"權限","title_tag_manager":"標籤 (使用者探索)","topic_block_warning":"您確定要封鎖此對話嗎？","topic_delete_warning":"您確定要刪除此對話嗎？","topic_name_editing_placeholder":"群組的任意名稱","unnamed_topic":"未命名","update_available":"有可用的更新。","upload_finishing":"正在完成...","user_not_found":"找不到","validate_credential_action":"確認","description_editing_placeholder":"說明（可選）","label_description":"說明","button_security":"安全性","panel_title_crop":"拖動調整","panel_title_general":"一般","panel_title_members":"成員","panel_title_security":"安全性","panel_title_info":"資訊","permissions_anonymous":"匿名","permissions_authenticated":"已認證","topic_delete":"刪除聊天","permissions_user":"用戶權限","password_reset_email_sent":"一封電子郵件已發送至 {email}。按照電子郵件中的說明重置密碼。","label_unarchive_topic":"存檔聊天：","menu_item_reply":"回答","menu_item_forward":"重定向","forward_to":"重定向消息","forward_to_search_placeholder":"搜索聯繫人","label_new_password":"新密碼","drafty_unknown":"不支持","calls_incoming":"來電","calls_outgoing":"撥出電話","calls_you_label":"你","menu_item_video_call":"視頻電話","already_in_call":"你已經在說話了！","call_cancelled":"取消","call_missed":"未接","call_declined":"被拒","call_disconnected":"斷開連接","label_use_secure_connection":"使用安全連接","phone_or_email_prompt":"電話號碼或電子郵件","cred_confirmed_successfully":"確認成功"},"zh":{"action_block_contact":"屏蔽联系人","action_cancel":"取消","action_clear_messages":"删除讯息","action_delete_messages":"删除所有帖子","action_leave_chat":"离开","action_report_chat":"检举垃圾邮件","archived_contacts":"已归档联系人 ({count})","badge_danger":"可疑的","badge_owner":"所有者","badge_staff":"在员工管理下","badge_verified":"值得信赖","badge_you":"你","block_contact_warning":"您确定要阻止此联系人吗？","blocked_contacts_link":"封锁的联络人 ({count})","button_add_another":"加上另一个","button_add_members":"添加成员","button_cancel":"取消","button_confirm":"确认","button_create":"创建","button_delete_account":"删除帐户","button_edit":"编辑","button_logout":"登出","button_ok":"好","button_reset":"重置","button_send_request":"发送请求","button_sign_in":"登录","button_sign_up":"注册","button_subscribe":"订阅","button_update":"更新","cannot_initiate_file_upload":"无法初始化文件上传。","channel":"频道","channel_prompt":"这是一个频道","chat_invitation":"你受邀开始新会话。你想怎么做？","chat_invitation_accept":"接受","chat_invitation_block":"屏蔽","chat_invitation_ignore":"忽略","clear_messages_warning":"您确定要清除所有消息吗？无法撤消。","code_doesnot_match":"代码不匹配","contacts_not_found":"你尚无会话<br />¯∖_(ツ)_/¯","contacts_not_found_short":"无联系人匹配\'\'{query}\'\'","credential_email_prompt":"你的注册邮箱","delete_account":"删除帐户","delete_account_warning":"您确定要删除您的帐户吗？无法撤消。","delete_messages_warning":"您确定要删除所有消息吗？无法撤消。","deleted_content":"内容已删除","download_action":"下载","drafty_attachment":"附件","drafty_form":"形式：","drafty_image":"图像","email_dative":"电子邮件","email_prompt":"电子邮件，例如 zhang@example.com","enable_peers_messaging":"启用","enter_confirmation_code_prompt":"输入通过{method}发送的验证码：","error_invalid_id":"无效 ID","file_attachment_too_large":"文件大小 {size} 超过 {limit} 限制。","forgot_password_link":"忘记密码？","full_name_prompt":"全名，例如张伟","granted_permissions":"已授予","group_has_no_members":"无成员","group_user_id_prompt":"群组或用户 ID","image_caption_prompt":"图片标题","invalid_content":"无效内容","invalid_security_token":"无效的安全令牌","label_client":"客户端：","label_content_type":"内容类型：","label_default_access_mode":"蓦然访问模式：","label_file_name":"文件名：","label_group_members":"群组成员：","label_incognito_mode":"无痕模式：","label_message_sound":"消息提示音：","label_muting_topic":"已静音：","label_other_user":"其他","label_password":"密码","label_permissions":"权限：","label_private":"私人评论","label_push_notifications":"通知提醒：","label_push_notifications_disabled":"通知提醒（需要 HTTPS）：","label_reset_password":"发送密码重置邮件：","label_sdk":"开发包：","label_server":"服务器：","label_server_address":"服务器地址：","label_server_to_use":"使用的服务器：","label_size":"大小：","label_topic_name":"名称","label_user_contacts":"往来：","label_user_id":"地址：","label_wire_transport":"线路传输：","label_you":"你：","label_your_name":"你的姓名","label_your_permissions":"你的权限：","last_seen_timestamp":"最后可见","leave_chat_warning":"您确定要退出此对话吗？","link_contact_us":"联系我们","link_privacy_policy":"隐私政策","link_terms_of_service":"条款和条件","login_prompt":"登录","menu_item_archive_topic":"归档","menu_item_block":"屏蔽","menu_item_clear_messages":"清空消息","menu_item_clear_messages_for_all":"全部清除","menu_item_delete":"删除","menu_item_delete_for_all":"全部删除","menu_item_delete_topic":"删除","menu_item_edit_permissions":"编辑权限","menu_item_info":"信息","menu_item_member_delete":"移除","menu_item_mute":"静音","menu_item_restore_topic":"从存档中恢复","menu_item_send_retry":"重试","menu_item_unblock":"取消屏蔽","menu_item_unmute":"取消静音","message_sending":"正在发送...","message_sending_failed":"发送失败","messages_not_readable":"无消息访问权限","messaging_disabled_prompt":"消息已禁用","more_online_members":"还有{overflow}个","new_message_prompt":"新消息","new_password_placeholder":"输入新密码","no_connection":"无连接","no_contacts":"你尚无联系人 (._.)","numeric_confirmation_code_prompt":"仅数字","online_now":"在线","password_prompt":"密码","password_unchanged_prompt":"未改变","peers_messaging_disabled":"成员间消息已禁用。","permission_admin":"批准 ({val})","permission_delete":"删除 ({val})","permission_join":"加入 ({val})","permission_owner":"所有者 ({val})","permission_pres":"获取通知 ({val})","permission_read":"读取 ({val})","permission_share":"分享 ({val})","permission_write":"写入 ({val})","phone_dative":"电话","private_editing_placeholder":"仅自己可见","push_init_failed":"初始化推送通知失败","reconnect_countdown":"连接已断开。{seconds} 秒后重新连接…","reconnect_now":"立即尝试","reload_update":"重新载入","report_chat_warning":"您确定要停止并报告此对话吗？","requested_permissions":"已请求","save_attachment":"保存","search_for_contacts":"使用搜索寻找联系人","search_no_results":"搜索返回任何结果","search_placeholder":"列表如 email:alice@example.com, tel:+17025550003...","sidepanel_title_acc_notifications":"通知","sidepanel_title_acc_support":"支持","sidepanel_title_account_settings":"帐号设定","sidepanel_title_archive":"已存档会话","sidepanel_title_blocked":"被阻止的聊天","sidepanel_title_cred":"确认凭据","sidepanel_title_login":"登录","sidepanel_title_newtpk":"开始新会话","sidepanel_title_register":"创建账户","sidepanel_title_reset":"重置密码","sidepanel_title_settings":"设置","stay_logged_in":"保持登录","tabtitle_find_user":"搜索","tabtitle_group_by_id":"通过 id","tabtitle_new_group":"新群组","tags_editor_no_tags":"添加一些标签","tags_not_found":"尚未定义标签。添加一些。","title_all_contacts":"全部联系人","title_group_members":"群组成员","title_manage_tags":"管理标签","title_not_found":"无法找到","title_permissions":"权限","title_tag_manager":"标签（用户发现）","topic_block_warning":"您确定要阻止此对话吗？","topic_delete_warning":"您确定要删除此对话吗？","topic_name_editing_placeholder":"群组自由格式名称","unnamed_topic":"未命名","update_available":"更新可用。","upload_finishing":"正在结束...","user_not_found":"未找到","validate_credential_action":"确认","description_editing_placeholder":"说明（可选）","label_description":"说明","button_security":"安全","panel_title_crop":"拖动调整","panel_title_general":"常用设定","panel_title_members":"成员","panel_title_security":"安全","panel_title_info":"信息","permissions_anonymous":"匿名","permissions_authenticated":"已认证","topic_delete":"删除聊天","permissions_user":"用户权限","password_reset_email_sent":"一封电子邮件已发送至 {email}。按照电子邮件中的说明重置密码。","label_unarchive_topic":"存档：","menu_item_reply":"回复","menu_item_forward":"重定向","forward_to":"重定向消息","forward_to_search_placeholder":"搜索联系人","label_new_password":"新密码","drafty_unknown":"不支持","calls_incoming":"来电","calls_outgoing":"拨出电话","calls_you_label":"你","menu_item_video_call":"视频电话","already_in_call":"你已经在说话了！","call_cancelled":"取消","call_missed":"未接","call_declined":"被拒","call_disconnected":"断开连接","label_use_secure_connection":"使用安全连接","phone_or_email_prompt":"电话号码或电子邮件","cred_confirmed_successfully":"确认成功"}}'
        ),
        r = function (e) {
          const t = [];
          let a = 0;
          for (let s = 0; s < e.length; s++) {
            let n = e.charCodeAt(s);
            n < 128
              ? (t[a++] = n)
              : n < 2048
              ? ((t[a++] = (n >> 6) | 192), (t[a++] = (63 & n) | 128))
              : 55296 == (64512 & n) &&
                s + 1 < e.length &&
                56320 == (64512 & e.charCodeAt(s + 1))
              ? ((n = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++s))),
                (t[a++] = (n >> 18) | 240),
                (t[a++] = ((n >> 12) & 63) | 128),
                (t[a++] = ((n >> 6) & 63) | 128),
                (t[a++] = (63 & n) | 128))
              : ((t[a++] = (n >> 12) | 224),
                (t[a++] = ((n >> 6) & 63) | 128),
                (t[a++] = (63 & n) | 128));
          }
          return t;
        },
        l = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray(e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const a = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              s = [];
            for (let t = 0; t < e.length; t += 3) {
              const n = e[t],
                i = t + 1 < e.length,
                o = i ? e[t + 1] : 0,
                r = t + 2 < e.length,
                l = r ? e[t + 2] : 0,
                c = n >> 2,
                d = ((3 & n) << 4) | (o >> 4);
              let h = ((15 & o) << 2) | (l >> 6),
                p = 63 & l;
              r || ((p = 64), i || (h = 64)), s.push(a[c], a[d], a[h], a[p]);
            }
            return s.join("");
          },
          encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(r(e), t);
          },
          decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : (function (e) {
                  const t = [];
                  let a = 0,
                    s = 0;
                  for (; a < e.length; ) {
                    const n = e[a++];
                    if (n < 128) t[s++] = String.fromCharCode(n);
                    else if (n > 191 && n < 224) {
                      const i = e[a++];
                      t[s++] = String.fromCharCode(((31 & n) << 6) | (63 & i));
                    } else if (n > 239 && n < 365) {
                      const i =
                        (((7 & n) << 18) |
                          ((63 & e[a++]) << 12) |
                          ((63 & e[a++]) << 6) |
                          (63 & e[a++])) -
                        65536;
                      (t[s++] = String.fromCharCode(55296 + (i >> 10))),
                        (t[s++] = String.fromCharCode(56320 + (1023 & i)));
                    } else {
                      const i = e[a++],
                        o = e[a++];
                      t[s++] = String.fromCharCode(
                        ((15 & n) << 12) | ((63 & i) << 6) | (63 & o)
                      );
                    }
                  }
                  return t.join("");
                })(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray(e, t) {
            this.init_();
            const a = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              s = [];
            for (let t = 0; t < e.length; ) {
              const n = a[e.charAt(t++)],
                i = t < e.length ? a[e.charAt(t)] : 0;
              ++t;
              const o = t < e.length ? a[e.charAt(t)] : 64;
              ++t;
              const r = t < e.length ? a[e.charAt(t)] : 64;
              if ((++t, null == n || null == i || null == o || null == r))
                throw Error();
              const l = (n << 2) | (i >> 4);
              if ((s.push(l), 64 !== o)) {
                const e = ((i << 4) & 240) | (o >> 2);
                if ((s.push(e), 64 !== r)) {
                  const e = ((o << 6) & 192) | r;
                  s.push(e);
                }
              }
            }
            return s;
          },
          init_() {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (let e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        },
        c = function (e) {
          return (function (e) {
            const t = r(e);
            return l.encodeByteArray(t, !0);
          })(e).replace(/\./g, "");
        };
      class d {
        constructor() {
          (this.reject = () => {}),
            (this.resolve = () => {}),
            (this.promise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        wrapCallback(e) {
          return (t, a) => {
            t ? this.reject(t) : this.resolve(a),
              "function" == typeof e &&
                (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, a));
          };
        }
      }
      function h() {
        return "object" == typeof indexedDB;
      }
      function p() {
        return new Promise((e, t) => {
          try {
            let a = !0;
            const s = "validate-browser-context-for-indexeddb-analytics-module",
              n = self.indexedDB.open(s);
            (n.onsuccess = () => {
              n.result.close(), a || self.indexedDB.deleteDatabase(s), e(!0);
            }),
              (n.onupgradeneeded = () => {
                a = !1;
              }),
              (n.onerror = () => {
                var e;
                t(
                  (null === (e = n.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (e) {
            t(e);
          }
        });
      }
      class u extends Error {
        constructor(e, t, a) {
          super(t),
            (this.code = e),
            (this.customData = a),
            (this.name = "FirebaseError"),
            Object.setPrototypeOf(this, u.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, m.prototype.create);
        }
      }
      class m {
        constructor(e, t, a) {
          (this.service = e), (this.serviceName = t), (this.errors = a);
        }
        create(e, ...t) {
          const a = t[0] || {},
            s = `${this.service}/${e}`,
            n = this.errors[e],
            i = n
              ? (function (e, t) {
                  return e.replace(g, (e, a) => {
                    const s = t[a];
                    return null != s ? String(s) : `<${a}?>`;
                  });
                })(n, a)
              : "Error",
            o = `${this.serviceName}: ${i} (${s}).`;
          return new u(s, o, a);
        }
      }
      const g = /\{\$([^}]+)}/g;
      function _(e, t) {
        if (e === t) return !0;
        const a = Object.keys(e),
          s = Object.keys(t);
        for (const n of a) {
          if (!s.includes(n)) return !1;
          const a = e[n],
            i = t[n];
          if (f(a) && f(i)) {
            if (!_(a, i)) return !1;
          } else if (a !== i) return !1;
        }
        for (const e of s) if (!a.includes(e)) return !1;
        return !0;
      }
      function f(e) {
        return null !== e && "object" == typeof e;
      }
      function b(e) {
        return e && e._delegate ? e._delegate : e;
      }
      class v {
        constructor(e, t, a) {
          (this.name = e),
            (this.instanceFactory = t),
            (this.type = a),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = "LAZY"),
            (this.onInstanceCreated = null);
        }
        setInstantiationMode(e) {
          return (this.instantiationMode = e), this;
        }
        setMultipleInstances(e) {
          return (this.multipleInstances = e), this;
        }
        setServiceProps(e) {
          return (this.serviceProps = e), this;
        }
        setInstanceCreatedCallback(e) {
          return (this.onInstanceCreated = e), this;
        }
      }
      const y = "[DEFAULT]";
      class w {
        constructor(e, t) {
          (this.name = e),
            (this.container = t),
            (this.component = null),
            (this.instances = new Map()),
            (this.instancesDeferred = new Map()),
            (this.instancesOptions = new Map()),
            (this.onInitCallbacks = new Map());
        }
        get(e) {
          const t = this.normalizeInstanceIdentifier(e);
          if (!this.instancesDeferred.has(t)) {
            const e = new d();
            if (
              (this.instancesDeferred.set(t, e),
              this.isInitialized(t) || this.shouldAutoInitialize())
            )
              try {
                const a = this.getOrInitializeService({
                  instanceIdentifier: t,
                });
                a && e.resolve(a);
              } catch (e) {}
          }
          return this.instancesDeferred.get(t).promise;
        }
        getImmediate(e) {
          var t;
          const a = this.normalizeInstanceIdentifier(
              null == e ? void 0 : e.identifier
            ),
            s =
              null !== (t = null == e ? void 0 : e.optional) &&
              void 0 !== t &&
              t;
          if (!this.isInitialized(a) && !this.shouldAutoInitialize()) {
            if (s) return null;
            throw Error(`Service ${this.name} is not available`);
          }
          try {
            return this.getOrInitializeService({ instanceIdentifier: a });
          } catch (e) {
            if (s) return null;
            throw e;
          }
        }
        getComponent() {
          return this.component;
        }
        setComponent(e) {
          if (e.name !== this.name)
            throw Error(
              `Mismatching Component ${e.name} for Provider ${this.name}.`
            );
          if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
          if (((this.component = e), this.shouldAutoInitialize())) {
            if (
              (function (e) {
                return "EAGER" === e.instantiationMode;
              })(e)
            )
              try {
                this.getOrInitializeService({ instanceIdentifier: y });
              } catch (e) {}
            for (const [e, t] of this.instancesDeferred.entries()) {
              const a = this.normalizeInstanceIdentifier(e);
              try {
                const e = this.getOrInitializeService({
                  instanceIdentifier: a,
                });
                t.resolve(e);
              } catch (e) {}
            }
          }
        }
        clearInstance(e = "[DEFAULT]") {
          this.instancesDeferred.delete(e),
            this.instancesOptions.delete(e),
            this.instances.delete(e);
        }
        async delete() {
          const e = Array.from(this.instances.values());
          await Promise.all([
            ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
            ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
          ]);
        }
        isComponentSet() {
          return null != this.component;
        }
        isInitialized(e = "[DEFAULT]") {
          return this.instances.has(e);
        }
        getOptions(e = "[DEFAULT]") {
          return this.instancesOptions.get(e) || {};
        }
        initialize(e = {}) {
          const { options: t = {} } = e,
            a = this.normalizeInstanceIdentifier(e.instanceIdentifier);
          if (this.isInitialized(a))
            throw Error(`${this.name}(${a}) has already been initialized`);
          if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
          const s = this.getOrInitializeService({
            instanceIdentifier: a,
            options: t,
          });
          for (const [e, t] of this.instancesDeferred.entries()) {
            a === this.normalizeInstanceIdentifier(e) && t.resolve(s);
          }
          return s;
        }
        onInit(e, t) {
          var a;
          const s = this.normalizeInstanceIdentifier(t),
            n =
              null !== (a = this.onInitCallbacks.get(s)) && void 0 !== a
                ? a
                : new Set();
          n.add(e), this.onInitCallbacks.set(s, n);
          const i = this.instances.get(s);
          return (
            i && e(i, s),
            () => {
              n.delete(e);
            }
          );
        }
        invokeOnInitCallbacks(e, t) {
          const a = this.onInitCallbacks.get(t);
          if (a)
            for (const s of a)
              try {
                s(e, t);
              } catch (e) {}
        }
        getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
          let a = this.instances.get(e);
          if (
            !a &&
            this.component &&
            ((a = this.component.instanceFactory(this.container, {
              instanceIdentifier: ((s = e), s === y ? void 0 : s),
              options: t,
            })),
            this.instances.set(e, a),
            this.instancesOptions.set(e, t),
            this.invokeOnInitCallbacks(a, e),
            this.component.onInstanceCreated)
          )
            try {
              this.component.onInstanceCreated(this.container, e, a);
            } catch (e) {}
          var s;
          return a || null;
        }
        normalizeInstanceIdentifier(e = "[DEFAULT]") {
          return this.component
            ? this.component.multipleInstances
              ? e
              : y
            : e;
        }
        shouldAutoInitialize() {
          return (
            !!this.component && "EXPLICIT" !== this.component.instantiationMode
          );
        }
      }
      class C {
        constructor(e) {
          (this.name = e), (this.providers = new Map());
        }
        addComponent(e) {
          const t = this.getProvider(e.name);
          if (t.isComponentSet())
            throw new Error(
              `Component ${e.name} has already been registered with ${this.name}`
            );
          t.setComponent(e);
        }
        addOrOverwriteComponent(e) {
          this.getProvider(e.name).isComponentSet() &&
            this.providers.delete(e.name),
            this.addComponent(e);
        }
        getProvider(e) {
          if (this.providers.has(e)) return this.providers.get(e);
          const t = new w(e, this);
          return this.providers.set(e, t), t;
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      }
      const E = [];
      var S;
      !(function (e) {
        (e[(e.DEBUG = 0)] = "DEBUG"),
          (e[(e.VERBOSE = 1)] = "VERBOSE"),
          (e[(e.INFO = 2)] = "INFO"),
          (e[(e.WARN = 3)] = "WARN"),
          (e[(e.ERROR = 4)] = "ERROR"),
          (e[(e.SILENT = 5)] = "SILENT");
      })(S || (S = {}));
      const M = {
          debug: S.DEBUG,
          verbose: S.VERBOSE,
          info: S.INFO,
          warn: S.WARN,
          error: S.ERROR,
          silent: S.SILENT,
        },
        k = S.INFO,
        T = {
          [S.DEBUG]: "log",
          [S.VERBOSE]: "log",
          [S.INFO]: "info",
          [S.WARN]: "warn",
          [S.ERROR]: "error",
        },
        N = (e, t, ...a) => {
          if (t < e.logLevel) return;
          const s = new Date().toISOString(),
            n = T[t];
          if (!n)
            throw new Error(
              `Attempted to log a message with an invalid logType (value: ${t})`
            );
          console[n](`[${s}]  ${e.name}:`, ...a);
        };
      let A, D;
      const I = new WeakMap(),
        P = new WeakMap(),
        U = new WeakMap(),
        R = new WeakMap(),
        F = new WeakMap();
      let x = {
        get(e, t, a) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return P.get(e);
            if ("objectStoreNames" === t) return e.objectStoreNames || U.get(e);
            if ("store" === t)
              return a.objectStoreNames[1]
                ? void 0
                : a.objectStore(a.objectStoreNames[0]);
          }
          return O(e[t]);
        },
        set: (e, t, a) => ((e[t] = a), !0),
        has: (e, t) =>
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e,
      };
      function B(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? (
              D ||
              (D = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(e)
            ? function (...t) {
                return e.apply(q(this), t), O(I.get(this));
              }
            : function (...t) {
                return O(e.apply(q(this), t));
              }
          : function (t, ...a) {
              const s = e.call(q(this), t, ...a);
              return U.set(s, t.sort ? t.sort() : [t]), O(s);
            };
      }
      function L(e) {
        return "function" == typeof e
          ? B(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (P.has(e)) return;
                const t = new Promise((t, a) => {
                  const s = () => {
                      e.removeEventListener("complete", n),
                        e.removeEventListener("error", i),
                        e.removeEventListener("abort", i);
                    },
                    n = () => {
                      t(), s();
                    },
                    i = () => {
                      a(
                        e.error || new DOMException("AbortError", "AbortError")
                      ),
                        s();
                    };
                  e.addEventListener("complete", n),
                    e.addEventListener("error", i),
                    e.addEventListener("abort", i);
                });
                P.set(e, t);
              })(e),
            (t = e),
            (
              A ||
              (A = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some((e) => t instanceof e)
              ? new Proxy(e, x)
              : e);
        var t;
      }
      function O(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            const t = new Promise((t, a) => {
              const s = () => {
                  e.removeEventListener("success", n),
                    e.removeEventListener("error", i);
                },
                n = () => {
                  t(O(e.result)), s();
                },
                i = () => {
                  a(e.error), s();
                };
              e.addEventListener("success", n), e.addEventListener("error", i);
            });
            return (
              t
                .then((t) => {
                  t instanceof IDBCursor && I.set(t, e);
                })
                .catch(() => {}),
              F.set(t, e),
              t
            );
          })(e);
        if (R.has(e)) return R.get(e);
        const t = L(e);
        return t !== e && (R.set(e, t), F.set(t, e)), t;
      }
      const q = (e) => F.get(e);
      function j(
        e,
        t,
        { blocked: a, upgrade: s, blocking: n, terminated: i } = {}
      ) {
        const o = indexedDB.open(e, t),
          r = O(o);
        return (
          s &&
            o.addEventListener("upgradeneeded", (e) => {
              s(O(o.result), e.oldVersion, e.newVersion, O(o.transaction));
            }),
          a && o.addEventListener("blocked", () => a()),
          r
            .then((e) => {
              i && e.addEventListener("close", () => i()),
                n && e.addEventListener("versionchange", () => n());
            })
            .catch(() => {}),
          r
        );
      }
      function z(e, { blocked: t } = {}) {
        const a = indexedDB.deleteDatabase(e);
        return (
          t && a.addEventListener("blocked", () => t()), O(a).then(() => {})
        );
      }
      const H = ["get", "getKey", "getAll", "getAllKeys", "count"],
        V = ["put", "add", "delete", "clear"],
        W = new Map();
      function K(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
          return;
        if (W.get(t)) return W.get(t);
        const a = t.replace(/FromIndex$/, ""),
          s = t !== a,
          n = V.includes(a);
        if (
          !(a in (s ? IDBIndex : IDBObjectStore).prototype) ||
          (!n && !H.includes(a))
        )
          return;
        const i = async function (e, ...t) {
          const i = this.transaction(e, n ? "readwrite" : "readonly");
          let o = i.store;
          return (
            s && (o = o.index(t.shift())),
            (await Promise.all([o[a](...t), n && i.done]))[0]
          );
        };
        return W.set(t, i), i;
      }
      x = ((e) => ({
        ...e,
        get: (t, a, s) => K(t, a) || e.get(t, a, s),
        has: (t, a) => !!K(t, a) || e.has(t, a),
      }))(x);
      class G {
        constructor(e) {
          this.container = e;
        }
        getPlatformInfoString() {
          return this.container
            .getProviders()
            .map((e) => {
              if (
                (function (e) {
                  const t = e.getComponent();
                  return "VERSION" === (null == t ? void 0 : t.type);
                })(e)
              ) {
                const t = e.getImmediate();
                return `${t.library}/${t.version}`;
              }
              return null;
            })
            .filter((e) => e)
            .join(" ");
        }
      }
      const $ = "@firebase/app",
        Q = "0.7.32",
        Y = new (class {
          constructor(e) {
            (this.name = e),
              (this._logLevel = k),
              (this._logHandler = N),
              (this._userLogHandler = null),
              E.push(this);
          }
          get logLevel() {
            return this._logLevel;
          }
          set logLevel(e) {
            if (!(e in S))
              throw new TypeError(
                `Invalid value "${e}" assigned to \`logLevel\``
              );
            this._logLevel = e;
          }
          setLogLevel(e) {
            this._logLevel = "string" == typeof e ? M[e] : e;
          }
          get logHandler() {
            return this._logHandler;
          }
          set logHandler(e) {
            if ("function" != typeof e)
              throw new TypeError(
                "Value assigned to `logHandler` must be a function"
              );
            this._logHandler = e;
          }
          get userLogHandler() {
            return this._userLogHandler;
          }
          set userLogHandler(e) {
            this._userLogHandler = e;
          }
          debug(...e) {
            this._userLogHandler && this._userLogHandler(this, S.DEBUG, ...e),
              this._logHandler(this, S.DEBUG, ...e);
          }
          log(...e) {
            this._userLogHandler && this._userLogHandler(this, S.VERBOSE, ...e),
              this._logHandler(this, S.VERBOSE, ...e);
          }
          info(...e) {
            this._userLogHandler && this._userLogHandler(this, S.INFO, ...e),
              this._logHandler(this, S.INFO, ...e);
          }
          warn(...e) {
            this._userLogHandler && this._userLogHandler(this, S.WARN, ...e),
              this._logHandler(this, S.WARN, ...e);
          }
          error(...e) {
            this._userLogHandler && this._userLogHandler(this, S.ERROR, ...e),
              this._logHandler(this, S.ERROR, ...e);
          }
        })("@firebase/app"),
        J = "[DEFAULT]",
        X = {
          [$]: "fire-core",
          "@firebase/app-compat": "fire-core-compat",
          "@firebase/analytics": "fire-analytics",
          "@firebase/analytics-compat": "fire-analytics-compat",
          "@firebase/app-check": "fire-app-check",
          "@firebase/app-check-compat": "fire-app-check-compat",
          "@firebase/auth": "fire-auth",
          "@firebase/auth-compat": "fire-auth-compat",
          "@firebase/database": "fire-rtdb",
          "@firebase/database-compat": "fire-rtdb-compat",
          "@firebase/functions": "fire-fn",
          "@firebase/functions-compat": "fire-fn-compat",
          "@firebase/installations": "fire-iid",
          "@firebase/installations-compat": "fire-iid-compat",
          "@firebase/messaging": "fire-fcm",
          "@firebase/messaging-compat": "fire-fcm-compat",
          "@firebase/performance": "fire-perf",
          "@firebase/performance-compat": "fire-perf-compat",
          "@firebase/remote-config": "fire-rc",
          "@firebase/remote-config-compat": "fire-rc-compat",
          "@firebase/storage": "fire-gcs",
          "@firebase/storage-compat": "fire-gcs-compat",
          "@firebase/firestore": "fire-fst",
          "@firebase/firestore-compat": "fire-fst-compat",
          "fire-js": "fire-js",
          firebase: "fire-js-all",
        },
        Z = new Map(),
        ee = new Map();
      function te(e, t) {
        try {
          e.container.addComponent(t);
        } catch (a) {
          Y.debug(
            `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
            a
          );
        }
      }
      function ae(e) {
        const t = e.name;
        if (ee.has(t))
          return (
            Y.debug(`There were multiple attempts to register component ${t}.`),
            !1
          );
        ee.set(t, e);
        for (const t of Z.values()) te(t, e);
        return !0;
      }
      function se(e, t) {
        const a = e.container
          .getProvider("heartbeat")
          .getImmediate({ optional: !0 });
        return a && a.triggerHeartbeat(), e.container.getProvider(t);
      }
      const ne = new m("app", "Firebase", {
        "no-app":
          "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$appName}",
        "duplicate-app":
          "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "invalid-app-argument":
          "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument":
          "First argument to `onLog` must be null or a function.",
        "idb-open":
          "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get":
          "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set":
          "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete":
          "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
      });
      class ie {
        constructor(e, t, a) {
          (this._isDeleted = !1),
            (this._options = Object.assign({}, e)),
            (this._config = Object.assign({}, t)),
            (this._name = t.name),
            (this._automaticDataCollectionEnabled =
              t.automaticDataCollectionEnabled),
            (this._container = a),
            this.container.addComponent(new v("app", () => this, "PUBLIC"));
        }
        get automaticDataCollectionEnabled() {
          return this.checkDestroyed(), this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(e) {
          this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
        }
        get name() {
          return this.checkDestroyed(), this._name;
        }
        get options() {
          return this.checkDestroyed(), this._options;
        }
        get config() {
          return this.checkDestroyed(), this._config;
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(e) {
          this._isDeleted = e;
        }
        checkDestroyed() {
          if (this.isDeleted)
            throw ne.create("app-deleted", { appName: this._name });
        }
      }
      function oe(e, t = {}) {
        if ("object" != typeof t) {
          t = { name: t };
        }
        const a = Object.assign(
            { name: J, automaticDataCollectionEnabled: !1 },
            t
          ),
          s = a.name;
        if ("string" != typeof s || !s)
          throw ne.create("bad-app-name", { appName: String(s) });
        const n = Z.get(s);
        if (n) {
          if (_(e, n.options) && _(a, n.config)) return n;
          throw ne.create("duplicate-app", { appName: s });
        }
        const i = new C(s);
        for (const e of ee.values()) i.addComponent(e);
        const o = new ie(e, a, i);
        return Z.set(s, o), o;
      }
      function re(e, t, a) {
        var s;
        let n = null !== (s = X[e]) && void 0 !== s ? s : e;
        a && (n += `-${a}`);
        const i = n.match(/\s|\//),
          o = t.match(/\s|\//);
        if (i || o) {
          const e = [`Unable to register library "${n}" with version "${t}":`];
          return (
            i &&
              e.push(
                `library name "${n}" contains illegal characters (whitespace or "/")`
              ),
            i && o && e.push("and"),
            o &&
              e.push(
                `version name "${t}" contains illegal characters (whitespace or "/")`
              ),
            void Y.warn(e.join(" "))
          );
        }
        ae(
          new v(`${n}-version`, () => ({ library: n, version: t }), "VERSION")
        );
      }
      const le = "firebase-heartbeat-store";
      let ce = null;
      function de() {
        return (
          ce ||
            (ce = j("firebase-heartbeat-database", 1, {
              upgrade: (e, t) => {
                if (0 === t) e.createObjectStore(le);
              },
            }).catch((e) => {
              throw ne.create("idb-open", { originalErrorMessage: e.message });
            })),
          ce
        );
      }
      async function he(e, t) {
        var a;
        try {
          const a = (await de()).transaction(le, "readwrite"),
            s = a.objectStore(le);
          return await s.put(t, pe(e)), a.done;
        } catch (e) {
          if (e instanceof u) Y.warn(e.message);
          else {
            const t = ne.create("idb-set", {
              originalErrorMessage:
                null === (a = e) || void 0 === a ? void 0 : a.message,
            });
            Y.warn(t.message);
          }
        }
      }
      function pe(e) {
        return `${e.name}!${e.options.appId}`;
      }
      class ue {
        constructor(e) {
          (this.container = e), (this._heartbeatsCache = null);
          const t = this.container.getProvider("app").getImmediate();
          (this._storage = new ge(t)),
            (this._heartbeatsCachePromise = this._storage
              .read()
              .then((e) => ((this._heartbeatsCache = e), e)));
        }
        async triggerHeartbeat() {
          const e = this.container
              .getProvider("platform-logger")
              .getImmediate()
              .getPlatformInfoString(),
            t = me();
          if (
            (null === this._heartbeatsCache &&
              (this._heartbeatsCache = await this._heartbeatsCachePromise),
            this._heartbeatsCache.lastSentHeartbeatDate !== t &&
              !this._heartbeatsCache.heartbeats.some((e) => e.date === t))
          )
            return (
              this._heartbeatsCache.heartbeats.push({ date: t, agent: e }),
              (this._heartbeatsCache.heartbeats =
                this._heartbeatsCache.heartbeats.filter((e) => {
                  const t = new Date(e.date).valueOf();
                  return Date.now() - t <= 2592e6;
                })),
              this._storage.overwrite(this._heartbeatsCache)
            );
        }
        async getHeartbeatsHeader() {
          if (
            (null === this._heartbeatsCache &&
              (await this._heartbeatsCachePromise),
            null === this._heartbeatsCache ||
              0 === this._heartbeatsCache.heartbeats.length)
          )
            return "";
          const e = me(),
            { heartbeatsToSend: t, unsentEntries: a } = (function (
              e,
              t = 1024
            ) {
              const a = [];
              let s = e.slice();
              for (const n of e) {
                const e = a.find((e) => e.agent === n.agent);
                if (e) {
                  if ((e.dates.push(n.date), _e(a) > t)) {
                    e.dates.pop();
                    break;
                  }
                } else if (
                  (a.push({ agent: n.agent, dates: [n.date] }), _e(a) > t)
                ) {
                  a.pop();
                  break;
                }
                s = s.slice(1);
              }
              return { heartbeatsToSend: a, unsentEntries: s };
            })(this._heartbeatsCache.heartbeats),
            s = c(JSON.stringify({ version: 2, heartbeats: t }));
          return (
            (this._heartbeatsCache.lastSentHeartbeatDate = e),
            a.length > 0
              ? ((this._heartbeatsCache.heartbeats = a),
                await this._storage.overwrite(this._heartbeatsCache))
              : ((this._heartbeatsCache.heartbeats = []),
                this._storage.overwrite(this._heartbeatsCache)),
            s
          );
        }
      }
      function me() {
        return new Date().toISOString().substring(0, 10);
      }
      class ge {
        constructor(e) {
          (this.app = e),
            (this._canUseIndexedDBPromise =
              this.runIndexedDBEnvironmentCheck());
        }
        async runIndexedDBEnvironmentCheck() {
          return (
            !!h() &&
            p()
              .then(() => !0)
              .catch(() => !1)
          );
        }
        async read() {
          if (await this._canUseIndexedDBPromise) {
            return (
              (await (async function (e) {
                var t;
                try {
                  return (await de())
                    .transaction(le)
                    .objectStore(le)
                    .get(pe(e));
                } catch (e) {
                  if (e instanceof u) Y.warn(e.message);
                  else {
                    const a = ne.create("idb-get", {
                      originalErrorMessage:
                        null === (t = e) || void 0 === t ? void 0 : t.message,
                    });
                    Y.warn(a.message);
                  }
                }
              })(this.app)) || { heartbeats: [] }
            );
          }
          return { heartbeats: [] };
        }
        async overwrite(e) {
          var t;
          if (await this._canUseIndexedDBPromise) {
            const a = await this.read();
            return he(this.app, {
              lastSentHeartbeatDate:
                null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                  ? t
                  : a.lastSentHeartbeatDate,
              heartbeats: e.heartbeats,
            });
          }
        }
        async add(e) {
          var t;
          if (await this._canUseIndexedDBPromise) {
            const a = await this.read();
            return he(this.app, {
              lastSentHeartbeatDate:
                null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                  ? t
                  : a.lastSentHeartbeatDate,
              heartbeats: [...a.heartbeats, ...e.heartbeats],
            });
          }
        }
      }
      function _e(e) {
        return c(JSON.stringify({ version: 2, heartbeats: e })).length;
      }
      var fe;
      (fe = ""),
        ae(new v("platform-logger", (e) => new G(e), "PRIVATE")),
        ae(new v("heartbeat", (e) => new ue(e), "PRIVATE")),
        re($, Q, fe),
        re($, Q, "esm2017"),
        re("fire-js", "");
      re("firebase", "9.9.4", "app");
      const be = "@firebase/installations",
        ve = "0.5.12",
        ye = 1e4,
        we = "w:0.5.12",
        Ce = "FIS_v2",
        Ee = 36e5,
        Se = new m("installations", "Installations", {
          "missing-app-config-values":
            'Missing App configuration value: "{$valueName}"',
          "not-registered": "Firebase Installation is not registered.",
          "installation-not-found": "Firebase Installation not found.",
          "request-failed":
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
          "app-offline": "Could not process request. Application offline.",
          "delete-pending-registration":
            "Can't delete installation while there is a pending registration request.",
        });
      function Me(e) {
        return e instanceof u && e.code.includes("request-failed");
      }
      function ke({ projectId: e }) {
        return `https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`;
      }
      function Te(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: ((t = e.expiresIn), Number(t.replace("s", "000"))),
          creationTime: Date.now(),
        };
        var t;
      }
      async function Ne(e, t) {
        const a = (await t.json()).error;
        return Se.create("request-failed", {
          requestName: e,
          serverCode: a.code,
          serverMessage: a.message,
          serverStatus: a.status,
        });
      }
      function Ae({ apiKey: e }) {
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": e,
        });
      }
      function De(e, { refreshToken: t }) {
        const a = Ae(e);
        return (
          a.append(
            "Authorization",
            (function (e) {
              return `FIS_v2 ${e}`;
            })(t)
          ),
          a
        );
      }
      async function Ie(e) {
        const t = await e();
        return t.status >= 500 && t.status < 600 ? e() : t;
      }
      function Pe(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      const Ue = /^[cdef][\w-]{21}$/;
      function Re() {
        try {
          const e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e),
            (e[0] = 112 + (e[0] % 16));
          const t = (function (e) {
            return ((t = e),
            btoa(String.fromCharCode(...t))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")).substr(0, 22);
            var t;
          })(e);
          return Ue.test(t) ? t : "";
        } catch (e) {
          return "";
        }
      }
      function Fe(e) {
        return `${e.appName}!${e.appId}`;
      }
      const xe = new Map();
      function Be(e, t) {
        const a = Fe(e);
        Le(a, t),
          (function (e, t) {
            const a = qe();
            a && a.postMessage({ key: e, fid: t });
            je();
          })(a, t);
      }
      function Le(e, t) {
        const a = xe.get(e);
        if (a) for (const e of a) e(t);
      }
      let Oe = null;
      function qe() {
        return (
          !Oe &&
            "BroadcastChannel" in self &&
            ((Oe = new BroadcastChannel("[Firebase] FID Change")),
            (Oe.onmessage = (e) => {
              Le(e.data.key, e.data.fid);
            })),
          Oe
        );
      }
      function je() {
        0 === xe.size && Oe && (Oe.close(), (Oe = null));
      }
      const ze = "firebase-installations-store";
      let He = null;
      function Ve() {
        return (
          He ||
            (He = j("firebase-installations-database", 1, {
              upgrade: (e, t) => {
                if (0 === t) e.createObjectStore(ze);
              },
            })),
          He
        );
      }
      async function We(e, t) {
        const a = Fe(e),
          s = (await Ve()).transaction(ze, "readwrite"),
          n = s.objectStore(ze),
          i = await n.get(a);
        return (
          await n.put(t, a),
          await s.done,
          (i && i.fid === t.fid) || Be(e, t.fid),
          t
        );
      }
      async function Ke(e) {
        const t = Fe(e),
          a = (await Ve()).transaction(ze, "readwrite");
        await a.objectStore(ze).delete(t), await a.done;
      }
      async function Ge(e, t) {
        const a = Fe(e),
          s = (await Ve()).transaction(ze, "readwrite"),
          n = s.objectStore(ze),
          i = await n.get(a),
          o = t(i);
        return (
          void 0 === o ? await n.delete(a) : await n.put(o, a),
          await s.done,
          !o || (i && i.fid === o.fid) || Be(e, o.fid),
          o
        );
      }
      async function $e(e) {
        let t;
        const a = await Ge(e.appConfig, (a) => {
          const s = (function (e) {
              return Je(e || { fid: Re(), registrationStatus: 0 });
            })(a),
            n = (function (e, t) {
              if (0 === t.registrationStatus) {
                if (!navigator.onLine) {
                  return {
                    installationEntry: t,
                    registrationPromise: Promise.reject(
                      Se.create("app-offline")
                    ),
                  };
                }
                const a = {
                    fid: t.fid,
                    registrationStatus: 1,
                    registrationTime: Date.now(),
                  },
                  s = (async function (e, t) {
                    try {
                      const a = await (async function (
                        { appConfig: e, heartbeatServiceProvider: t },
                        { fid: a }
                      ) {
                        const s = ke(e),
                          n = Ae(e),
                          i = t.getImmediate({ optional: !0 });
                        if (i) {
                          const e = await i.getHeartbeatsHeader();
                          e && n.append("x-firebase-client", e);
                        }
                        const o = {
                            fid: a,
                            authVersion: Ce,
                            appId: e.appId,
                            sdkVersion: we,
                          },
                          r = {
                            method: "POST",
                            headers: n,
                            body: JSON.stringify(o),
                          },
                          l = await Ie(() => fetch(s, r));
                        if (l.ok) {
                          const e = await l.json();
                          return {
                            fid: e.fid || a,
                            registrationStatus: 2,
                            refreshToken: e.refreshToken,
                            authToken: Te(e.authToken),
                          };
                        }
                        throw await Ne("Create Installation", l);
                      })(e, t);
                      return We(e.appConfig, a);
                    } catch (a) {
                      throw (
                        (Me(a) && 409 === a.customData.serverCode
                          ? await Ke(e.appConfig)
                          : await We(e.appConfig, {
                              fid: t.fid,
                              registrationStatus: 0,
                            }),
                        a)
                      );
                    }
                  })(e, a);
                return { installationEntry: a, registrationPromise: s };
              }
              return 1 === t.registrationStatus
                ? { installationEntry: t, registrationPromise: Qe(e) }
                : { installationEntry: t };
            })(e, s);
          return (t = n.registrationPromise), n.installationEntry;
        });
        return "" === a.fid
          ? { installationEntry: await t }
          : { installationEntry: a, registrationPromise: t };
      }
      async function Qe(e) {
        let t = await Ye(e.appConfig);
        for (; 1 === t.registrationStatus; )
          await Pe(100), (t = await Ye(e.appConfig));
        if (0 === t.registrationStatus) {
          const { installationEntry: t, registrationPromise: a } = await $e(e);
          return a || t;
        }
        return t;
      }
      function Ye(e) {
        return Ge(e, (e) => {
          if (!e) throw Se.create("installation-not-found");
          return Je(e);
        });
      }
      function Je(e) {
        return 1 === (t = e).registrationStatus &&
          t.registrationTime + ye < Date.now()
          ? { fid: e.fid, registrationStatus: 0 }
          : e;
        var t;
      }
      async function Xe({ appConfig: e, heartbeatServiceProvider: t }, a) {
        const s = (function (e, { fid: t }) {
            return `${ke(e)}/${t}/authTokens:generate`;
          })(e, a),
          n = De(e, a),
          i = t.getImmediate({ optional: !0 });
        if (i) {
          const e = await i.getHeartbeatsHeader();
          e && n.append("x-firebase-client", e);
        }
        const o = { installation: { sdkVersion: we, appId: e.appId } },
          r = { method: "POST", headers: n, body: JSON.stringify(o) },
          l = await Ie(() => fetch(s, r));
        if (l.ok) {
          return Te(await l.json());
        }
        throw await Ne("Generate Auth Token", l);
      }
      async function Ze(e, t = !1) {
        let a;
        const s = await Ge(e.appConfig, (s) => {
          if (!tt(s)) throw Se.create("not-registered");
          const n = s.authToken;
          if (
            !t &&
            (function (e) {
              return (
                2 === e.requestStatus &&
                !(function (e) {
                  const t = Date.now();
                  return (
                    t < e.creationTime || e.creationTime + e.expiresIn < t + Ee
                  );
                })(e)
              );
            })(n)
          )
            return s;
          if (1 === n.requestStatus)
            return (
              (a = (async function (e, t) {
                let a = await et(e.appConfig);
                for (; 1 === a.authToken.requestStatus; )
                  await Pe(100), (a = await et(e.appConfig));
                const s = a.authToken;
                return 0 === s.requestStatus ? Ze(e, t) : s;
              })(e, t)),
              s
            );
          {
            if (!navigator.onLine) throw Se.create("app-offline");
            const t = (function (e) {
              const t = { requestStatus: 1, requestTime: Date.now() };
              return Object.assign(Object.assign({}, e), { authToken: t });
            })(s);
            return (
              (a = (async function (e, t) {
                try {
                  const a = await Xe(e, t),
                    s = Object.assign(Object.assign({}, t), { authToken: a });
                  return await We(e.appConfig, s), a;
                } catch (a) {
                  if (
                    !Me(a) ||
                    (401 !== a.customData.serverCode &&
                      404 !== a.customData.serverCode)
                  ) {
                    const a = Object.assign(Object.assign({}, t), {
                      authToken: { requestStatus: 0 },
                    });
                    await We(e.appConfig, a);
                  } else await Ke(e.appConfig);
                  throw a;
                }
              })(e, t)),
              t
            );
          }
        });
        return a ? await a : s.authToken;
      }
      function et(e) {
        return Ge(e, (e) => {
          if (!tt(e)) throw Se.create("not-registered");
          const t = e.authToken;
          return 1 === (a = t).requestStatus && a.requestTime + ye < Date.now()
            ? Object.assign(Object.assign({}, e), {
                authToken: { requestStatus: 0 },
              })
            : e;
          var a;
        });
      }
      function tt(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      async function at(e, t = !1) {
        const a = e;
        await (async function (e) {
          const { registrationPromise: t } = await $e(e);
          t && (await t);
        })(a);
        return (await Ze(a, t)).token;
      }
      function st(e) {
        return Se.create("missing-app-config-values", { valueName: e });
      }
      const nt = "installations",
        it = (e) => {
          const t = se(e.getProvider("app").getImmediate(), nt).getImmediate();
          return {
            getId: () =>
              (async function (e) {
                const t = e,
                  { installationEntry: a, registrationPromise: s } = await $e(
                    t
                  );
                return (
                  s ? s.catch(console.error) : Ze(t).catch(console.error), a.fid
                );
              })(t),
            getToken: (e) => at(t, e),
          };
        };
      ae(
        new v(
          nt,
          (e) => {
            const t = e.getProvider("app").getImmediate(),
              a = (function (e) {
                if (!e || !e.options) throw st("App Configuration");
                if (!e.name) throw st("App Name");
                const t = ["projectId", "apiKey", "appId"];
                for (const a of t) if (!e.options[a]) throw st(a);
                return {
                  appName: e.name,
                  projectId: e.options.projectId,
                  apiKey: e.options.apiKey,
                  appId: e.options.appId,
                };
              })(t);
            return {
              app: t,
              appConfig: a,
              heartbeatServiceProvider: se(t, "heartbeat"),
              _delete: () => Promise.resolve(),
            };
          },
          "PUBLIC"
        )
      ),
        ae(new v("installations-internal", it, "PRIVATE")),
        re(be, ve),
        re(be, ve, "esm2017");
      const ot =
          "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
        rt = "google.c.a.c_id";
      var lt, ct;
      function dt(e) {
        const t = new Uint8Array(e);
        return btoa(String.fromCharCode(...t))
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
      }
      function ht(e) {
        const t = (e + "=".repeat((4 - (e.length % 4)) % 4))
            .replace(/\-/g, "+")
            .replace(/_/g, "/"),
          a = atob(t),
          s = new Uint8Array(a.length);
        for (let e = 0; e < a.length; ++e) s[e] = a.charCodeAt(e);
        return s;
      }
      !(function (e) {
        (e[(e.DATA_MESSAGE = 1)] = "DATA_MESSAGE"),
          (e[(e.DISPLAY_NOTIFICATION = 3)] = "DISPLAY_NOTIFICATION");
      })(lt || (lt = {})),
        (function (e) {
          (e.PUSH_RECEIVED = "push-received"),
            (e.NOTIFICATION_CLICKED = "notification-clicked");
        })(ct || (ct = {}));
      const pt = "fcm_token_details_db",
        ut = "fcm_token_object_Store";
      const mt = "firebase-messaging-store";
      let gt = null;
      function _t() {
        return (
          gt ||
            (gt = j("firebase-messaging-database", 1, {
              upgrade: (e, t) => {
                if (0 === t) e.createObjectStore(mt);
              },
            })),
          gt
        );
      }
      async function ft(e) {
        const t = vt(e),
          a = await _t(),
          s = await a.transaction(mt).objectStore(mt).get(t);
        if (s) return s;
        {
          const t = await (async function (e) {
            if ("databases" in indexedDB) {
              const e = (await indexedDB.databases()).map((e) => e.name);
              if (!e.includes(pt)) return null;
            }
            let t = null;
            return (
              (
                await j(pt, 5, {
                  upgrade: async (a, s, n, i) => {
                    var o;
                    if (s < 2) return;
                    if (!a.objectStoreNames.contains(ut)) return;
                    const r = i.objectStore(ut),
                      l = await r.index("fcmSenderId").get(e);
                    if ((await r.clear(), l))
                      if (2 === s) {
                        const e = l;
                        if (!e.auth || !e.p256dh || !e.endpoint) return;
                        t = {
                          token: e.fcmToken,
                          createTime:
                            null !== (o = e.createTime) && void 0 !== o
                              ? o
                              : Date.now(),
                          subscriptionOptions: {
                            auth: e.auth,
                            p256dh: e.p256dh,
                            endpoint: e.endpoint,
                            swScope: e.swScope,
                            vapidKey:
                              "string" == typeof e.vapidKey
                                ? e.vapidKey
                                : dt(e.vapidKey),
                          },
                        };
                      } else if (3 === s) {
                        const e = l;
                        t = {
                          token: e.fcmToken,
                          createTime: e.createTime,
                          subscriptionOptions: {
                            auth: dt(e.auth),
                            p256dh: dt(e.p256dh),
                            endpoint: e.endpoint,
                            swScope: e.swScope,
                            vapidKey: dt(e.vapidKey),
                          },
                        };
                      } else if (4 === s) {
                        const e = l;
                        t = {
                          token: e.fcmToken,
                          createTime: e.createTime,
                          subscriptionOptions: {
                            auth: dt(e.auth),
                            p256dh: dt(e.p256dh),
                            endpoint: e.endpoint,
                            swScope: e.swScope,
                            vapidKey: dt(e.vapidKey),
                          },
                        };
                      }
                  },
                })
              ).close(),
              await z(pt),
              await z("fcm_vapid_details_db"),
              await z("undefined"),
              (function (e) {
                if (!e || !e.subscriptionOptions) return !1;
                const { subscriptionOptions: t } = e;
                return (
                  "number" == typeof e.createTime &&
                  e.createTime > 0 &&
                  "string" == typeof e.token &&
                  e.token.length > 0 &&
                  "string" == typeof t.auth &&
                  t.auth.length > 0 &&
                  "string" == typeof t.p256dh &&
                  t.p256dh.length > 0 &&
                  "string" == typeof t.endpoint &&
                  t.endpoint.length > 0 &&
                  "string" == typeof t.swScope &&
                  t.swScope.length > 0 &&
                  "string" == typeof t.vapidKey &&
                  t.vapidKey.length > 0
                );
              })(t)
                ? t
                : null
            );
          })(e.appConfig.senderId);
          if (t) return await bt(e, t), t;
        }
      }
      async function bt(e, t) {
        const a = vt(e),
          s = (await _t()).transaction(mt, "readwrite");
        return await s.objectStore(mt).put(t, a), await s.done, t;
      }
      function vt({ appConfig: e }) {
        return e.appId;
      }
      const yt = new m("messaging", "Messaging", {
        "missing-app-config-values":
          'Missing App configuration value: "{$valueName}"',
        "only-available-in-window":
          "This method is available in a Window context.",
        "only-available-in-sw":
          "This method is available in a service worker context.",
        "permission-default":
          "The notification permission was not granted and dismissed instead.",
        "permission-blocked":
          "The notification permission was not granted and blocked instead.",
        "unsupported-browser":
          "This browser doesn't support the API's required to use the Firebase SDK.",
        "indexed-db-unsupported":
          "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
        "failed-service-worker-registration":
          "We are unable to register the default service worker. {$browserErrorMessage}",
        "token-subscribe-failed":
          "A problem occurred while subscribing the user to FCM: {$errorInfo}",
        "token-subscribe-no-token":
          "FCM returned no token when subscribing the user to push.",
        "token-unsubscribe-failed":
          "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
        "token-update-failed":
          "A problem occurred while updating the user from FCM: {$errorInfo}",
        "token-update-no-token":
          "FCM returned no token when updating the user to push.",
        "use-sw-after-get-token":
          "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
        "invalid-sw-registration":
          "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
        "invalid-bg-handler":
          "The input to setBackgroundMessageHandler() must be a function.",
        "invalid-vapid-key": "The public VAPID key must be a string.",
        "use-vapid-key-after-get-token":
          "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",
      });
      async function wt(e, t) {
        var a;
        const s = { method: "DELETE", headers: await Et(e) };
        try {
          const a = await fetch(`${Ct(e.appConfig)}/${t}`, s),
            n = await a.json();
          if (n.error) {
            const e = n.error.message;
            throw yt.create("token-unsubscribe-failed", { errorInfo: e });
          }
        } catch (e) {
          throw yt.create("token-unsubscribe-failed", {
            errorInfo: null === (a = e) || void 0 === a ? void 0 : a.toString(),
          });
        }
      }
      function Ct({ projectId: e }) {
        return `https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`;
      }
      async function Et({ appConfig: e, installations: t }) {
        const a = await t.getToken();
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": e.apiKey,
          "x-goog-firebase-installations-auth": `FIS ${a}`,
        });
      }
      function St({ p256dh: e, auth: t, endpoint: a, vapidKey: s }) {
        const n = { web: { endpoint: a, auth: t, p256dh: e } };
        return s !== ot && (n.web.applicationPubKey = s), n;
      }
      async function Mt(e) {
        const t = await (async function (e, t) {
            const a = await e.pushManager.getSubscription();
            if (a) return a;
            return e.pushManager.subscribe({
              userVisibleOnly: !0,
              applicationServerKey: ht(t),
            });
          })(e.swRegistration, e.vapidKey),
          a = {
            vapidKey: e.vapidKey,
            swScope: e.swRegistration.scope,
            endpoint: t.endpoint,
            auth: dt(t.getKey("auth")),
            p256dh: dt(t.getKey("p256dh")),
          },
          s = await ft(e.firebaseDependencies);
        if (s) {
          if (
            (function (e, t) {
              const a = t.vapidKey === e.vapidKey,
                s = t.endpoint === e.endpoint,
                n = t.auth === e.auth,
                i = t.p256dh === e.p256dh;
              return a && s && n && i;
            })(s.subscriptionOptions, a)
          )
            return Date.now() >= s.createTime + 6048e5
              ? (async function (e, t) {
                  try {
                    const a = await (async function (e, t) {
                        var a;
                        const s = await Et(e),
                          n = St(t.subscriptionOptions),
                          i = {
                            method: "PATCH",
                            headers: s,
                            body: JSON.stringify(n),
                          };
                        let o;
                        try {
                          const a = await fetch(
                            `${Ct(e.appConfig)}/${t.token}`,
                            i
                          );
                          o = await a.json();
                        } catch (e) {
                          throw yt.create("token-update-failed", {
                            errorInfo:
                              null === (a = e) || void 0 === a
                                ? void 0
                                : a.toString(),
                          });
                        }
                        if (o.error) {
                          const e = o.error.message;
                          throw yt.create("token-update-failed", {
                            errorInfo: e,
                          });
                        }
                        if (!o.token) throw yt.create("token-update-no-token");
                        return o.token;
                      })(e.firebaseDependencies, t),
                      s = Object.assign(Object.assign({}, t), {
                        token: a,
                        createTime: Date.now(),
                      });
                    return await bt(e.firebaseDependencies, s), a;
                  } catch (t) {
                    throw (await kt(e), t);
                  }
                })(e, {
                  token: s.token,
                  createTime: Date.now(),
                  subscriptionOptions: a,
                })
              : s.token;
          try {
            await wt(e.firebaseDependencies, s.token);
          } catch (e) {
            console.warn(e);
          }
          return Tt(e.firebaseDependencies, a);
        }
        return Tt(e.firebaseDependencies, a);
      }
      async function kt(e) {
        const t = await ft(e.firebaseDependencies);
        t &&
          (await wt(e.firebaseDependencies, t.token),
          await (async function (e) {
            const t = vt(e),
              a = (await _t()).transaction(mt, "readwrite");
            await a.objectStore(mt).delete(t), await a.done;
          })(e.firebaseDependencies));
        const a = await e.swRegistration.pushManager.getSubscription();
        return !a || a.unsubscribe();
      }
      async function Tt(e, t) {
        const a = await (async function (e, t) {
            var a;
            const s = await Et(e),
              n = St(t),
              i = { method: "POST", headers: s, body: JSON.stringify(n) };
            let o;
            try {
              const t = await fetch(Ct(e.appConfig), i);
              o = await t.json();
            } catch (e) {
              throw yt.create("token-subscribe-failed", {
                errorInfo:
                  null === (a = e) || void 0 === a ? void 0 : a.toString(),
              });
            }
            if (o.error) {
              const e = o.error.message;
              throw yt.create("token-subscribe-failed", { errorInfo: e });
            }
            if (!o.token) throw yt.create("token-subscribe-no-token");
            return o.token;
          })(e, t),
          s = { token: a, createTime: Date.now(), subscriptionOptions: t };
        return await bt(e, s), s.token;
      }
      function Nt(e) {
        const t = {
          from: e.from,
          collapseKey: e.collapse_key,
          messageId: e.fcmMessageId,
        };
        return (
          (function (e, t) {
            if (!t.notification) return;
            e.notification = {};
            const a = t.notification.title;
            a && (e.notification.title = a);
            const s = t.notification.body;
            s && (e.notification.body = s);
            const n = t.notification.image;
            n && (e.notification.image = n);
          })(t, e),
          (function (e, t) {
            if (!t.data) return;
            e.data = t.data;
          })(t, e),
          (function (e, t) {
            var a, s, n, i, o;
            if (
              !t.fcmOptions &&
              !(null === (a = t.notification) || void 0 === a
                ? void 0
                : a.click_action)
            )
              return;
            e.fcmOptions = {};
            const r =
              null !==
                (n =
                  null === (s = t.fcmOptions) || void 0 === s
                    ? void 0
                    : s.link) && void 0 !== n
                ? n
                : null === (i = t.notification) || void 0 === i
                ? void 0
                : i.click_action;
            r && (e.fcmOptions.link = r);
            const l =
              null === (o = t.fcmOptions) || void 0 === o
                ? void 0
                : o.analytics_label;
            l && (e.fcmOptions.analyticsLabel = l);
          })(t, e),
          t
        );
      }
      function At(e, t) {
        const a = [];
        for (let s = 0; s < e.length; s++)
          a.push(e.charAt(s)), s < t.length && a.push(t.charAt(s));
        return a.join("");
      }
      function Dt(e) {
        return yt.create("missing-app-config-values", { valueName: e });
      }
      At("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"),
        At("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
      class It {
        constructor(e, t, a) {
          (this.deliveryMetricsExportedToBigQueryEnabled = !1),
            (this.onBackgroundMessageHandler = null),
            (this.onMessageHandler = null),
            (this.logEvents = []),
            (this.isLogServiceStarted = !1);
          const s = (function (e) {
            if (!e || !e.options) throw Dt("App Configuration Object");
            if (!e.name) throw Dt("App Name");
            const t = ["projectId", "apiKey", "appId", "messagingSenderId"],
              { options: a } = e;
            for (const e of t) if (!a[e]) throw Dt(e);
            return {
              appName: e.name,
              projectId: a.projectId,
              apiKey: a.apiKey,
              appId: a.appId,
              senderId: a.messagingSenderId,
            };
          })(e);
          this.firebaseDependencies = {
            app: e,
            appConfig: s,
            installations: t,
            analyticsProvider: a,
          };
        }
        _delete() {
          return Promise.resolve();
        }
      }
      async function Pt(e) {
        var t;
        try {
          (e.swRegistration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js",
            { scope: "/firebase-cloud-messaging-push-scope" }
          )),
            e.swRegistration.update().catch(() => {});
        } catch (e) {
          throw yt.create("failed-service-worker-registration", {
            browserErrorMessage:
              null === (t = e) || void 0 === t ? void 0 : t.message,
          });
        }
      }
      async function Ut(e, t) {
        if (!navigator) throw yt.create("only-available-in-window");
        if (
          ("default" === Notification.permission &&
            (await Notification.requestPermission()),
          "granted" !== Notification.permission)
        )
          throw yt.create("permission-blocked");
        return (
          await (async function (e, t) {
            t ? (e.vapidKey = t) : e.vapidKey || (e.vapidKey = ot);
          })(e, null == t ? void 0 : t.vapidKey),
          await (async function (e, t) {
            if (
              (t || e.swRegistration || (await Pt(e)), t || !e.swRegistration)
            ) {
              if (!(t instanceof ServiceWorkerRegistration))
                throw yt.create("invalid-sw-registration");
              e.swRegistration = t;
            }
          })(e, null == t ? void 0 : t.serviceWorkerRegistration),
          Mt(e)
        );
      }
      async function Rt(e, t, a) {
        const s = (function (e) {
          switch (e) {
            case ct.NOTIFICATION_CLICKED:
              return "notification_open";
            case ct.PUSH_RECEIVED:
              return "notification_foreground";
            default:
              throw new Error();
          }
        })(t);
        (await e.firebaseDependencies.analyticsProvider.get()).logEvent(s, {
          message_id: a["google.c.a.c_id"],
          message_name: a["google.c.a.c_l"],
          message_time: a["google.c.a.ts"],
          message_device_time: Math.floor(Date.now() / 1e3),
        });
      }
      async function Ft(e, t) {
        const a = t.data;
        if (!a.isFirebaseMessaging) return;
        e.onMessageHandler &&
          a.messageType === ct.PUSH_RECEIVED &&
          ("function" == typeof e.onMessageHandler
            ? e.onMessageHandler(Nt(a))
            : e.onMessageHandler.next(Nt(a)));
        const s = a.data;
        var n;
        "object" == typeof (n = s) &&
          n &&
          rt in n &&
          "1" === s["google.c.a.e"] &&
          (await Rt(e, a.messageType, s));
      }
      const xt = "@firebase/messaging",
        Bt = "0.9.16",
        Lt = (e) => {
          const t = e.getProvider("messaging").getImmediate();
          return { getToken: (e) => Ut(t, e) };
        };
      async function Ot() {
        try {
          await p();
        } catch (e) {
          return !1;
        }
        return (
          "undefined" != typeof window &&
          h() &&
          !("undefined" == typeof navigator || !navigator.cookieEnabled) &&
          "serviceWorker" in navigator &&
          "PushManager" in window &&
          "Notification" in window &&
          "fetch" in window &&
          ServiceWorkerRegistration.prototype.hasOwnProperty(
            "showNotification"
          ) &&
          PushSubscription.prototype.hasOwnProperty("getKey")
        );
      }
      function qt(
        e = (function (e = "[DEFAULT]") {
          const t = Z.get(e);
          if (!t) throw ne.create("no-app", { appName: e });
          return t;
        })()
      ) {
        return (
          Ot().then(
            (e) => {
              if (!e) throw yt.create("unsupported-browser");
            },
            (e) => {
              throw yt.create("indexed-db-unsupported");
            }
          ),
          se(b(e), "messaging").getImmediate()
        );
      }
      async function jt(e, t) {
        return Ut((e = b(e)), t);
      }
      function zt(e) {
        return (async function (e) {
          if (!navigator) throw yt.create("only-available-in-window");
          return e.swRegistration || (await Pt(e)), kt(e);
        })((e = b(e)));
      }
      function Ht(e, t) {
        return (function (e, t) {
          if (!navigator) throw yt.create("only-available-in-window");
          return (
            (e.onMessageHandler = t),
            () => {
              e.onMessageHandler = null;
            }
          );
        })((e = b(e)), t);
      }
      ae(
        new v(
          "messaging",
          (e) => {
            const t = new It(
              e.getProvider("app").getImmediate(),
              e.getProvider("installations-internal").getImmediate(),
              e.getProvider("analytics-internal")
            );
            return (
              navigator.serviceWorker.addEventListener("message", (e) =>
                Ft(t, e)
              ),
              t
            );
          },
          "PUBLIC"
        )
      ),
        ae(new v("messaging-internal", Lt, "PRIVATE")),
        re(xt, Bt),
        re(xt, Bt, "esm2017");
      const Vt = Tinode;
      class Wt extends t().PureComponent {
        render() {
          return this.props.visible
            ? t().createElement(
                "div",
                { className: "alert-container" },
                t().createElement(
                  "div",
                  { className: "alert" },
                  t().createElement(
                    "div",
                    { className: "title" },
                    this.props.title
                  ),
                  t().createElement(
                    "div",
                    { className: "content" },
                    this.props.content
                  ),
                  t().createElement(
                    "div",
                    { className: "dialog-buttons" },
                    this.props.onReject
                      ? t().createElement(
                          "button",
                          {
                            className: "outline",
                            onClick: this.props.onReject,
                          },
                          this.props.reject ||
                            t().createElement(i.FormattedMessage, {
                              id: "button_cancel",
                              defaultMessage: [{ type: 0, value: "Cancel" }],
                            })
                        )
                      : null,
                    t().createElement(
                      "button",
                      { className: "primary", onClick: this.props.onConfirm },
                      this.props.confirm ||
                        t().createElement(i.FormattedMessage, {
                          id: "button_ok",
                          defaultMessage: [{ type: 0, value: "OK" }],
                        })
                    )
                  )
                )
              )
            : null;
        }
      }
      const Kt = "0.20.0",
        Gt = "TinodeWeb/0.20.0",
        $t = { hosted: "web.tinode.co", local: "localhost:6060" },
        Qt = $t.hosted,
        Yt = 3e3,
        Jt = "JRWPS",
        Xt = 13,
        Zt = 384,
        ea = 262144,
        ta = 1 << 23,
        aa = 36,
        sa = 60,
        na = 360,
        ia = (0, i.defineMessages)({
          info: {
            id: "menu_item_info",
            defaultMessage: [{ type: 0, value: "Info" }],
          },
          clear_messages: {
            id: "menu_item_clear_messages",
            defaultMessage: [{ type: 0, value: "Clear messages" }],
          },
          clear_for_all: {
            id: "menu_item_clear_messages_for_all",
            defaultMessage: [{ type: 0, value: "Clear for All" }],
          },
          delete: {
            id: "menu_item_delete",
            defaultMessage: [{ type: 0, value: "Delete" }],
          },
          delete_for_all: {
            id: "menu_item_delete_for_all",
            defaultMessage: [{ type: 0, value: "Delete for All" }],
          },
          send_retry: {
            id: "menu_item_send_retry",
            defaultMessage: [{ type: 0, value: "Retry" }],
          },
          mute: {
            id: "menu_item_mute",
            defaultMessage: [{ type: 0, value: "Mute" }],
          },
          unmute: {
            id: "menu_item_unmute",
            defaultMessage: [{ type: 0, value: "Unmute" }],
          },
          reply: {
            id: "menu_item_reply",
            defaultMessage: [{ type: 0, value: "Reply" }],
          },
          forward: {
            id: "menu_item_forward",
            defaultMessage: [{ type: 0, value: "Forward" }],
          },
          topic_delete: {
            id: "menu_item_delete_topic",
            defaultMessage: [{ type: 0, value: "Delete" }],
          },
          topic_delete_warning: {
            id: "topic_delete_warning",
            defaultMessage: [
              {
                type: 0,
                value:
                  "Are you sure you want to delete this conversation? It cannot be undone.",
              },
            ],
          },
          delete_messages_warning: {
            id: "delete_messages_warning",
            defaultMessage: [
              {
                type: 0,
                value:
                  "Are you sure you want to delete all messages for everyone? It cannot be undone.",
              },
            ],
          },
          unblock: {
            id: "menu_item_unblock",
            defaultMessage: [{ type: 0, value: "Unblock" }],
          },
          block: {
            id: "menu_item_block",
            defaultMessage: [{ type: 0, value: "Block" }],
          },
          topic_block_warning: {
            id: "topic_block_warning",
            defaultMessage: [
              {
                type: 0,
                value: "Are you sure you want to block this conversation?",
              },
            ],
          },
          member_delete: {
            id: "menu_item_member_delete",
            defaultMessage: [{ type: 0, value: "Remove" }],
          },
          archive: {
            id: "menu_item_archive_topic",
            defaultMessage: [{ type: 0, value: "Archive" }],
          },
          unarchive: {
            id: "menu_item_restore_topic",
            defaultMessage: [{ type: 0, value: "Restore" }],
          },
          edit_permissions: {
            id: "menu_item_edit_permissions",
            defaultMessage: [{ type: 0, value: "Edit permissions" }],
          },
          clear_messages_warning: {
            id: "clear_messages_warning",
            defaultMessage: [
              {
                type: 0,
                value:
                  "Are you sure you want to clear all messages? It cannot be undone.",
              },
            ],
          },
        });
      class oa extends t().Component {
        constructor(e) {
          super(e), (this.selfRef = t().createRef());
          const { formatMessage: a } = e.intl;
          (this.handlePageClick = this.handlePageClick.bind(this)),
            (this.handleEscapeKey = this.handleEscapeKey.bind(this)),
            (this.handleClick = this.handleClick.bind(this)),
            (this.MenuItems = {
              topic_info: {
                id: "topic_info",
                title: a(ia.info),
                handler: null,
              },
              messages_clear: {
                id: "messages_clear",
                title: a(ia.clear_messages),
                handler: (t, s) =>
                  e.onShowAlert(
                    a(ia.clear_messages),
                    a(ia.clear_messages_warning),
                    (e) => {
                      this.deleteMessages(!0, !1, t, s);
                    },
                    null,
                    !0,
                    null
                  ),
              },
              messages_clear_hard: {
                id: "messages_clear_hard",
                title: a(ia.clear_for_all),
                handler: (t, s) =>
                  e.onShowAlert(
                    a(ia.clear_for_all),
                    a(ia.delete_messages_warning),
                    (e) => this.deleteMessages(!0, !0, t, s),
                    null,
                    !0,
                    null
                  ),
              },
              message_delete: {
                id: "message_delete",
                title: a(ia.delete),
                handler: (e, t) => this.deleteMessages(!1, !1, e, t),
              },
              message_delete_hard: {
                id: "message_delete_hard",
                title: a(ia.delete_for_all),
                handler: (e, t) => this.deleteMessages(!1, !0, e, t),
              },
              menu_item_send_retry: {
                id: "menu_item_send_retry",
                title: a(ia.send_retry),
                handler: (e, t) => this.retryMessage(e, t),
              },
              menu_item_reply: {
                id: "menu_item_reply",
                title: a(ia.reply),
                handler: (e, t) => this.replyToMessage(e, t),
              },
              menu_item_forward: {
                id: "menu_item_forward",
                title: a(ia.forward),
                handler: () => {},
              },
              topic_unmute: {
                id: "topic_unmute",
                title: a(ia.unmute),
                handler: this.topicPermissionSetter.bind(this, "+P"),
              },
              topic_mute: {
                id: "topic_mute",
                title: a(ia.mute),
                handler: this.topicPermissionSetter.bind(this, "-P"),
              },
              topic_unblock: {
                id: "topic_unblock",
                title: a(ia.unblock),
                handler: this.topicPermissionSetter.bind(this, "+JP"),
              },
              topic_block: {
                id: "topic_block",
                title: a(ia.block),
                handler: (t, s) =>
                  e.onShowAlert(
                    a(ia.block),
                    a(ia.topic_block_warning),
                    () =>
                      this.topicPermissionSetter("-JP", t, s).then(
                        (e) => (this.props.onTopicRemoved(t.topicName), e)
                      ),
                    null,
                    !0,
                    null
                  ),
              },
              topic_delete: {
                id: "topic_delete",
                title: a(ia.topic_delete),
                handler: (t, s) =>
                  e.onShowAlert(
                    a(ia.topic_delete),
                    a(ia.topic_delete_warning),
                    () => {
                      const e = this.props.tinode.getTopic(t.topicName);
                      if (e)
                        return e.delTopic(!0).catch((e) => {
                          s && s(e.message, "err");
                        });
                      console.warn("Topic not found: ", t.topicName);
                    },
                    null,
                    !0,
                    null
                  ),
              },
              topic_archive: {
                id: "topic_archive",
                title: a(ia.archive),
                handler: (e, t) => {
                  const a = this.props.tinode.getTopic(e.topicName);
                  if (a)
                    return a.archive(!0).catch((e) => {
                      t && t(e.message, "err");
                    });
                  console.warn("Topic not found: ", e.topicName);
                },
              },
              topic_restore: {
                id: "topic_restore",
                title: a(ia.unarchive),
                handler: (e, t) => {
                  const a = this.props.tinode.getTopic(e.topicName);
                  if (a)
                    return a.archive(!1).catch((e) => {
                      t && t(e.message, "err");
                    });
                  console.warn("Topic not found: ", e.topicName);
                },
              },
              permissions: {
                id: "permissions",
                title: a(ia.edit_permissions),
                handler: null,
              },
              member_delete: {
                id: "member_delete",
                title: a(ia.member_delete),
                handler: (e, t) => {
                  const a = this.props.tinode.getTopic(e.topicName);
                  if (a && e.user)
                    return a.delSubscription(e.user).catch((e) => {
                      t && t(e.message, "err");
                    });
                  console.warn(
                    "Topic or user not found: '" +
                      e.topicName +
                      "', '" +
                      e.user +
                      "'"
                  );
                },
              },
              member_mute: {
                id: "member_mute",
                title: a(ia.mute),
                handler: this.topicPermissionSetter.bind(this, "-P"),
              },
              member_unmute: {
                id: "member_unmute",
                title: a(ia.unmute),
                handler: this.topicPermissionSetter.bind(this, "+P"),
              },
              member_block: {
                id: "member_block",
                title: a(ia.block),
                handler: this.topicPermissionSetter.bind(this, "-JP"),
              },
              member_unblock: {
                id: "member_unblock",
                title: a(ia.unblock),
                handler: this.topicPermissionSetter.bind(this, "+JP"),
              },
            });
        }
        componentDidMount() {
          document.addEventListener("mousedown", this.handlePageClick, !1),
            document.addEventListener("keyup", this.handleEscapeKey, !1);
        }
        componentWillUnmount() {
          document.removeEventListener("mousedown", this.handlePageClick, !1),
            document.removeEventListener("keyup", this.handleEscapeKey, !1);
        }
        handlePageClick(e) {
          this.selfRef.current.contains(e.target) ||
            (e.preventDefault(), e.stopPropagation(), this.props.hide());
        }
        handleEscapeKey(e) {
          27 === e.keyCode && this.props.hide();
        }
        handleClick(e) {
          e.preventDefault(), e.stopPropagation(), this.props.hide();
          let t = this.props.items[e.currentTarget.dataset.id];
          "string" == typeof t && (t = this.MenuItems[t]),
            t
              ? this.props.onAction(
                  t.id,
                  t.handler(this.props.params, this.props.onError),
                  this.props.params
                )
              : console.error(
                  "Invalid menu item ID",
                  e.currentTarget.dataset.id
                );
        }
        deleteMessages(e, t, a, s) {
          const n = this.props.tinode.getTopic(a.topicName);
          if (!n) return void console.warn("Topic not found: ", a.topicName);
          if (!e && n.cancelSend(a.seq)) return;
          return (
            e ? n.delMessagesAll(t) : n.delMessagesList([a.seq], t)
          ).catch((e) => {
            s && s(e.message, "err");
          });
        }
        retryMessage(e, t) {
          const a = this.props.tinode.getTopic(e.topicName);
          if (!a || !a.flushMessage(e.seq)) return;
          const s = a.createMessage(e.content, !1);
          return a.publishDraft(s).catch((e) => {
            t && t(e.message, "err");
          });
        }
        topicPermissionSetter(e, t, a) {
          const s = this.props.tinode.getTopic(t.topicName);
          if (!s) return void console.warn("Topic not found", t.topicName);
          let n = s.updateMode(t.user, e);
          return (
            a &&
              (n = n.catch((e) => {
                a(e.message, "err");
              })),
            n
          );
        }
        replyToMessage(e, t) {
          e.pickReply(e.seq, e.content, e.userFrom, e.userName, t);
        }
        render() {
          const e = [];
          let a = 0;
          this.props.items.map((s) => {
            "string" == typeof s && (s = this.MenuItems[s]),
              s &&
                s.title &&
                e.push(
                  "-" == s.title
                    ? t().createElement("li", {
                        className: "separator",
                        key: a,
                      })
                    : t().createElement(
                        "li",
                        { onClick: this.handleClick, "data-id": a, key: a },
                        s.title
                      )
                ),
              a++;
          });
          const s = Xt * (0.7 + 2.5 * e.length),
            n = {
              left:
                (this.props.bounds.right - this.props.clickAt.x < 156
                  ? this.props.clickAt.x - this.props.bounds.left - 156
                  : this.props.clickAt.x - this.props.bounds.left) + "px",
              top:
                (this.props.bounds.bottom - this.props.clickAt.y < s
                  ? this.props.clickAt.y - this.props.bounds.top - s
                  : this.props.clickAt.y - this.props.bounds.top) + "px",
            };
          return t().createElement(
            "ul",
            { className: "menu", style: n, ref: this.selfRef },
            e
          );
        }
      }
      const ra = (0, i.injectIntl)(oa),
        la = {
          muted: "notifications_off",
          banned: "block",
          staff: "verified_user",
        };
      class ca extends t().PureComponent {
        render() {
          let e = null;
          return this.props.badges && this.props.badges.length > 0
            ? ((e = []),
              this.props.badges.map((a) => {
                const s = a.color ? " " + a.color : "";
                a.icon
                  ? e.push(
                      t().createElement(
                        "i",
                        {
                          className: "material-icons as-badge" + s,
                          key: a.key || a.icon,
                        },
                        la[a.icon] || a.icon
                      )
                    )
                  : e.push(
                      t().createElement(
                        "span",
                        { className: "badge" + s, key: a.key || a.name },
                        a.name
                      )
                    );
              }),
              t().createElement(t().Fragment, null, e))
            : null;
        }
      }
      function da(e, t) {
        let a = 0 | Math.floor(e / 60),
          s = 0 | Math.floor(a / 60);
        (t || s > 0) && (a = a < 10 ? `0${a}` : a);
        let n = e % 60 | 0;
        return (
          (n = n < 10 ? `0${n}` : n), 0 == s ? `${a}:${n}` : `${s}:${a}:${n}`
        );
      }
      function ha(e) {
        if (!e || 0 == e) return "0 Bytes";
        const t = ["Bytes", "KB", "MB", "GB", "TB", "PB"],
          a = Math.min(0 | Math.floor(Math.log2(e) / 10), t.length - 1),
          s = e / Math.pow(1024, a),
          n = a > 0 ? (s < 3 ? 2 : s < 30 ? 1 : 0) : 0;
        return s.toFixed(n) + " " + t[a];
      }
      function pa(e, t) {
        return "string" != typeof e
          ? e
          : e.length > t
          ? e.slice(0, t / 2 - 1) + "…" + e.slice(1 - t / 2)
          : e;
      }
      function ua(e, t, a) {
        return (
          (t ? "lt-" : "dk-") +
          (a ? "fg-" : "bg-") +
          ((s = e),
          Math.abs(
            (function (e) {
              let t = 0;
              e = "" + e;
              for (let a = 0; a < e.length; a++)
                (t = (t << 5) - t + e.charCodeAt(a)), (t &= t);
              return t;
            })(s)
          ) % 16)
        );
        var s;
      }
      function ma(e) {
        const t = document.getElementById("shortcut-icon"),
          a = document.head || document.getElementsByTagName("head")[0],
          s = document.createElement("link");
        (s.type = "image/png"),
          (s.id = "shortcut-icon"),
          (s.rel = "shortcut icon"),
          (s.href = "img/logo32x32" + (e > 0 ? "a" : "") + ".png"),
          t && a.removeChild(t),
          a.appendChild(s),
          (document.title = (e > 0 ? "(" + e + ") " : "") + "Tinode");
      }
      function ga(e, t, a, s) {
        let n = null;
        if (
          ((e = e && e.trim()) && (n = { fn: e }),
          "string" == typeof (s = s && s.trim()) &&
            ((n = n || {}), (n.note = s || Vt.Tinode.DEL_CHAR)),
          t)
        ) {
          n = n || {};
          let e = a;
          const s = /^data:(image\/[-a-z0-9+.]+)?(;base64)?,/i.exec(t);
          s
            ? ((e = s[1]),
              (n.photo = {
                data: t.substring(t.indexOf(",") + 1),
                ref: Vt.Tinode.DEL_CHAR,
              }))
            : (n.photo = { data: Vt.Tinode.DEL_CHAR, ref: t }),
            (n.photo.type = (e || "image/jpeg").substring("image/".length));
        }
        return n;
      }
      function _a(e, t) {
        if (e === t) return !0;
        if (!Array.isArray(e) || !Array.isArray(t)) return !1;
        if (e.length != t.length) return !1;
        e.sort(), t.sort();
        for (let a = 0, s = e.length; a < s; a++) if (e[a] !== t[a]) return !1;
        return !0;
      }
      function fa(e, t) {
        if ("string" != typeof e) return e;
        if (
          ((e = e.replace(/[^\x20-\x7E]/gim, "").trim()),
          !/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(e))
        )
          return e;
        if (/^blob:http/.test(e)) return e;
        const a = Array.isArray(t) ? t.join("|") : "http|https";
        return new RegExp("^((" + a + "):|//)", "i").test(e) ? e : null;
      }
      function ba(e, t) {
        if (!e) return null;
        const a = fa(e);
        if (a) return a;
        return new RegExp(`data:${t}/[a-z0-9.-]+;base64,`, "i").test(e.trim())
          ? e
          : null;
      }
      function va(e) {
        switch (e) {
          case Vt.Tinode.MESSAGE_STATUS_SENDING:
            return { name: "access_time" };
          case Vt.Tinode.MESSAGE_STATUS_FAILED:
            return { name: "warning", color: "danger-color" };
          case Vt.Tinode.MESSAGE_STATUS_SENT:
            return { name: "done" };
          case Vt.Tinode.MESSAGE_STATUS_RECEIVED:
            return { name: "done_all" };
          case Vt.Tinode.MESSAGE_STATUS_READ:
            return { name: "done_all", color: "blue" };
        }
        return null;
      }
      function ya(e) {
        let t = !1;
        return {
          promise:
            e instanceof Error
              ? Promise.reject(e)
              : new Promise((a, s) => {
                  e.then(
                    (e) => (t ? s({ isCanceled: !0 }) : a(e)),
                    (e) => s(t ? { isCanceled: !0 } : e)
                  );
                }),
          cancel() {
            t = !0;
          },
        };
      }
      function wa(e, t) {
        return e && e.substring(0, t);
      }
      class Ca extends t().PureComponent {
        render() {
          let e;
          if (!0 === this.props.avatar) {
            const a = Vt.Tinode.isGroupTopicName(this.props.topic),
              s = ua(this.props.topic, a);
            if (
              this.props.topic &&
              this.props.title &&
              this.props.title.trim()
            ) {
              const a = this.props.title.trim().charAt(0),
                n = "lettertile " + s + (this.props.deleted ? " disabled" : "");
              e = t().createElement(
                "div",
                { className: n },
                t().createElement("div", null, a)
              );
            } else {
              const n =
                "material-icons " + s + (this.props.deleted ? " disabled" : "");
              e = a
                ? t().createElement("i", { className: n }, "group")
                : t().createElement("i", { className: n }, "person");
            }
          } else if (this.props.avatar) {
            const a = this.props.tinode.authorizeURL(
                ba(this.props.avatar, "image")
              ),
              s = "avatar" + (this.props.deleted ? " deleted" : "");
            e = t().createElement("img", {
              className: s,
              alt: "avatar",
              src: a,
              onError: (e) => {
                (e.target.onerror = null),
                  (e.target.src = "../img/broken_image.png");
              },
            });
          } else e = null;
          return e;
        }
      }
      class Ea extends t().PureComponent {
        render() {
          return this.props.count > 0
            ? t().createElement(
                "span",
                { className: "unread" },
                this.props.count > 9 ? "9+" : this.props.count
              )
            : null;
        }
      }
      const Sa = [
          "image/jpeg",
          "image/gif",
          "image/png",
          "image/svg",
          "image/svg+xml",
        ],
        Ma = ["jpg", "gif", "png", "svg", "svg"];
      function ka(e) {
        if (e && "object" == typeof e) {
          if (e.ref) return e.ref;
          if (e.data && e.type) {
            return (
              "data:" +
              (e.type.startsWith("image/") ? e.type : "image/" + e.type) +
              ";base64," +
              e.data
            );
          }
        }
        return null;
      }
      function Ta(e, t, a, s, n) {
        if (
          ((t |= 0),
          (a |= 0),
          (s |= 0),
          (e |= 0) <= 0 || t <= 0 || a <= 0 || s <= 0)
        )
          return null;
        n && (a = s = Math.min(a, s));
        const i = Math.min(Math.min(e, a) / e, Math.min(t, s) / t),
          o = { dstWidth: (e * i) | 0, dstHeight: (t * i) | 0 };
        return (
          n
            ? ((o.dstWidth = o.dstHeight = Math.min(o.dstWidth, o.dstHeight)),
              (o.srcWidth = o.srcHeight = Math.min(e, t)),
              (o.xoffset = ((e - o.srcWidth) / 2) | 0),
              (o.yoffset = ((t - o.srcWidth) / 2) | 0))
            : ((o.xoffset = o.yoffset = 0),
              (o.srcWidth = e),
              (o.srcHeight = t)),
          o
        );
      }
      function Na(e, t) {
        const a = Sa.indexOf(t);
        if (a < 0 || !e) return e;
        const s = Ma[a],
          n = e.lastIndexOf(".");
        return n >= 0 && (e = e.substring(0, n)), e + "." + s;
      }
      function Aa(e, t, a, s, n) {
        return new Promise((i, o) => {
          const r = new Image();
          (r.crossOrigin = "Anonymous"),
            (r.onerror = function (e) {
              o(new Error("Image format unrecognized"));
            }),
            (r.onload = async function () {
              URL.revokeObjectURL(r.src);
              const l = Ta(r.width, r.height, t, a, n);
              if (!l) return void o(new Error("Invalid image"));
              let c = document.createElement("canvas");
              (c.width = l.dstWidth), (c.height = l.dstHeight);
              let d = c.getContext("2d");
              (d.imageSmoothingEnabled = !0),
                d.drawImage(
                  r,
                  l.xoffset,
                  l.yoffset,
                  l.srcWidth,
                  l.srcHeight,
                  0,
                  0,
                  l.dstWidth,
                  l.dstHeight
                );
              const h = Sa.includes(e.type) ? e.type : "image/jpeg";
              let p = await new Promise((e) => c.toBlob(e, h));
              if (p) {
                for (; s > 0 && p.length > s; )
                  (l.dstWidth = (0.70710678118 * l.dstWidth) | 0),
                    (l.dstHeight = (0.70710678118 * l.dstHeight) | 0),
                    (c.width = l.dstWidth),
                    (c.height = l.dstHeight),
                    (d = c.getContext("2d")),
                    d.clearRect(0, 0, c.width, c.height),
                    d.drawImage(
                      r,
                      l.xoffset,
                      l.yoffset,
                      l.srcWidth,
                      l.srcHeight,
                      0,
                      0,
                      l.dstWidth,
                      l.dstHeight
                    ),
                    (p = await new Promise((e) => c.toBlob(e, h)));
                (c = null),
                  i({
                    mime: h,
                    blob: p,
                    width: l.dstWidth,
                    height: l.dstHeight,
                    name: Na(e.name, h),
                  });
              } else o(new Error("Unsupported image format"));
            }),
            (r.src = URL.createObjectURL(e));
        });
      }
      function Da(e) {
        return new Promise((t, a) => {
          const s = new FileReader();
          (s.onerror = (e) => {
            a(s.error);
          }),
            (s.onload = () => {
              t({ mime: e.type, bits: s.result.split(",")[1] });
            }),
            s.readAsDataURL(e);
        });
      }
      function Ia(e) {
        if (!Array.isArray(e)) return null;
        try {
          let t = "";
          return (
            new Uint8Array(e).forEach((e) => (t += String.fromCharCode(e))),
            window.btoa(t)
          );
        } catch (e) {}
        return null;
      }
      function Pa(e) {
        const t = [];
        try {
          return (
            [...window.atob(e)].forEach((e) => {
              t.push(e.charCodeAt(0));
            }),
            t
          );
        } catch (e) {}
        return null;
      }
      const Ua = "#666C";
      class Ra extends t().PureComponent {
        constructor(e) {
          super(e);
          let a = Pa(this.props.preview);
          (!Array.isArray(a) || a.length < 16) && (a = null),
            (this.state = {
              canPlay: !1,
              playing: !1,
              currentTime: "0:00",
              duration:
                this.props.duration > 0
                  ? da(this.props.duration / 1e3)
                  : "-:--",
              longMin: this.props.duration >= 6e5,
              preview: a,
            }),
            (this.initAudio = this.initAudio.bind(this)),
            (this.initCanvas = this.initCanvas.bind(this)),
            (this.resampleBars = this.resampleBars.bind(this)),
            (this.visualize = this.visualize.bind(this)),
            (this.handlePlay = this.handlePlay.bind(this)),
            (this.handleSeek = this.handleSeek.bind(this)),
            (this.handleError = this.handleError.bind(this)),
            (this.audioPlayer = null),
            (this.viewBuffer = []),
            (this.canvasRef = t().createRef());
        }
        componentDidMount() {
          this.props.src && this.initAudio(), this.initCanvas();
        }
        componentWillUnmount() {
          this.audioPlayer &&
            ((this.audioPlayer.oncanplay = null),
            (this.audioPlayer.ontimeupdate = null),
            (this.audioPlayer.onended = null),
            this.audioPlayer.pause(),
            (this.audioPlayer = null));
        }
        componentDidUpdate(e) {
          if (
            (this.props.src != e.src && this.initAudio(),
            this.props.preview != e.preview)
          ) {
            let e = Pa(this.props.preview);
            (!Array.isArray(e) || e.length < 16) && (e = null),
              this.setState({ preview: e }, this.initCanvas);
          }
        }
        initAudio() {
          (this.audioPlayer = new Audio(this.props.src)),
            (this.audioPlayer.oncanplay = (e) =>
              this.setState({ canPlay: !0 })),
            (this.audioPlayer.ontimeupdate = (e) =>
              this.setState({
                currentTime: da(
                  this.audioPlayer.currentTime,
                  this.state.longMin
                ),
              })),
            (this.audioPlayer.onended = (e) => {
              (this.audioPlayer.currentTime = 0),
                this.setState({
                  playing: !1,
                  currentTime: da(0, this.state.longMin),
                });
            });
        }
        initCanvas() {
          (this.canvasRef.current.width =
            2 * this.canvasRef.current.offsetWidth),
            (this.canvasRef.current.height =
              2 * this.canvasRef.current.offsetHeight),
            (this.canvasContext = this.canvasRef.current.getContext("2d")),
            (this.canvasContext.lineCap = "round"),
            (this.viewBuffer = this.resampleBars(this.state.preview)),
            this.visualize();
        }
        visualize() {
          if (!this.canvasRef.current) return;
          const e = this.effectiveWidth,
            t = this.canvasRef.current.height;
          this.canvasContext.lineWidth = 6;
          const a = () => {
            if (
              this.canvasRef.current &&
              this.audioPlayer &&
              (this.canvasContext.clearRect(
                0,
                0,
                this.canvasRef.current.width,
                t
              ),
              this.viewBuffer)
            ) {
              this.state.playing && window.requestAnimationFrame(a);
              const s = this.props.duration
                ? Math.max(
                    0,
                    Math.min(
                      (1e3 * this.audioPlayer.currentTime) /
                        this.props.duration,
                      1
                    )
                  ) *
                  (e - 12)
                : -1;
              this.canvasContext.beginPath(),
                (this.canvasContext.strokeStyle = Ua);
              for (let e = 0; e < this.viewBuffer.length; e++) {
                let a = 1 + 10 * e + 3,
                  n = this.viewBuffer[e] * t * 0.9;
                const i = a < s ? Ua : "#888A";
                this.canvasContext.strokeStyle != i &&
                  (this.canvasContext.stroke(),
                  this.canvasContext.beginPath(),
                  (this.canvasContext.strokeStyle = i)),
                  this.canvasContext.moveTo(a, 0.5 * (t - n)),
                  this.canvasContext.lineTo(a, 0.5 * t + 0.5 * n);
              }
              this.canvasContext.stroke(),
                this.props.duration &&
                  (this.canvasContext.beginPath(),
                  this.canvasContext.arc(s + 12, 0.5 * t, 12, 0, 2 * Math.PI),
                  (this.canvasContext.fillStyle = "#444E"),
                  this.canvasContext.fill());
            }
          };
          a();
        }
        resampleBars(e) {
          const t = ((this.canvasRef.current.width - 4) / 10) | 0;
          if (
            ((this.effectiveWidth = 10 * t + 4),
            !Array.isArray(e) || 0 == e.length)
          )
            return Array.apply(null, Array(t)).map((e) => 0.01);
          const a = e.length / t;
          let s = [],
            n = -1;
          for (let i = 0; i < t; i++) {
            let t = (i * a) | 0,
              o = ((i + 1) * a) | 0;
            if (o == t) s[i] = e[t];
            else {
              let a = 0;
              for (let s = t; s < o; s++) a += e[s];
              s[i] = Math.max(0, a / (o - t));
            }
            n = Math.max(s[i], n);
          }
          return n > 0
            ? s.map((e) => e / n)
            : Array.apply(null, Array(t)).map((e) => 0.01);
        }
        handlePlay(e) {
          e.preventDefault(),
            this.state.canPlay &&
              (this.state.playing
                ? (this.audioPlayer.pause(), this.setState({ playing: !1 }))
                : (this.audioPlayer.play(),
                  this.setState({ playing: !0 }, this.visualize)));
        }
        handleError(e) {
          console.error(e);
        }
        handleSeek(e) {
          if ((e.preventDefault(), e.target && this.props.duration)) {
            const t = e.target.getBoundingClientRect(),
              a = ((e.clientX - t.left) / this.effectiveWidth) * 2;
            (this.audioPlayer.currentTime = (this.props.duration * a) / 1e3),
              this.setState({
                currentTime: da(
                  this.audioPlayer.currentTime,
                  this.state.longMin
                ),
              }),
              this.state.playing || this.visualize();
          }
        }
        render() {
          const e =
              "material-icons" +
              (this.props.short ? "" : " large") +
              (this.state.canPlay ? "" : " disabled"),
            a = t().createElement(
              "a",
              { href: "#", onClick: this.handlePlay, title: "Play" },
              t().createElement(
                "i",
                { className: e },
                this.state.playing
                  ? "pause_circle"
                  : this.state.canPlay
                  ? "play_circle"
                  : "not_interested"
              )
            );
          return t().createElement(
            "div",
            { className: "audio-player" },
            this.props.short
              ? t().createElement(
                  t().Fragment,
                  null,
                  t().createElement("canvas", {
                    className: "playback",
                    ref: this.canvasRef,
                    onClick: this.handleSeek,
                  }),
                  a
                )
              : t().createElement(
                  t().Fragment,
                  null,
                  a,
                  t().createElement(
                    "div",
                    null,
                    t().createElement("canvas", {
                      className: "playback",
                      ref: this.canvasRef,
                      onClick: this.handleSeek,
                    }),
                    t().createElement(
                      "div",
                      { className: "timer" },
                      this.state.currentTime,
                      "/",
                      this.state.duration
                    )
                  )
                )
          );
        }
      }
      class Fa extends t().PureComponent {
        render() {
          const e = ["declined", "disconnected", "missed"].includes(
              this.props.callState
            ),
            a = "material-icons medium " + (e ? "red" : "green"),
            s = this.props.incoming
              ? e
                ? "call_missed"
                : "call_received"
              : e
              ? "call_missed_outgoing"
              : "call_made";
          let n;
          if (e)
            switch (this.props.callState) {
              case "declined":
                n = t().createElement(i.FormattedMessage, {
                  id: "call_declined",
                  defaultMessage: [{ type: 0, value: "declined" }],
                });
                break;
              case "missed":
                n = this.props.incoming
                  ? t().createElement(i.FormattedMessage, {
                      id: "call_missed",
                      defaultMessage: [{ type: 0, value: "missed" }],
                    })
                  : t().createElement(i.FormattedMessage, {
                      id: "call_cancelled",
                      defaultMessage: [{ type: 0, value: "cancelled" }],
                    });
                break;
              default:
                n = t().createElement(i.FormattedMessage, {
                  id: "call_disconnected",
                  defaultMessage: [{ type: 0, value: "disconnected" }],
                });
            }
          else
            n = t().createElement("span", null, da(this.props.duration / 1e3));
          return t().createElement(
            "div",
            { className: "call-message" },
            t().createElement(
              "div",
              null,
              t().createElement(
                "i",
                { className: "material-icons big gray" },
                "call"
              )
            ),
            t().createElement(
              "div",
              { className: "flex-column narrow" },
              t().createElement(
                "div",
                null,
                this.props.incoming
                  ? t().createElement(i.FormattedMessage, {
                      id: "calls_incoming",
                      defaultMessage: [{ type: 0, value: "Incoming call" }],
                    })
                  : t().createElement(i.FormattedMessage, {
                      id: "calls_outgoing",
                      defaultMessage: [{ type: 0, value: "Outgoing call" }],
                    })
              ),
              t().createElement(
                "div",
                { className: "duration" },
                t().createElement("i", { className: a }, s),
                " ",
                n
              )
            )
          );
        }
      }
      class xa extends t().PureComponent {
        render() {
          const e = ["declined", "disconnected", "missed"].includes(
              this.props.callState
            ),
            a = this.props.incoming
              ? e
                ? "call_missed"
                : "call_received"
              : e
              ? "call_missed_outgoing"
              : "call_made";
          let s;
          if (e)
            switch (this.props.callState) {
              case "declined":
                s = t().createElement(i.FormattedMessage, {
                  id: "call_declined",
                  defaultMessage: [{ type: 0, value: "declined" }],
                });
                break;
              case "missed":
                s = this.props.incoming
                  ? t().createElement(i.FormattedMessage, {
                      id: "call_missed",
                      defaultMessage: [{ type: 0, value: "missed" }],
                    })
                  : t().createElement(i.FormattedMessage, {
                      id: "call_cancelled",
                      defaultMessage: [{ type: 0, value: "cancelled" }],
                    });
                break;
              default:
                s = t().createElement(i.FormattedMessage, {
                  id: "call_disconnected",
                  defaultMessage: [{ type: 0, value: "disconnected" }],
                });
            }
          else
            s = t().createElement("span", null, da(this.props.duration / 1e3));
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "div",
              { className: "composed-material" },
              t().createElement("i", { className: "material-icons" }, "call"),
              t().createElement("i", { className: "material-icons second" }, a)
            ),
            " ",
            s
          );
        }
      }
      class Ba extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              src: "img/placeholder.png",
              style: Object.assign({ padding: "4px" }, this.props.style),
              className: this.props.className,
              alt: this.props.alt,
              onClick: this.props.onClick,
            });
        }
        componentDidMount() {
          this.props.whenDone.promise
            .then((e) =>
              this.setState({
                src: e.src,
                style: { ...this.state.style, padding: 0 },
              })
            )
            .catch(() => this.setState({ src: "img/broken_image.png" }));
        }
        componentWillUnmount() {
          this.props.whenDone.cancel();
        }
        componentDidUpdate(e) {
          e.whenDone != this.props.whenDone &&
            (this.setState({
              src: "img/placeholder.png",
              style: { ...this.state.style, padding: "4px" },
            }),
            this.props.whenDone.promise
              .then((e) =>
                this.setState({
                  src: e.src,
                  style: { ...this.state.style, padding: 0 },
                })
              )
              .catch(() => this.setState({ src: "img/broken_image.png" })));
        }
        render() {
          return t().createElement("img", this.state);
        }
      }
      class La extends t().PureComponent {
        render() {
          return t().createElement(
            "div",
            { className: "uploader" },
            t().createElement(
              "div",
              null,
              t().createElement("span", {
                style: { width: 100 * this.props.progress + "%" },
              })
            ),
            this.props.progress < 0.999
              ? t().createElement(
                  "a",
                  {
                    href: "#",
                    onClick: (e) => {
                      e.preventDefault(), this.props.onCancel();
                    },
                  },
                  t().createElement(
                    "i",
                    { className: "material-icons" },
                    "close"
                  ),
                  " ",
                  t().createElement(i.FormattedMessage, {
                    id: "action_cancel",
                    defaultMessage: [{ type: 0, value: "cancel" }],
                  })
                )
              : t().createElement(i.FormattedMessage, {
                  id: "upload_finishing",
                  defaultMessage: [{ type: 0, value: "finishing..." }],
                })
          );
        }
      }
      class Oa extends t().PureComponent {
        constructor(e) {
          super(e);
        }
        render() {
          return t().createElement(
            "div",
            { className: "inline-image" },
            t().createElement("img", this.props),
            t().createElement(
              "div",
              { className: "rounded-container" },
              t().createElement(La, {
                progress: this.props.progress,
                onCancel: this.props.onCancelUpload,
              })
            )
          );
        }
      }
      const qa = (0, i.defineMessages)({
        drafty_form: {
          id: "drafty_form",
          defaultMessage: [{ type: 0, value: "Form:" }],
        },
        drafty_attachment: {
          id: "drafty_attachment",
          defaultMessage: [{ type: 0, value: "Attachment" }],
        },
        drafty_image: {
          id: "drafty_image",
          defaultMessage: [{ type: 0, value: "Picture" }],
        },
        drafty_unknown: {
          id: "drafty_unknown",
          defaultMessage: [{ type: 0, value: "Unsupported" }],
        },
      });
      function ja(e, t, a) {
        if (!t)
          return (
            (a.src = "img/broken_image.png"),
            (a.style = { width: "36px", height: "36px" }),
            e
          );
        a.className = "inline-image";
        const s = Ta(
          t.width,
          t.height,
          this.viewportWidth > 0
            ? Math.min(this.viewportWidth - 84.5, 448.5)
            : 448.5,
          312,
          !1
        ) || { dstWidth: 32, dstHeight: 32 };
        return (
          (a.style = {
            width: s.dstWidth + "px",
            height: s.dstHeight + "px",
            minWidth: s.dstWidth + "px",
            minHeight: s.dstHeight + "px",
          }),
          Vt.Drafty.isProcessing(t)
            ? (e = Oa)
            : ((a.src = this.authorizeURL(ba(a.src, "image"))),
              (a.alt = t.name),
              a.src
                ? (Math.max(t.width || 0, t.height || 0) > aa &&
                    ((a.onClick = this.onImagePreview),
                    (a.className += " image-clickable")),
                  (a.loading = "lazy"))
                : (a.src = "img/broken_image.png")),
          e
        );
      }
      function za(e, a, s, n, i) {
        if (i.includes("QQ")) return Wa.call(this, e, a, s, n);
        if (!e) return s;
        let o = Vt.Drafty.tagName(e),
          r = Vt.Drafty.attrValue(e, a) || {};
        switch (((r.key = n), e)) {
          case "AU":
            r.src &&
              ((r.src = this.authorizeURL(ba(r.src, "audio"))),
              (r.duration = a.duration > 0 ? 0 | a.duration : void 0),
              (r.preview = a.preview),
              (r.loading = "lazy")),
              (o = Ra),
              (s = null);
            break;
          case "BR":
            s = null;
            break;
          case "EX":
          case "RW":
            break;
          case "HL":
            r.className = "highlight";
            break;
          case "HD":
            (o = null), (s = null);
            break;
          case "IM":
            (o = ja.call(this, o, a, r)), (s = null);
            break;
          case "BN":
            r.onClick = this.onFormButtonClick;
            let e = t().Children.map(s, (e) =>
              "string" == typeof e ? e : void 0
            );
            (e && 0 != e.length) || (e = [r.name]),
              (r["data-title"] = e.join(""));
            break;
          case "MN":
            (r.className = "mention"),
              a && (r.className += " " + ua(a.val, !1, !0));
            break;
          case "FM":
            r.className = "bot-form";
            break;
          case "QQ":
            (r.className = "reply-quote"), (r.onClick = this.onQuoteClick);
            break;
          case "VC":
            (o = Fa),
              (s = null),
              a &&
                ((r.callState = a.state),
                (r.incoming = a.incoming),
                (r.duration = a.duration));
            break;
          default:
            if (!o) {
              (o = t().Fragment), (r = { key: n });
              let e = s;
              (Array.isArray(s) && s.join("").trim()) ||
                (e = [
                  t().createElement(
                    "span",
                    { key: "x1", className: "gray" },
                    this.formatMessage(qa.drafty_unknown)
                  ),
                ]),
                (s = [
                  t().createElement(
                    "i",
                    { key: "x0", className: "material-icons gray" },
                    "extension"
                  ),
                  " ",
                ].concat(e));
            }
        }
        return o ? t().createElement(o, r, s) : s;
      }
      function Ha(e, a, s, n) {
        if (!e) return s;
        let i = Vt.Drafty.tagName(e);
        const o = { key: n };
        switch (e) {
          case "AU":
            (i = t().Fragment),
              (s = [
                t().createElement(
                  "i",
                  { key: "au", className: "material-icons" },
                  "mic"
                ),
                " ",
                da(a.duration / 1e3),
              ]);
            break;
          case "BR":
            (i = t().Fragment), (s = [" "]);
            break;
          case "HL":
            o.className = "highlight preview";
            break;
          case "LN":
          case "MN":
            i = "span";
            break;
          case "IM":
            (i = t().Fragment),
              (s = [
                t().createElement(
                  "i",
                  { key: "im", className: "material-icons" },
                  "photo"
                ),
                " ",
                this.formatMessage(qa.drafty_image),
              ]);
            break;
          case "BN":
            (i = "span"), (o.className = "flat-button faux");
            break;
          case "FM":
            (i = t().Fragment),
              (s = [
                t().createElement(
                  "i",
                  { key: "fm", className: "material-icons" },
                  "dashboard"
                ),
                this.formatMessage(qa.drafty_form),
              ].concat(" ", s || []));
            break;
          case "RW":
            i = t().Fragment;
            break;
          case "EX":
            if (a) {
              if ("application/json" == a.mime) return null;
              delete a.val, delete a.ref;
            }
            (i = t().Fragment),
              (s = [
                t().createElement(
                  "i",
                  { key: "ex", className: "material-icons" },
                  "attachment"
                ),
                " ",
                this.formatMessage(qa.drafty_attachment),
              ]);
            break;
          case "VC":
            (i = xa),
              a &&
                ((o.callState = a.state),
                (o.incoming = a.incoming),
                (o.duration = a.duration)),
              (s = null);
            break;
          case "QQ":
          case "HD":
            (i = null), (s = null);
            break;
          default:
            i ||
              ((i = t().Fragment),
              (s = [
                t().createElement(
                  "i",
                  { key: "x0", className: "material-icons gray" },
                  "extension"
                ),
                " ",
                this.formatMessage(qa.drafty_unknown),
              ]));
        }
        return i ? t().createElement(i, o, s) : s;
      }
      function Va(e, t) {
        return (
          (e.style = {
            width: "36px",
            height: "36px",
            maxWidth: "36px",
            maxHeight: "36px",
          }),
          (e.className = "inline-image"),
          (e.alt = this.formatMessage(qa.drafty_image)),
          t || (e.src = "img/broken_image.png"),
          (e.title = e.alt),
          e
        );
      }
      function Wa(e, a, s, n) {
        if (["BR", "EX", "IM", "MN"].includes(e)) {
          let i = Vt.Drafty.tagName(e),
            o = Vt.Drafty.attrValue(e, a) || {};
          switch (((o.key = n), e)) {
            case "BR":
              s = null;
              break;
            case "IM":
              (o = Va.call(this, o, a)),
                (s = [t().createElement("img", o, null), " ", o.alt]),
                (i = t().Fragment),
                (o = { key: n });
              break;
            case "MN":
              (i = "span"),
                (o.className = "mention"),
                a && (o.className += " " + ua(a.val, !1, !0));
              break;
            case "EX":
              let e;
              if (a) {
                if ("application/json" == a.mime) return null;
                (e = a.name), delete a.val, delete a.ref;
              }
              (i = t().Fragment),
                (s = [
                  t().createElement(
                    "i",
                    { key: "ex", className: "material-icons" },
                    "attachment"
                  ),
                  pa(e, 16) || this.formatMessage(qa.drafty_attachment),
                ]);
          }
          return t().createElement(i, o, s);
        }
        return Ha.call(this, e, a, s, n);
      }
      function Ka(e) {
        let t;
        if (e.val) {
          const a = (function (e, t) {
            if (!e) return null;
            try {
              const a = atob(e),
                s = a.length,
                n = new ArrayBuffer(s),
                i = new Uint8Array(n);
              for (let e = 0; e < s; e++) i[e] = a.charCodeAt(e);
              return new Blob([n], { type: t });
            } catch (e) {
              console.error("Failed to convert base64 to blob: ", e);
            }
            return null;
          })(e.val, e.mime);
          if (!a) throw new Error("Invalid image");
          t = Promise.resolve(a);
        } else {
          if (!e.ref) throw new Error("Missing image data");
          t = fetch(this.authorizeURL(ba(e.ref, "image"))).then((e) => {
            if (e.ok) return e.blob();
            throw new Error(
              `Image fetch unsuccessful: ${e.status} ${e.statusText}`
            );
          });
        }
        return t
          .then((e) => Aa(e, aa, aa, -1, !0))
          .then(
            (t) => (
              (e.mime = t.mime),
              (e.size = t.blob.size),
              (e.width = t.width),
              (e.height = t.height),
              delete e.ref,
              (e.src = URL.createObjectURL(t.blob)),
              Da(t.blob)
            )
          )
          .then((t) => ((e.val = t.bits), e))
          .catch((t) => {
            throw (
              (delete e.val, delete e.src, (e.width = aa), (e.height = aa), t)
            );
          });
      }
      function Ga(e, a, s, n, i) {
        if ("IM" == e) {
          const e = Va.call(this, { key: n }, a);
          let i;
          try {
            i = ya(Ka.call(this, a));
          } catch (e) {
            i = ya(e);
          }
          return (
            (e.whenDone = i),
            (s = [t().createElement(Ba, e, null), " ", e.alt]),
            t().createElement(t().Fragment, { key: n }, s)
          );
        }
        if ("QQ" == e) {
          if (i.includes("QQ"))
            return t().createElement("span", { key: n }, [
              t().createElement(
                "i",
                { key: "qq", className: "material-icons" },
                "format_quote"
              ),
              " ",
            ]);
          const e = Vt.Drafty.attrValue("QQ", a) || {};
          return (
            (e.key = n),
            (e.className = "reply-quote"),
            t().createElement(Vt.Drafty.tagName("QQ"), e, s)
          );
        }
        return Wa.call(this, e, a, s, n);
      }
      class $a extends t().Component {
        constructor(e) {
          super(e),
            (this.handleClick = this.handleClick.bind(this)),
            (this.handleContextClick = this.handleContextClick.bind(this));
        }
        handleClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.onSelected &&
              this.props.onSelected(this.props.item, this.props.index);
        }
        handleContextClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.showContextMenu({
              topicName: this.props.item,
              y: e.pageY,
              x: e.pageX,
            });
        }
        render() {
          let e = this.props.title;
          e
            ? e.length > 30 && (e = e.substring(0, 28) + "…")
            : (e = t().createElement(
                "i",
                null,
                t().createElement(i.FormattedMessage, {
                  id: "unnamed_topic",
                  defaultMessage: [{ type: 0, value: "Unnamed" }],
                })
              ));
          const a = this.props.now ? "online" : "offline",
            s = !this.props.avatar || this.props.avatar,
            n = this.props.badges ? this.props.badges.slice() : [],
            o = [];
          let r;
          this.props.isVerified &&
            o.push({ icon: "verified", color: "verified-color" }),
            this.props.isStaff &&
              o.push({ icon: "staff", color: "staff-color" }),
            this.props.isDangerous &&
              o.push({ icon: "dangerous", color: "danger-color" }),
            this.props.acs &&
              (this.props.showMode &&
                n.push({ name: this.props.acs.getMode(), key: "mode" }),
              this.props.acs.isMuted() && o.push({ icon: "muted" }),
              this.props.acs.isJoiner() || o.push({ icon: "banned" })),
            "string" == typeof this.props.preview
              ? (r = this.props.preview)
              : Vt.Drafty.isValid(this.props.preview)
              ? (r = t().createElement(
                  t().Fragment,
                  null,
                  Vt.Drafty.format(this.props.preview, Ha, {
                    formatMessage: this.props.intl.formatMessage,
                    previewIsResponse: this.props.previewIsResponse,
                  })
                ))
              : this.props.preview &&
                (r = t().createElement(
                  t().Fragment,
                  null,
                  t().createElement(
                    "i",
                    { className: "material-icons gray" },
                    "warning_amber"
                  ),
                  " ",
                  t().createElement(
                    "i",
                    { className: "gray" },
                    t().createElement(i.FormattedMessage, {
                      id: "invalid_content",
                      defaultMessage: [{ type: 0, value: "invalid content" }],
                    })
                  )
                ));
          const l = va(this.props.received),
            c = l
              ? t().createElement(
                  "i",
                  {
                    className:
                      "material-icons small space-right" +
                      (l.color ? " " + l.color : ""),
                  },
                  l.name
                )
              : null,
            d = "contact-title" + (this.props.deleted ? " deleted" : "");
          return t().createElement(
            "li",
            {
              className:
                !this.props.showCheckmark && this.props.selected
                  ? "selected"
                  : null,
              onClick: this.handleClick,
            },
            t().createElement(
              "div",
              { className: "avatar-box" },
              t().createElement(Ca, {
                tinode: this.props.tinode,
                avatar: s,
                title: this.props.title,
                topic: this.props.item,
                deleted: this.props.deleted,
              }),
              this.props.deleted
                ? t().createElement(
                    "i",
                    { className: "deleted material-icons" },
                    "cancel"
                  )
                : this.props.showOnline
                ? t().createElement("span", { className: a })
                : this.props.showCheckmark && this.props.selected
                ? t().createElement(
                    "i",
                    { className: "checkmark material-icons" },
                    "check_circle"
                  )
                : null
            ),
            t().createElement(
              "div",
              { className: "text-box" },
              t().createElement(
                "div",
                null,
                t().createElement("span", { className: d }, e),
                this.props.isChannel
                  ? t().createElement("img", {
                      src: "/img/channel.png",
                      className: "channel",
                      alt: "channel",
                    })
                  : null,
                t().createElement(ca, { badges: o }),
                this.props.deleted
                  ? null
                  : t().createElement(Ea, { count: this.props.unread })
              ),
              this.props.showMode
                ? t().createElement(
                    "span",
                    null,
                    t().createElement(ca, { badges: n })
                  )
                : this.props.small
                ? null
                : t().createElement(
                    "div",
                    { className: "contact-comment" },
                    c,
                    t().createElement(
                      "span",
                      null,
                      r || this.props.comment || " "
                    )
                  )
            ),
            this.props.showContextMenu
              ? t().createElement(
                  "span",
                  { className: "menuTrigger" },
                  t().createElement(
                    "a",
                    { href: "#", onClick: this.handleContextClick },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "expand_more"
                    )
                  )
                )
              : null
          );
        }
      }
      const Qa = (0, i.injectIntl)($a);
      class Ya extends t().PureComponent {
        constructor(e) {
          super(e), (this.handleClick = this.handleClick.bind(this));
        }
        handleClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.onAction(this.props.action);
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          return t().createElement(
            "li",
            { onClick: this.handleClick, className: "action" },
            t().createElement(
              "div",
              { className: "action-text" },
              e(this.props.title, this.props.values)
            )
          );
        }
      }
      const Ja = (0, i.injectIntl)(Ya),
        Xa = (0, i.defineMessages)({
          badge_you: {
            id: "badge_you",
            defaultMessage: [{ type: 0, value: "you" }],
          },
          badge_owner: {
            id: "badge_owner",
            defaultMessage: [{ type: 0, value: "owner" }],
          },
        });
      class Za extends t().Component {
        render() {
          const { formatMessage: e } = this.props.intl,
            a = Array.isArray(this.props.topicSelected),
            s = [];
          let n = 0;
          return (
            this.props.contacts &&
              this.props.contacts.length > 0 &&
              this.props.contacts.map((i) => {
                if (i.action)
                  s.push(
                    t().createElement(Ja, {
                      title: i.title,
                      action: i.action,
                      values: i.values,
                      key: i.action,
                      onAction: this.props.onAction,
                    })
                  );
                else {
                  const o = this.props.showMode ? i.user : i.topic || i.user;
                  if (this.props.filterFunc && this.props.filter) {
                    const e = [o];
                    if (
                      (i.private &&
                        i.private.comment &&
                        e.push(("" + i.private.comment).toLowerCase()),
                      i.public &&
                        i.public.fn &&
                        e.push(("" + i.public.fn).toLowerCase()),
                      !this.props.filterFunc(this.props.filter, e))
                    )
                      return;
                  }
                  const r = Vt.Tinode.isChannelTopicName(o),
                    l = a
                      ? this.props.topicSelected.indexOf(o) > -1
                      : this.props.topicSelected === o,
                    c = [];
                  this.props.showMode &&
                    (o == this.props.myUserId &&
                      c.push({ name: e(Xa.badge_you), color: "green" }),
                    i.acs &&
                      i.acs.isOwner() &&
                      c.push({ name: e(Xa.badge_owner), color: "blue" }));
                  const d = Array.isArray(i.private)
                    ? i.private.join(",")
                    : i.private
                    ? i.private.comment
                    : null;
                  let h, p, u, m;
                  if (!this.props.showMode && i.latestMessage) {
                    const e = i.latestMessage(!0);
                    e &&
                      ((p = e.head ? e.head.forwarded : null),
                      (m = e._status || i.msgStatus(e, !0)),
                      (u = e.from != this.props.myUserId),
                      e.content &&
                        (h =
                          "string" == typeof e.content
                            ? e.content.substr(0, 80)
                            : Vt.Drafty.preview(e.content, 80)));
                  }
                  s.push(
                    t().createElement(Qa, {
                      tinode: this.props.tinode,
                      title: i.public ? i.public.fn : null,
                      avatar: ka(i.public ? i.public.photo : null),
                      comment: d,
                      preview: h,
                      previewIsResponse: u,
                      forwarded: p,
                      received: m,
                      unread: this.props.showUnread ? i.unread : 0,
                      now: i.online && this.props.connected,
                      acs: i.acs,
                      showMode: this.props.showMode,
                      badges: c,
                      showCheckmark: a,
                      selected: l,
                      showOnline: this.props.showOnline && !r,
                      isChannel: r,
                      showContextMenu: this.props.showContextMenu,
                      isVerified: i.trusted && i.trusted.verified,
                      isStaff: i.trusted && i.trusted.staff,
                      isDangerous: i.trusted && i.trusted.danger,
                      deleted: i._deleted,
                      onSelected: this.props.onTopicSelected,
                      item: o,
                      index: s.length,
                      key: o,
                    })
                  ),
                    n++;
                }
              }, this),
            t().createElement(
              "div",
              { className: this.props.noScroll ? null : "scrollable-panel" },
              0 == n
                ? t().createElement("div", {
                    className: "center-medium-text",
                    dangerouslySetInnerHTML: {
                      __html: this.props.emptyListMessage,
                    },
                  })
                : null,
              s.length > 0
                ? t().createElement("ul", { className: "contact-box" }, s)
                : null
            )
          );
        }
      }
      const es = (0, i.injectIntl)(Za);
      class ts extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { edited: !1, search: "" }),
            (this.handleSearchChange = this.handleSearchChange.bind(this)),
            (this.handleSearch = this.handleSearch.bind(this)),
            (this.handleClear = this.handleClear.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this));
        }
        componentWillUnmount() {
          this.state.edited &&
            (this.setState({ search: "", edited: !1 }),
            this.props.onSearchContacts(Vt.Tinode.DEL_CHAR));
        }
        handleSearchChange(e) {
          this.setState({ search: e.target.value });
        }
        handleSearch(e) {
          e.preventDefault();
          var t = this.state.search.trim();
          this.setState({ edited: t.length > 0 }),
            this.props.onSearchContacts(t.length > 0 ? t : Vt.Tinode.DEL_CHAR);
        }
        handleClear(e) {
          e.preventDefault(),
            this.state.edited &&
              this.props.onSearchContacts(Vt.Tinode.DEL_CHAR),
            this.setState({ search: "", edited: !1 });
        }
        handleKeyDown(e) {
          "Enter" === e.key
            ? this.handleSearch(e)
            : "Escape" === e.key && this.handleClear();
        }
        render() {
          return t().createElement(
            "div",
            { className: "panel-form" },
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                "i",
                { className: "material-icons search" },
                "search"
              ),
              t().createElement("input", {
                className: "search",
                type: "text",
                placeholder: this.props.placeholder,
                value: this.state.search,
                onChange: this.handleSearchChange,
                onKeyDown: this.handleKeyDown,
                required: !0,
                autoFocus: !0,
              }),
              this.state.search
                ? t().createElement(
                    "a",
                    { href: "#", onClick: this.handleClear },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "highlight_off"
                    )
                  )
                : t().createElement(
                    "span",
                    null,
                    t().createElement("i", { className: "material-icons" }, " ")
                  )
            )
          );
        }
      }
      class as extends t().Component {
        constructor(e) {
          super(e),
            (this.state = { query: null }),
            (this.handleEscapeKey = this.handleEscapeKey.bind(this)),
            (this.handleClose = this.handleClose.bind(this)),
            (this.handleSearchContacts = this.handleSearchContacts.bind(this)),
            (this.handleContactSelected =
              this.handleContactSelected.bind(this));
        }
        componentDidMount() {
          this.props.onInitFind();
        }
        handleEscapeKey(e) {
          27 === e.keyCode && this.props.hide(!1);
        }
        handleClose(e) {
          e.preventDefault(), this.props.hide(!1);
        }
        handleSearchContacts(e) {
          this.setState({ query: Vt.Tinode.isNullValue(e) ? null : e }),
            this.props.onSearchContacts(e);
        }
        handleContactSelected(e) {
          this.props.onTopicSelected(e), this.props.hide(!0);
        }
        render() {
          let e =
            null != this.state.query
              ? this.props.searchResults
              : this.props.contacts;
          return (
            (e = e.filter(
              (e) =>
                e.name != this.props.topicSelected &&
                e.acs.isJoiner() &&
                e.acs.isWriter()
            )),
            t().createElement(
              "div",
              { className: "alert-container" },
              t().createElement(
                "div",
                { className: "forward-dialog" },
                t().createElement(
                  "div",
                  { className: "title with-control" },
                  t().createElement(
                    "div",
                    null,
                    t().createElement(i.FormattedMessage, {
                      id: "forward_to",
                      defaultMessage: [{ type: 0, value: "Forward to" }],
                      desription:
                        "Title of the contact selector dialog when forwarding a message",
                    })
                  ),
                  t().createElement(
                    "div",
                    null,
                    t().createElement(
                      "a",
                      { href: "#", onClick: this.handleClose },
                      t().createElement(
                        "i",
                        { className: "material-icons" },
                        "close"
                      )
                    )
                  )
                ),
                t().createElement(
                  i.FormattedMessage,
                  {
                    id: "forward_to_search_placeholder",
                    defaultMessage: [{ type: 0, value: "Search contacts" }],
                  },
                  (e) =>
                    t().createElement(ts, {
                      placeholder: e,
                      onSearchContacts: this.handleSearchContacts,
                    })
                ),
                t().createElement(
                  i.FormattedMessage,
                  {
                    id: "search_no_results",
                    defaultMessage: [
                      { type: 0, value: "Search returned no results" },
                    ],
                  },
                  (a) =>
                    t().createElement(es, {
                      tinode: this.props.tinode,
                      contacts: e,
                      myUserId: this.props.myUserId,
                      emptyListMessage: a,
                      showOnline: !1,
                      showUnread: !1,
                      showContextMenu: !1,
                      onTopicSelected: this.handleContactSelected,
                    })
                )
              )
            )
          );
        }
      }
      const ss = { staff: "verified_user" },
        ns = (0, i.defineMessages)({
          badge_verified: {
            id: "badge_verified",
            defaultMessage: [{ type: 0, value: "Verified/official" }],
          },
          badge_staff: {
            id: "badge_staff",
            defaultMessage: [{ type: 0, value: "Staff-managed" }],
          },
          badge_danger: {
            id: "badge_danger",
            defaultMessage: [{ type: 0, value: "Untrustworthy" }],
          },
        });
      class is extends t().PureComponent {
        render() {
          const { formatMessage: e } = this.props.intl;
          let a = null;
          return this.props.trustedBadges && this.props.trustedBadges.length > 0
            ? ((a = []),
              this.props.trustedBadges.map((s) => {
                const n = this.props.short ? null : e(ns["badge_" + s]),
                  i = "material-icons " + s + "-color";
                a.push(
                  t().createElement(
                    "div",
                    { className: "trusted-badge", key: s },
                    t().createElement("i", { className: i }, ss[s] || s),
                    " ",
                    n
                  )
                );
              }),
              t().createElement(t().Fragment, null, a))
            : null;
        }
      }
      const os = (0, i.injectIntl)(is),
        rs = "started",
        ls = new Audio("audio/call-in.m4a");
      class cs extends t().Component {
        constructor(e) {
          super(e),
            (this.state = {
              topic: null,
              fullName: void 0,
              avatar: null,
              trustedBadges: [],
              previousMetaDesc: void 0,
            }),
            (this.resetDesc = this.resetDesc.bind(this)),
            (this.onMetaDesc = this.onMetaDesc.bind(this)),
            (this.handleRejectCall = this.handleRejectCall.bind(this)),
            (this.handleAcceptCall = this.handleAcceptCall.bind(this)),
            (this.ringTimer = null);
        }
        componentDidMount() {
          const e = this.props.tinode.getTopic(this.props.topic);
          e &&
            (this.resetDesc(e, this.props),
            2 == this.props.callState &&
              (ls.play().catch((e) => {}),
              (this.ringTimer = setInterval((e) => {
                ls.play().catch((e) => {});
              }, 2e3)),
              this.props.onRinging(this.props.topic, this.props.seq)));
        }
        componentDidUpdate(e) {
          const t = this.props.tinode.getTopic(e.topic);
          t &&
            (this.onMetaDesc != t.onMetaDesc &&
              ((this.previousMetaDesc = t.onMetaDesc),
              (t.onMetaDesc = this.onMetaDesc)),
            this.state.topic != e.topic &&
              (this.setState({ topic: e.topic }), this.resetDesc(t, e)));
        }
        componentWillUnmount() {
          null != this.ringTimer && (clearInterval(this.ringTimer), ls.pause());
          const e = this.props.tinode.getTopic(this.props.topic);
          e &&
            (this.setState({ topic: null }),
            (e.onMetaDesc = this.previousMetaDesc));
        }
        resetDesc(e, t) {
          e.getDefaultAccess(), e.getAccessMode();
          const a = [];
          if (e.trusted)
            for (const [t, s] of Object.entries(e.trusted)) s && a.push(t);
          this.setState({
            fullName: wa(e.public ? e.public.fn : void 0, sa),
            avatar: ka(e.public ? e.public.photo : null),
            trustedBadges: a,
          });
        }
        onMetaDesc(e) {
          const t = this.props.tinode.getTopic(this.props.topic);
          t &&
            (this.resetDesc(t, this.props),
            this.previousMetaDesc &&
              this.previousMetaDesc != this.onMetaDesc &&
              this.previousMetaDesc(e));
        }
        handleAcceptCall() {
          this.props.onAcceptCall(this.props.topic);
        }
        handleRejectCall() {
          this.props.onReject(this.props.topic, this.props.seq),
            this.props.onClose();
        }
        render() {
          return t().createElement(
            "div",
            { className: "alert-container" },
            t().createElement(
              "div",
              { className: "incoming-call" },
              t().createElement(
                "div",
                { className: "caller-card incoming pulse" },
                t().createElement(
                  "div",
                  { className: "avatar-box" },
                  t().createElement(Ca, {
                    tinode: this.props.tinode,
                    avatar: this.state.avatar || !0,
                    topic: this.props.topic,
                    title: this.state.fullName,
                  })
                ),
                t().createElement(
                  "div",
                  { className: "caller-name" },
                  wa(this.state.fullName, 20),
                  t().createElement(os, {
                    short: !0,
                    trustedBadges: this.state.trustedBadges,
                  })
                )
              ),
              t().createElement(
                "div",
                { className: "controls" },
                2 == this.props.callState
                  ? t().createElement(
                      t().Fragment,
                      null,
                      t().createElement(
                        "button",
                        { className: "danger", onClick: this.handleRejectCall },
                        t().createElement(
                          "i",
                          { className: "material-icons" },
                          "call_end"
                        )
                      ),
                      t().createElement(
                        "button",
                        {
                          className: "positive",
                          onClick: this.handleAcceptCall,
                        },
                        t().createElement(
                          "i",
                          { className: "material-icons" },
                          "call"
                        )
                      )
                    )
                  : null
              )
            )
          );
        }
      }
      class ds extends t().PureComponent {
        render() {
          const e =
            "load-spinner-box" +
            (this.props.large ? " large" : "") +
            (this.props.clear ? " clear" : "") +
            (this.props.centered ? " centered" : "");
          return this.props.show
            ? t().createElement(
                "div",
                { className: e },
                t().createElement("div", { className: "loader-spinner" })
              )
            : null;
        }
      }
      class hs extends t().Component {
        constructor(e) {
          super(e),
            (this.state = { source: e.avatar }),
            (this.handleFileReceived = this.handleFileReceived.bind(this));
        }
        componentDidUpdate(e) {
          this.props.avatar != e.avatar &&
            this.setState({ source: this.props.avatar });
        }
        handleFileReceived(e) {
          const t = e.target.files[0];
          this.props.onImageUpdated(t.type, URL.createObjectURL(t), t.name),
            (e.target.value = "");
        }
        render() {
          const e = "file-input-avatar-" + ("" + Math.random()).substring(0, 4),
            a = "avatar-upload" + (this.props.readOnly ? " read-only" : "");
          return t().createElement(
            "div",
            { className: a },
            this.props.readOnly || !this.state.source
              ? null
              : t().createElement(
                  "a",
                  {
                    href: "#",
                    className: "clear-avatar",
                    onClick: (e) => {
                      e.preventDefault(), this.props.onImageUpdated();
                    },
                  },
                  t().createElement(
                    "i",
                    { className: "material-icons" },
                    "clear"
                  )
                ),
            this.state.source
              ? t().createElement("img", {
                  src: this.props.tinode.authorizeURL(
                    ba(this.state.source, "image")
                  ),
                  className: "preview",
                })
              : this.props.readOnly && this.props.uid
              ? t().createElement(
                  "div",
                  { className: "avatar-box" },
                  t().createElement(Ca, {
                    tinode: this.props.tinode,
                    avatar: !0,
                    topic: this.props.uid,
                    title: this.props.title,
                  })
                )
              : t().createElement("div", { className: "blank" }, Zt, "×", Zt),
            this.props.readOnly
              ? null
              : t().createElement("input", {
                  type: "file",
                  id: e,
                  className: "inputfile hidden",
                  accept: "image/*",
                  onChange: this.handleFileReceived,
                }),
            this.props.readOnly
              ? null
              : t().createElement(
                  "label",
                  { htmlFor: e, className: "round" },
                  t().createElement(
                    "i",
                    { className: "material-icons" },
                    "file_upload"
                  )
                ),
            t().createElement(ds, {
              show: this.props.uploading,
              large: !0,
              clear: !0,
              centered: !0,
            })
          );
        }
      }
      class ps extends t().PureComponent {
        constructor(e) {
          super(e), (this.handleChange = this.handleChange.bind(this));
        }
        handleChange() {
          this.props.onChange(this.props.name, !this.props.checked);
        }
        render() {
          let e,
            a = ["material-icons"];
          Array.isArray(this.props.className)
            ? a.push(...this.props.className)
            : this.props.className && a.push(this.props.className),
            this.props.onChange
              ? this.props.checked
                ? (a.push("blue", "clickable"), (e = "check_box"))
                : !1 === this.props.checked
                ? (a.push("blue", "clickable"), (e = "check_box_outline_blank"))
                : (a.push("lt-blue"), (e = "indeterminate_check_box"))
              : (e = this.props.checked
                  ? "check_box"
                  : "check_box_outline_blank");
          let s = { className: a.join(" "), id: this.props.id };
          return (
            this.props.onChange && (s.onClick = this.handleChange),
            t().createElement("i", s, e)
          );
        }
      }
      class us extends t().PureComponent {
        render() {
          return t().createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), this.props.onCancel();
              },
            },
            t().createElement("i", { className: "material-icons" }, "close")
          );
        }
      }
      class ms extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { show: !1 }),
            (this.hide = this.hide.bind(this));
        }
        componentDidUpdate(e) {
          e.level !== this.props.level &&
            this.setState({ show: !!this.props.level });
        }
        hide() {
          this.setState({ show: !1 }),
            this.props.onClearError && this.props.onClearError();
        }
        render() {
          const e =
              { err: "error", warn: "warning", info: "info" }[
                this.props.level
              ] || "",
            a = "info-box " + e;
          return t().createElement(
            "div",
            { className: a },
            t().createElement(
              "div",
              { className: "icon" },
              t().createElement("i", { className: "material-icons" }, e)
            ),
            t().createElement(
              "span",
              null,
              this.props.text,
              this.props.action
                ? t().createElement(
                    t().Fragment,
                    null,
                    t().createElement(
                      "a",
                      {
                        href: "#",
                        style: { whiteSpace: "nowrap" },
                        onClick: (e) => {
                          e.preventDefault(), this.props.action();
                        },
                      },
                      this.props.actionText
                    )
                  )
                : null
            ),
            t().createElement(
              "div",
              { className: "cancel" },
              t().createElement(us, { onCancel: this.hide })
            )
          );
        }
      }
      class gs extends t().PureComponent {
        constructor(e) {
          super(e), (this.handleCancel = this.handleCancel.bind(this));
        }
        handleCancel(e) {
          e.preventDefault(),
            this.props.onCancel(this.props.topic, this.props.index);
        }
        render() {
          const e = this.props.title || this.props.topic,
            a = this.props.invalid ? "chip invalid" : "chip";
          return t().createElement(
            "div",
            { className: a },
            this.props.noAvatar
              ? t().createElement("span", { className: "spacer" })
              : t().createElement(
                  "div",
                  { className: "avatar-box" },
                  t().createElement(Ca, {
                    tinode: this.props.tinode,
                    avatar: this.props.avatar || !0,
                    topic: this.props.topic,
                    title: this.props.title,
                  })
                ),
            t().createElement("span", null, e),
            this.props.onCancel && !this.props.required
              ? t().createElement(
                  "a",
                  { href: "#", onClick: this.handleCancel },
                  "×"
                )
              : t().createElement("span", { className: "spacer" })
          );
        }
      }
      class _s extends t().Component {
        constructor(e) {
          super(e),
            (this.state = _s.deriveStateFromProps(e)),
            (this.state.input = ""),
            (this.state.focused = !1),
            (this.handleTextInput = this.handleTextInput.bind(this)),
            (this.removeChipAt = this.removeChipAt.bind(this)),
            (this.handleChipCancel = this.handleChipCancel.bind(this)),
            (this.handleFocusGained = this.handleFocusGained.bind(this)),
            (this.handleFocusLost = this.handleFocusLost.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this));
        }
        static deriveStateFromProps(e) {
          return {
            placeholder: e.chips ? "" : e.prompt,
            sortedChips: _s.sortChips(e.chips, e.staticMembers),
            chipIndex: _s.indexChips(e.chips),
          };
        }
        componentDidUpdate(e, t) {
          (e.chips == this.props.chips &&
            e.staticMembers == this.props.staticMembers &&
            e.prompt == this.props.prompt) ||
            this.setState(_s.deriveStateFromProps(this.props)),
            (!t || this.props.chips.length > t.sortedChips.length) &&
              this.setState({ input: "" });
        }
        static indexChips(e) {
          const t = {};
          let a = 0;
          return (
            e.map((e) => {
              (t[e.user] = a), a++;
            }),
            t
          );
        }
        static sortChips(e, t) {
          const a = [],
            s = [];
          return (
            e.map((e) => {
              t && t.includes(e.user) ? a.push(e) : s.push(e);
            }),
            a.concat(s)
          );
        }
        handleTextInput(e) {
          this.setState({ input: e.target.value }),
            this.props.filterFunc && this.props.filterFunc(e.target.value);
        }
        removeChipAt(e) {
          const t = this.state.sortedChips[e];
          this.props.onChipRemoved(t.user, this.state.chipIndex[t.user]);
        }
        handleChipCancel(e, t) {
          this.removeChipAt(t);
        }
        handleFocusGained() {
          this.setState({ focused: !0 });
        }
        handleFocusLost() {
          this.setState({ focused: !1 }),
            this.props.onFocusLost && this.props.onFocusLost(this.state.input);
        }
        handleKeyDown(e) {
          if ("Backspace" === e.key) {
            if (
              0 == this.state.input.length &&
              this.state.sortedChips.length > 0
            ) {
              const e = this.state.sortedChips.length - 1;
              this.state.sortedChips[e].user !== this.props.staticMembers &&
                this.removeChipAt(e);
            }
          } else
            "Enter" === e.key
              ? this.props.onEnter && this.props.onEnter(this.state.input)
              : "Escape" === e.key &&
                this.props.onCancel &&
                this.props.onCancel();
        }
        render() {
          const e = [];
          let a = 0;
          const s = this.props.staticMembers || [];
          this.state.sortedChips.map((n) => {
            e.push(
              t().createElement(gs, {
                tinode: this.props.tinode,
                onCancel: this.handleChipCancel,
                avatar: ka(n.public ? n.public.photo : null),
                title: n.public ? n.public.fn : void 0,
                noAvatar: this.props.avatarDisabled,
                topic: n.user,
                required: s.includes(n.user),
                invalid: n.invalid,
                index: a,
                key: n.user,
              })
            ),
              a++;
          });
          const n = "chip-input" + (this.state.focused ? " focused" : ""),
            i = !(this.props.tabIndex > 0);
          return t().createElement(
            "div",
            { className: n },
            e,
            t().createElement("input", {
              type: "text",
              placeholder: this.state.placeholder,
              onChange: this.handleTextInput,
              onFocus: this.handleFocusGained,
              onBlur: this.handleFocusLost,
              onKeyDown: this.handleKeyDown,
              value: this.state.input,
              tabIndex: this.props.tabIndex,
              autoFocus: i,
            })
          );
        }
      }
      const fs = (0, i.defineMessages)({
        no_contacts: {
          id: "no_contacts",
          defaultMessage: [{ type: 0, value: "You have no contacts :-(" }],
        },
        contacts_not_found_short: {
          id: "contacts_not_found_short",
          defaultMessage: [
            { type: 0, value: "No contacts match '" },
            { type: 1, value: "query" },
            { type: 0, value: "'" },
          ],
        },
      });
      class bs extends t().Component {
        constructor(e) {
          super(e),
            (this.state = {
              members: e.members,
              index: bs.indexMembers(e.members),
              staticMembers: bs.staticMembers(
                e.members,
                e.keepInitialMembers,
                e.requiredMember
              ),
              contactFilter: "",
              noContactsMessage: e.intl.formatMessage(fs.no_contacts),
              selectedContacts: bs.selectedContacts(e.members),
            }),
            (this.handleContactSelected =
              this.handleContactSelected.bind(this)),
            (this.handleMemberRemoved = this.handleMemberRemoved.bind(this)),
            (this.handleContactFilter = this.handleContactFilter.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        static indexMembers(e) {
          let t = {};
          return (
            e.map((e) => {
              t[e.user] = { delta: 0, present: !0 };
            }),
            t
          );
        }
        static staticMembers(e, t, a) {
          let s = [];
          return (
            e.map((e) => {
              (t || e.user == a) && s.push(e.user);
            }),
            s
          );
        }
        static selectedContacts(e) {
          let t = [];
          return (
            e.map((e) => {
              t.push(e.user);
            }),
            t
          );
        }
        handleContactSelected(e, t) {
          let a = this.state.index[e];
          if (a) {
            if (a.present) return;
            (a.delta += 1), (a.present = !0);
          } else a = { delta: 1, present: !0 };
          let s = this.state.members.slice();
          s.push(this.props.contacts[t]);
          const n = bs.selectedContacts(s),
            i = this.state.index;
          (i[e] = a),
            this.setState({ members: s, index: i, selectedContacts: n });
        }
        handleMemberRemoved(e, t) {
          const a = this.state.index[e];
          if (!a || !a.present) return;
          (a.present = !1), (a.delta -= 1);
          let s = this.state.members.slice();
          s.splice(t, 1);
          const n = bs.selectedContacts(s),
            i = this.state.index;
          (i[e] = a),
            this.setState({ members: s, index: i, selectedContacts: n });
        }
        handleContactFilter(e) {
          const { formatMessage: t } = this.props.intl,
            a = e
              ? t(fs.contacts_not_found_short, { query: e })
              : t(fs.no_contacts);
          this.setState({ contactFilter: e, noContactsMessage: a });
        }
        static doContactFiltering(e, t) {
          if (e) {
            for (let a = 0; a < t.length; a++)
              if (t[a].indexOf(e) >= 0) return !0;
            return !1;
          }
          return !0;
        }
        handleSubmit() {
          var e = this,
            t = [],
            a = [],
            s = [];
          Object.keys(this.state.index).map(function (n) {
            e.state.index[n].present && t.push(n),
              e.state.index[n].delta > 0
                ? a.push(n)
                : e.state.index[n].delta < 0 && s.push(n);
          }),
            this.props.onSubmit(t, a, s);
        }
        handleCancel() {
          this.props.onCancel();
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          return t().createElement(
            "div",
            { id: "group-manager" },
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                "label",
                { className: "small" },
                t().createElement(i.FormattedMessage, {
                  id: "title_group_members",
                  defaultMessage: [{ type: 0, value: "Group Members" }],
                })
              )
            ),
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(_s, {
                tinode: this.props.tinode,
                chips: this.state.members,
                staticMembers: this.state.staticMembers,
                prompt: "add members",
                filterFunc: this.handleContactFilter,
                onChipRemoved: this.handleMemberRemoved,
              })
            ),
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                "label",
                { className: "small" },
                t().createElement(i.FormattedMessage, {
                  id: "title_all_contacts",
                  defaultMessage: [{ type: 0, value: "All Contacts" }],
                })
              )
            ),
            t().createElement(es, {
              tinode: this.props.tinode,
              contacts: this.props.contacts,
              myUserId: this.props.myUserId,
              topicSelected: this.state.selectedContacts,
              filter: this.state.contactFilter,
              filterFunc: bs.doContactFiltering,
              emptyListMessage: this.state.noContactsMessage,
              showOnline: !1,
              showUnread: !1,
              onTopicSelected: this.handleContactSelected,
            }),
            t().createElement(
              "div",
              { id: "group-manager-buttons", className: "panel-form-row" },
              t().createElement(
                "button",
                { className: "secondary", onClick: this.handleCancel },
                t().createElement(i.FormattedMessage, {
                  id: "button_cancel",
                  defaultMessage: [{ type: 0, value: "Cancel" }],
                })
              ),
              t().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                t().createElement(i.FormattedMessage, {
                  id: "button_ok",
                  defaultMessage: [{ type: 0, value: "OK" }],
                })
              )
            )
          );
        }
      }
      const vs = (0, i.injectIntl)(bs),
        ys = (0, i.defineMessages)({
          joiner: {
            id: "permission_join",
            defaultMessage: [
              { type: 0, value: "Join (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
          reader: {
            id: "permission_read",
            defaultMessage: [
              { type: 0, value: "Read (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
          writer: {
            id: "permission_write",
            defaultMessage: [
              { type: 0, value: "Write (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
          preser: {
            id: "permission_pres",
            defaultMessage: [
              { type: 0, value: "Get notified (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
          approver: {
            id: "permission_admin",
            defaultMessage: [
              { type: 0, value: "Approve (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
          sharer: {
            id: "permission_share",
            defaultMessage: [
              { type: 0, value: "Share (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
          deleter: {
            id: "permission_delete",
            defaultMessage: [
              { type: 0, value: "Delete (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
          owner: {
            id: "permission_owner",
            defaultMessage: [
              { type: 0, value: "Owner (" },
              { type: 1, value: "val" },
              { type: 0, value: ")" },
            ],
          },
        });
      class ws extends t().Component {
        constructor(e) {
          super(e),
            (this.state = { mode: (e.mode || "").replace("N", "") }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        handleChange(e) {
          let t = this.state.mode;
          -1 == t.indexOf(e) ? (t += e) : (t = t.replace(e, "")),
            this.setState({ mode: t });
        }
        handleSubmit() {
          const e = (this.state.mode || "N").split("").sort().join("");
          e !== (this.props.mode || "N").split("").sort().join("")
            ? this.props.onSubmit(e)
            : this.props.onCancel();
        }
        handleCancel() {
          this.props.onCancel();
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            a = "JRWPASDO",
            s = {
              J: e(ys.joiner, { val: "J" }),
              R: e(ys.reader, { val: "R" }),
              W: e(ys.writer, { val: "W" }),
              P: e(ys.preser, { val: "P" }),
              A: e(ys.approver, { val: "A" }),
              S: e(ys.sharer, { val: "S" }),
              D: e(ys.deleter, { val: "D" }),
              O: e(ys.owner, { val: "O" }),
            };
          let n = this.props.skip || "",
            o = this.state.mode,
            r = (this.props.compare || "").replace("N", ""),
            l = [];
          for (let e = 0; e < a.length; e++) {
            let i = a.charAt(e);
            (n.indexOf(i) >= 0 && o.indexOf(i) < 0) ||
              l.push(
                t().createElement(
                  "tr",
                  { key: i },
                  t().createElement("td", null, s[i]),
                  t().createElement(
                    "td",
                    { className: "checkbox" },
                    n.indexOf(i) < 0
                      ? t().createElement(ps, {
                          name: i,
                          checked: o.indexOf(i) >= 0,
                          onChange: this.handleChange,
                        })
                      : t().createElement(ps, {
                          name: i,
                          checked: o.indexOf(i) >= 0,
                        })
                  ),
                  this.props.compare
                    ? t().createElement(
                        "td",
                        { className: "checkbox" },
                        t().createElement(ps, {
                          name: i,
                          checked: r.indexOf(i) >= 0,
                        })
                      )
                    : null
                )
              );
          }
          return t().createElement(
            "div",
            { className: "panel-form-column" },
            this.props.userTitle
              ? t().createElement(
                  "ul",
                  { className: "contact-box small" },
                  t().createElement(Qa, {
                    tinode: this.props.tinode,
                    item: this.props.item,
                    title: this.props.userTitle,
                    small: !0,
                    avatar: ka(
                      this.props.userAvatar ? this.props.userAvatar : null
                    ),
                  })
                )
              : null,
            t().createElement(
              "label",
              { className: "small" },
              t().createElement(i.FormattedMessage, {
                id: "title_permissions",
                defaultMessage: [{ type: 0, value: "Permissions" }],
              })
            ),
            t().createElement(
              "table",
              { className: "permission-editor" },
              this.props.compare
                ? t().createElement(
                    "thead",
                    null,
                    t().createElement(
                      "tr",
                      null,
                      t().createElement("th", null),
                      t().createElement("th", null, this.props.modeTitle),
                      t().createElement("th", null, this.props.compareTitle)
                    )
                  )
                : null,
              t().createElement("tbody", null, l)
            ),
            t().createElement("br", null),
            t().createElement(
              "div",
              { className: "dialog-buttons" },
              t().createElement(
                "button",
                { className: "outline", onClick: this.handleCancel },
                t().createElement(i.FormattedMessage, {
                  id: "button_cancel",
                  defaultMessage: [{ type: 0, value: "Cancel" }],
                })
              ),
              t().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                t().createElement(i.FormattedMessage, {
                  id: "button_ok",
                  defaultMessage: [{ type: 0, value: "OK" }],
                })
              )
            )
          );
        }
      }
      const Cs = (0, i.injectIntl)(ws);
      class Es extends t().Component {
        constructor(e) {
          super(e),
            (this.state = {
              panX: 0,
              panY: 0,
              originX: 0,
              originY: 0,
              zoom: 1,
              minZoom: 0,
              maxZoom: 2.5,
            }),
            (this.overlay = t().createRef()),
            (this.cutout = t().createRef()),
            (this.preview = t().createRef()),
            (this.boundingBox = t().createRef()),
            (this.imageWidth = 0),
            (this.imageHeight = 0),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.prevDistance = 0),
            (this.cutoutRect = {}),
            (this.bBoxRect = {}),
            (this.originX = 0),
            (this.originY = 0),
            (this.initScaling = this.initScaling.bind(this)),
            (this.onZoom = this.onZoom.bind(this)),
            (this.handleZoom = this.handleZoom.bind(this)),
            (this.mouseDown = this.mouseDown.bind(this)),
            (this.mouseUp = this.mouseUp.bind(this)),
            (this.mouseMove = this.mouseMove.bind(this)),
            (this.mouseTouch = this.mouseTouch.bind(this)),
            (this.positionAll = this.positionAll.bind(this)),
            (this.translate = this.translate.bind(this));
        }
        componentDidMount() {
          this.overlay.current.addEventListener("mousedown", this.mouseDown, {
            passive: !0,
          }),
            this.overlay.current.addEventListener(
              "touchstart",
              this.mouseDown,
              { passive: !0 }
            ),
            (this.bBoxRect = this.boundingBox.current.getBoundingClientRect()),
            (this.originX = this.bBoxRect.width / 2),
            (this.originY = this.bBoxRect.height / 2),
            (this.cutoutRect = this.cutout.current.getBoundingClientRect());
        }
        componentWillUnmount() {
          this.overlay.current.removeEventListener("mousedown", this.mouseDown),
            this.overlay.current.removeEventListener(
              "touchstart",
              this.mouseDown
            );
        }
        positionAll(e, t, a) {
          this.setState({
            panX: e,
            panY: t,
            zoom: a,
            originX: this.originX - e,
            originY: this.originY - t,
          });
          const s = (this.originX - e) * a - this.originX,
            n = (this.originY - t) * a - this.originY;
          this.props.onChange(
            (s + this.cutoutRect.left - this.bBoxRect.left) / a,
            (n + this.cutoutRect.top - this.bBoxRect.top) / a,
            this.cutoutRect.width / a,
            this.cutoutRect.height / a,
            a
          );
        }
        static checkBound(e, t, a, s) {
          let n = Math.min(0, a[0] - t[0] - s, t[1] - a[1] + s);
          return (
            (0 == n || Math.min(0, a[0] - t[0], t[1] - a[1]) < n) && (e += s), e
          );
        }
        initScaling() {
          const e = this.preview.current.getBoundingClientRect();
          (this.imageWidth = e.width), (this.imageHeight = e.height);
          const t = Math.max(
            this.cutoutRect.width / e.width,
            this.cutoutRect.height / e.height
          );
          this.setState({ minZoom: t, maxZoom: Math.max(2.5, t + 1) });
          const a = Math.max(
              this.bBoxRect.width / e.width,
              this.bBoxRect.height / e.height
            ),
            s =
              this.cutoutRect.left -
              this.bBoxRect.left -
              (e.width - this.cutoutRect.width) / 2,
            n =
              this.cutoutRect.top -
              this.bBoxRect.top -
              (e.height - this.cutoutRect.height) / 2;
          this.positionAll(s, n, a);
        }
        onZoom(e) {
          this.handleZoom(e.target.value);
        }
        handleZoom(e) {
          let t = this.state.panX,
            a = this.state.panY;
          const s = this.originX - (this.originX - t) * e,
            n = s + this.imageWidth * e,
            i = this.cutoutRect.left - this.bBoxRect.left,
            o = i + this.cutoutRect.width;
          i < s ? (t -= s - i) : o > n && (t += o - n);
          const r = this.originY - (this.originY - a) * e,
            l = r + this.imageHeight * e,
            c = this.cutoutRect.top - this.bBoxRect.top,
            d = c + this.cutoutRect.height;
          c < r ? (a -= r - c) : d > l && (a += d - l),
            this.positionAll(t, a, e);
        }
        mouseDown(e) {
          e.touches
            ? ((this.mouseX = e.touches[0].pageX),
              (this.mouseY = e.touches[0].pageY))
            : ((this.mouseX = e.pageX), (this.mouseY = e.pageY)),
            window.addEventListener("mousemove", this.mouseMove, {
              passive: !1,
            }),
            window.addEventListener("touchmove", this.mouseTouch, {
              passive: !1,
            }),
            window.addEventListener("mouseup", this.mouseUp, { passive: !0 }),
            window.addEventListener("touchend", this.mouseUp, { passive: !0 }),
            (document.body.style.userSelect = "none");
        }
        translate(e, t) {
          const a = e - this.mouseX,
            s = t - this.mouseY;
          (this.mouseX = e), (this.mouseY = t);
          const n = this.preview.current.getBoundingClientRect();
          let i = Es.checkBound(
              this.state.panX,
              [n.left, n.right],
              [this.cutoutRect.left, this.cutoutRect.right],
              a
            ),
            o = Es.checkBound(
              this.state.panY,
              [n.top, n.bottom],
              [this.cutoutRect.top, this.cutoutRect.bottom],
              s
            );
          this.positionAll(i, o, this.state.zoom);
        }
        mouseMove(e) {
          e.preventDefault(), this.translate(e.pageX, e.pageY);
        }
        mouseTouch(e) {
          if ((e.preventDefault(), 1 == e.touches.length))
            return void this.translate(e.touches[0].pageX, e.touches[0].pageY);
          const [t, a] = e.touches,
            s = Math.sqrt(
              (t.pageX - a.pageX) * (t.pageX - a.pageX) +
                (t.pageY - a.pageY) * (t.pageY - a.pageY)
            );
          this.prevDistance || (this.prevDistance = s / this.state.zoom);
          let n = s / this.prevDistance;
          this.handleZoom(Math.max(this.minZoom, Math.min(this.maxZoom, n)));
        }
        mouseUp(e) {
          window.removeEventListener("mousemove", this.mouseMove),
            window.removeEventListener("touchmove", this.mouseTouch),
            window.removeEventListener("mouseup", this.mouseUp),
            window.removeEventListener("touchend", this.mouseUp),
            (document.body.style.userSelect = ""),
            this.positionAll(this.state.panX, this.state.panY, this.state.zoom);
        }
        render() {
          const e = `translate3d(${this.state.panX}px, ${this.state.panY}px, 0) scale(${this.state.zoom})`,
            a = `${this.state.originX}px ${this.state.originY}px`,
            s = {
              top: this.originY - this.state.originY * this.state.zoom + "px",
              left: this.originX - this.state.originX * this.state.zoom + "px",
              width: this.imageWidth * this.state.zoom + "px",
              height: this.imageHeight * this.state.zoom + "px",
            };
          return t().createElement(
            "div",
            { className: "cropper" },
            t().createElement(
              "div",
              { className: "bounding-box", ref: this.boundingBox },
              t().createElement("img", {
                src: this.props.source,
                className: "preview",
                alt: "",
                style: { transform: e, transformOrigin: a },
                ref: this.preview,
                onLoad: this.initScaling,
              }),
              t().createElement("div", {
                className: "cutout circle",
                ref: this.cutout,
              }),
              t().createElement("div", {
                className: "overlay",
                style: s,
                ref: this.overlay,
              })
            ),
            t().createElement(
              "div",
              { className: "zoom-wrapper" },
              t().createElement("input", {
                type: "range",
                className: "zoomer",
                step: "0.001",
                min: this.state.minZoom,
                max: this.state.maxZoom,
                value: this.state.zoom,
                onChange: this.onZoom,
              })
            )
          );
        }
      }
      class Ss extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { top: 0, left: 0, width: 0, height: 0, scale: 1 }),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleChange = this.handleChange.bind(this));
        }
        handleChange(e, t, a, s, n) {
          this.setState({ left: e, top: t, width: a, height: s, scale: n });
        }
        handleSubmit() {
          var e, t, a, s, n, i, o;
          ((e = this.props.mime),
          (t = this.props.avatar),
          (a = this.state.left),
          (s = this.state.top),
          (n = this.state.width),
          (i = this.state.height),
          (o = this.state.scale),
          new Promise((r, l) => {
            const c = new Image();
            (c.crossOrigin = "Anonymous"),
              (c.onerror = (e) => {
                l(new Error("Image format unrecognized"));
              }),
              (c.onload = () => {
                URL.revokeObjectURL(c.src);
                let t = document.createElement("canvas");
                (t.width = n * o), (t.height = i * o);
                let d = t.getContext("2d");
                (d.imageSmoothingEnabled = !0),
                  d.drawImage(c, a, s, n, i, 0, 0, t.width, t.height),
                  (e = Sa.includes(e) ? e : "image/jpeg"),
                  t.toBlob((a) => {
                    (t = null),
                      a
                        ? r({ mime: e, blob: a, width: n, height: i })
                        : l(new Error("Unsupported image format"));
                  }, e);
              }),
              (c.src = t);
          }))
            .then((e) => {
              this.props.onSubmit(e.mime, e.blob, e.width, e.height);
            })
            .catch((e) => {
              this.props.onError(e);
            });
        }
        render() {
          return t().createElement(
            "div",
            { className: "panel-form" },
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(Es, {
                source: this.props.avatar,
                onChange: this.handleChange,
              })
            ),
            t().createElement(
              "div",
              { className: "dialog-buttons" },
              this.props.onCancel
                ? t().createElement(
                    "button",
                    { className: "secondary", onClick: this.props.onCancel },
                    t().createElement(i.FormattedMessage, {
                      id: "button_cancel",
                      defaultMessage: [{ type: 0, value: "Cancel" }],
                    })
                  )
                : null,
              t().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                t().createElement(i.FormattedMessage, {
                  id: "button_ok",
                  defaultMessage: [{ type: 0, value: "OK" }],
                })
              )
            )
          );
        }
      }
      class Ms extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.inputRef = t().createRef()),
            (this.state = { value: this.props.value, visible: !1 }),
            (this.handleVisibility = this.handleVisibility.bind(this)),
            (this.handeTextChange = this.handeTextChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleEditingFinished =
              this.handleEditingFinished.bind(this));
        }
        componentDidMount() {
          this.props.autoFocus && this.inputRef.current.focus();
        }
        handeTextChange(e) {
          this.setState({ value: e.target.value }),
            this.props.onChange && this.props.onChange(e);
        }
        handleVisibility(e) {
          e.preventDefault(), this.setState({ visible: !this.state.visible });
        }
        handleKeyDown(e) {
          27 == e.keyCode
            ? (this.setState({ value: this.props.value, visible: !1 }),
              this.props.onFinished && this.props.onFinished())
            : 13 == e.keyCode && this.handleEditingFinished();
        }
        handleEditingFinished(e) {
          if (e) {
            let t = e.currentTarget;
            setTimeout(() => {
              t.contains(document.activeElement) ||
                (this.props.onFinished &&
                  this.props.onFinished(this.state.value));
            }, 0);
          } else
            this.props.onFinished &&
              this.props.onFinished(this.state.value.trim());
        }
        render() {
          return t().createElement(
            "div",
            {
              tabIndex: "-1",
              className: "group-focus",
              onBlur: this.handleEditingFinished,
            },
            t().createElement("input", {
              className: "with-visibility",
              type: this.state.visible ? "text" : "password",
              value: this.state.value,
              placeholder: this.props.placeholder,
              required: this.props.required ? "required" : "",
              autoFocus: this.props.autoFocus ? "autoFocus" : "",
              autoComplete: this.props.autoComplete,
              onChange: this.handeTextChange,
              onKeyDown: this.handleKeyDown,
              ref: this.inputRef,
            }),
            t().createElement(
              "span",
              { onClick: this.handleVisibility },
              t().createElement(
                "i",
                { className: "material-icons clickable light-gray" },
                this.state.visible ? "visibility" : "visibility_off"
              )
            )
          );
        }
      }
      class ks extends t().Component {
        constructor(e) {
          super(e),
            (this.selfRef = t().createRef()),
            (this.state = {
              active: e.active,
              initialValue: e.value || "",
              value: e.value || "",
            }),
            (this.handeTextChange = this.handeTextChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleStartEditing = this.handleStartEditing.bind(this)),
            (this.handleEditingFinished =
              this.handleEditingFinished.bind(this)),
            (this.handlePasswordFinished =
              this.handlePasswordFinished.bind(this));
        }
        componentDidUpdate(e, t) {
          const a = this.props.value || "";
          t.initialValue == a ||
            t.active ||
            this.setState({ initialValue: a, value: a });
        }
        handeTextChange(e) {
          this.setState({ value: e.target.value || "" });
        }
        handleKeyDown(e) {
          27 === e.keyCode
            ? this.setState({ value: this.props.value, active: !1 })
            : 13 === e.keyCode && this.handleEditingFinished(e);
        }
        handleStartEditing() {
          this.props.readOnly ||
            this.setState({ active: !0 }, () => {
              this.selfRef.current && this.selfRef.current.focus();
            });
        }
        handleEditingFinished(e) {
          const t = this.state.value.trim();
          !this.props.required || (e.target.checkValidity() && t)
            ? (this.setState({ active: !1 }),
              (t || this.props.value) &&
                t !== this.props.value &&
                this.props.onFinished(t))
            : this.setState({ value: this.props.value, active: !1 });
        }
        handlePasswordFinished(e) {
          this.setState({ active: !1 }),
            e && e !== this.props.value && this.props.onFinished(e);
        }
        render() {
          if (!this.state.active) {
            let e =
                "password" == this.props.type ? "••••••••" : this.state.value,
              a = "in-place-edit" + (this.props.readOnly ? " disabled" : "");
            return (
              e || ((e = this.props.placeholder), (a += " placeholder")),
              (this.props.multiline && 1 != this.props.multiline) ||
                (a += " short"),
              t().createElement(
                "span",
                { className: a, onClick: this.handleStartEditing },
                t().createElement("span", null, e)
              )
            );
          }
          let e;
          const a = {};
          return (
            "password" == this.props.type
              ? ((e = Ms), (a.onFinished = this.handlePasswordFinished))
              : (this.props.multiline > 1
                  ? ((e = "textarea"),
                    (a.rows = this.props.multiline),
                    (a.className = "inplace-edit"))
                  : ((e = "input"), (a.type = this.props.type || "text")),
                (a.value = this.state.value),
                (a.ref = this.selfRef),
                (a.onChange = this.handeTextChange),
                (a.onKeyDown = this.handleKeyDown),
                (a.onBlur = this.handleEditingFinished)),
            (a.placeholder = this.props.placeholder),
            (a.required = this.props.required ? "required" : ""),
            (a.autoComplete = this.props.autoComplete),
            (a.autoFocus = !0),
            t().createElement(e, a, null)
          );
        }
      }
      class Ts extends t().Component {
        constructor(e) {
          super(e),
            (this.state = {
              tags: this.props.tags || [],
              tagInput: "",
              activated: this.props.activated,
            }),
            (this.handleTagInput = this.handleTagInput.bind(this)),
            (this.handleAddTag = this.handleAddTag.bind(this)),
            (this.handleRemoveTag = this.handleRemoveTag.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        static getDerivedStateFromProps(e, t) {
          const a = e.tags || [];
          return _a(a, t.tags) || t.activated ? null : { tags: a };
        }
        handleTagInput(e) {
          if ((this.setState({ tagInput: e }), e.length > 0)) {
            const t = e[e.length - 1];
            '"' == e[0]
              ? e.length > 1 &&
                '"' == t &&
                this.handleAddTag(e.substring(1, e.length - 1))
              : ("," != t && " " != t && ";" != t && '"' != t) ||
                this.handleAddTag(e.substring(0, e.length - 1).trim());
          }
        }
        handleAddTag(e) {
          const t = this.props.tinode.getServerParam("maxTagCount", 16);
          if (e.length > 0 && this.state.tags.length < t) {
            const t = this.state.tags.slice(0);
            return (
              t.push(e),
              this.setState({ tags: t, tagInput: "" }),
              this.props.onTagsChanged && this.props.onTagsChanged(t),
              t
            );
          }
          return this.state.tags;
        }
        handleRemoveTag(e, t) {
          const a = this.state.tags.slice(0);
          a.splice(t, 1),
            this.setState({ tags: a }),
            this.props.onTagsChanged && this.props.onTagsChanged(a);
        }
        handleSubmit() {
          this.props.onSubmit(this.handleAddTag(this.state.tagInput.trim())),
            this.setState({ activated: !1, tags: this.props.tags || [] });
        }
        handleCancel() {
          this.setState({
            activated: !1,
            tagInput: "",
            tags: this.props.tags || [],
          }),
            this.props.onCancel && this.props.onCancel();
        }
        render() {
          const e = this.props.tinode.getServerParam("minTagLength", 2),
            a = this.props.tinode.getServerParam("maxTagLength", 96);
          let s = [];
          return (
            this.state.activated
              ? this.state.tags.map((t) => {
                  s.push({ user: t, invalid: t.length < e || t.length > a });
                })
              : (this.state.tags.map((e) => {
                  s.push(
                    t().createElement(
                      "span",
                      { className: "badge", key: s.length },
                      e
                    )
                  );
                }),
                0 == s.length &&
                  (s = t().createElement(
                    "i",
                    null,
                    t().createElement(i.FormattedMessage, {
                      id: "tags_not_found",
                      defaultMessage: [
                        { type: 0, value: "No tags defined. Add some." },
                      ],
                    })
                  ))),
            t().createElement(
              "div",
              { className: "panel-form-column" },
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "label",
                  { className: "small" },
                  this.props.title
                )
              ),
              this.state.activated
                ? t().createElement(
                    "div",
                    null,
                    t().createElement(
                      i.FormattedMessage,
                      {
                        id: "tags_editor_no_tags",
                        defaultMessage: [{ type: 0, value: "Add some tags" }],
                      },
                      (e) =>
                        t().createElement(_s, {
                          tinode: this.props.tinode,
                          chips: s,
                          avatarDisabled: !0,
                          prompt: e,
                          tabIndex: this.props.tabIndex,
                          onEnter: this.handleAddTag,
                          onFocusLost: this.handleAddTag,
                          onCancel: this.handleCancel,
                          onChipRemoved: this.handleRemoveTag,
                          filterFunc: this.handleTagInput,
                        })
                    ),
                    this.props.onSubmit || this.props.onCancel
                      ? t().createElement(
                          "div",
                          {
                            id: "tag-manager-buttons",
                            className: "dialog-buttons panel-form-row",
                          },
                          t().createElement(
                            "button",
                            {
                              className: "outline",
                              onClick: this.handleCancel,
                            },
                            t().createElement(i.FormattedMessage, {
                              id: "button_cancel",
                              defaultMessage: [{ type: 0, value: "Cancel" }],
                            })
                          ),
                          t().createElement(
                            "button",
                            {
                              className: "primary",
                              onClick: this.handleSubmit,
                            },
                            t().createElement(i.FormattedMessage, {
                              id: "button_ok",
                              defaultMessage: [{ type: 0, value: "OK" }],
                            })
                          )
                        )
                      : null
                  )
                : t().createElement(
                    "div",
                    { className: "quoted" },
                    t().createElement(
                      "a",
                      {
                        href: "#",
                        className: "flat-button",
                        onClick: (e) => {
                          e.preventDefault(), this.setState({ activated: !0 });
                        },
                      },
                      t().createElement(
                        "i",
                        { className: "material-icons" },
                        "edit"
                      ),
                      "  ",
                      t().createElement(i.FormattedMessage, {
                        id: "title_manage_tags",
                        defaultMessage: [{ type: 0, value: "Manage" }],
                      })
                    ),
                    t().createElement(t().Fragment, null, s)
                  )
            )
          );
        }
      }
      class Ns extends t().Component {
        constructor(e) {
          super(e);
          const t = this.props.tinode.getTopic(this.props.topic),
            a = t.getAccessMode();
          (this.state = {
            isMe: Vt.Tinode.isMeTopicName(this.props.topic),
            owner: a && a.isOwner(),
            fullName: t.public ? t.public.fn : void 0,
            private: t.private ? t.private.comment : null,
            description: t.public ? t.public.note : void 0,
            avatar: ka(t.public ? t.public.photo : null),
            tags: t.tags() || [],
            newAvatar: null,
            newAvatarMime: null,
          }),
            (this.previousOnTags = null),
            (this.tnNewTags = this.tnNewTags.bind(this)),
            (this.handleFullNameUpdate = this.handleFullNameUpdate.bind(this)),
            (this.handleImageUpdated = this.handleImageUpdated.bind(this)),
            (this.handleAvatarCropped = this.handleAvatarCropped.bind(this)),
            (this.handleAvatarCropCancel =
              this.handleAvatarCropCancel.bind(this)),
            (this.uploadAvatar = this.uploadAvatar.bind(this)),
            (this.handlePrivateUpdate = this.handlePrivateUpdate.bind(this)),
            (this.handleDescriptionUpdate =
              this.handleDescriptionUpdate.bind(this)),
            (this.handleTagsUpdated = this.handleTagsUpdated.bind(this));
        }
        componentDidMount() {
          const e = this.props.tinode.getTopic(this.props.topic);
          (this.previousOnTags = e.onTagsUpdated),
            (e.onTagsUpdated = this.tnNewTags);
        }
        componentWillUnmount() {
          this.props.tinode.getTopic(this.props.topic).onTagsUpdated =
            this.previousOnTags;
        }
        tnNewTags(e) {
          this.setState({ tags: e });
        }
        handleFullNameUpdate(e) {
          (e = e.trim().substring(0, sa)) &&
            this.state.fullName !== e &&
            (this.setState({ fullName: e }),
            this.props.onUpdateTopicDesc(this.props.topic, ga(e, null)));
        }
        handlePrivateUpdate(e) {
          (e = e.trim().substring(0, sa)),
            this.state.private !== e &&
              (this.setState({ private: e }),
              this.props.onUpdateTopicDesc(
                this.props.topic,
                null,
                e || Vt.Tinode.DEL_CHAR
              ));
        }
        handleDescriptionUpdate(e) {
          (e = e.trim().substring(0, na)) &&
            (this.setState({ description: e }),
            this.props.onUpdateTopicDesc(
              this.props.topic,
              ga(null, null, null, e)
            ));
        }
        handleImageUpdated(e, t) {
          this.setState({ newAvatar: t, newAvatarMime: e }),
            t ||
              (this.setState({ avatar: null }),
              this.props.onUpdateTopicDesc(
                this.props.topic,
                ga(null, Vt.Tinode.DEL_CHAR)
              ));
        }
        handleAvatarCropped(e, t, a, s) {
          const n = t ? URL.createObjectURL(t) : null;
          this.setState({ avatar: n, newAvatar: null, newAvatarMime: null }),
            t && this.uploadAvatar(e, t, a, s);
        }
        uploadAvatar(e, t, a, s) {
          const n = (e) => {
            let { mime: t, blob: a } = e;
            if (a.size > 4096) {
              this.props.tinode
                .getLargeFileHelper()
                .upload(a)
                .then((e) =>
                  this.props.onUpdateTopicDesc(this.props.topic, ga(null, e))
                )
                .catch((e) => this.props.onError(e.message, "err"));
            } else
              Da(a).then((e) => {
                const a = ka({ data: e.bits, type: t });
                this.setState({ source: a }),
                  this.props.onUpdateTopicDesc(this.props.topic, ga(null, a));
              });
          };
          a > Zt || s > Zt || a != s
            ? Aa(t, Zt, Zt, ta, !0)
                .then((e) => n(e))
                .catch((e) => this.props.onError(e.message, "err"))
            : n({ mime: e, blob: t, width: a, height: s });
        }
        handleAvatarCropCancel() {
          this.setState({ newAvatar: null, newAvatarMime: null });
        }
        handleTagsUpdated(e) {
          _a(this.state.tags.slice(0), e.slice(0)) ||
            this.props.onUpdateTags(e);
        }
        render() {
          if (this.state.newAvatar)
            return t().createElement(Ss, {
              avatar: this.state.newAvatar,
              mime: this.state.newAvatarMime,
              onSubmit: this.handleAvatarCropped,
              onCancel: this.handleAvatarCropCancel,
              onError: this.props.onError,
            });
          const e = this.state.isMe || this.state.owner;
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "div",
              { className: "panel-form-column" },
              t().createElement(
                "center",
                null,
                t().createElement(hs, {
                  tinode: this.props.tinode,
                  avatar: this.state.avatar,
                  readOnly: !e,
                  uid: this.props.topic,
                  title: this.state.fullName,
                  onImageUpdated: this.handleImageUpdated,
                  onError: this.props.onError,
                })
              ),
              this.state.isMe
                ? t().createElement(
                    "div",
                    { className: "group" },
                    t().createElement(
                      "label",
                      { className: "small" },
                      t().createElement(i.FormattedMessage, {
                        id: "label_your_name",
                        defaultMessage: [{ type: 0, value: "Your name" }],
                      })
                    ),
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        i.FormattedMessage,
                        {
                          id: "full_name_prompt",
                          defaultMessage: [
                            { type: 0, value: "Full name, e.g. John Doe" },
                          ],
                        },
                        (e) =>
                          t().createElement(ks, {
                            placeholder: e,
                            value: this.state.fullName,
                            required: !0,
                            onFinished: this.handleFullNameUpdate,
                          })
                      )
                    )
                  )
                : t().createElement(
                    t().Fragment,
                    null,
                    t().createElement(
                      "div",
                      { className: "group" },
                      t().createElement(
                        "div",
                        null,
                        t().createElement(
                          "label",
                          { className: "small" },
                          t().createElement(i.FormattedMessage, {
                            id: "label_topic_name",
                            defaultMessage: [{ type: 0, value: "Name" }],
                          })
                        )
                      ),
                      t().createElement(
                        "div",
                        null,
                        t().createElement(
                          i.FormattedMessage,
                          {
                            id: "topic_name_editing_placeholder",
                            defaultMessage: [
                              { type: 0, value: "Freeform name of the group" },
                            ],
                          },
                          (a) =>
                            t().createElement(ks, {
                              placeholder: a,
                              readOnly: !e,
                              value: this.state.fullName,
                              required: !0,
                              onFinished: this.handleFullNameUpdate,
                            })
                        )
                      )
                    ),
                    t().createElement(
                      "div",
                      { className: "group" },
                      t().createElement(
                        "div",
                        null,
                        t().createElement(
                          "label",
                          { className: "small" },
                          t().createElement(i.FormattedMessage, {
                            id: "label_private",
                            defaultMessage: [
                              { type: 0, value: "Private comment" },
                            ],
                          })
                        )
                      ),
                      t().createElement(
                        "div",
                        null,
                        t().createElement(
                          i.FormattedMessage,
                          {
                            id: "private_editing_placeholder",
                            defaultMessage: [
                              { type: 0, value: "Visible to you only" },
                            ],
                          },
                          (e) =>
                            t().createElement(ks, {
                              placeholder: e,
                              value: this.state.private,
                              onFinished: this.handlePrivateUpdate,
                            })
                        )
                      )
                    )
                  ),
              e || this.state.description
                ? t().createElement(
                    "div",
                    { className: "group" },
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "label",
                        { className: "small" },
                        t().createElement(i.FormattedMessage, {
                          id: "label_description",
                          defaultMessage: [{ type: 0, value: "Description" }],
                        })
                      )
                    ),
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        i.FormattedMessage,
                        {
                          id: "description_editing_placeholder",
                          defaultMessage: [
                            { type: 0, value: "Description (optional)" },
                          ],
                        },
                        (a) =>
                          t().createElement(ks, {
                            placeholder: a,
                            readOnly: !e,
                            value: this.state.description,
                            multiline: 2,
                            onFinished: this.handleDescriptionUpdate,
                          })
                      )
                    )
                  )
                : null
            ),
            e
              ? t().createElement(
                  t().Fragment,
                  null,
                  t().createElement("div", { className: "hr" }),
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "title_tag_manager",
                      defaultMessage: [
                        { type: 0, value: "Tags (search & discovery)" },
                      ],
                    },
                    (e) =>
                      t().createElement(Ts, {
                        tinode: this.props.tinode,
                        title: e,
                        activated: !1,
                        tags: this.state.tags,
                        onSubmit: this.handleTagsUpdated,
                      })
                  )
                )
              : null
          );
        }
      }
      class As extends t().Component {
        constructor(e) {
          super(e);
          const t = this.props.tinode.getTopic(this.props.topic),
            a = t.getAccessMode();
          (this.state = {
            isMe: "me" == this.props.topic,
            owner: a && a.isOwner(),
            credentials: (t.getCredentials ? t.getCredentials() : null) || [],
            addCredActive: !1,
            addCredInvalid: !1,
            newCred: "",
            tags: [],
          }),
            (this.previousTagsUpdated = void 0),
            (this.onTagsUpdated = this.onTagsUpdated.bind(this)),
            (this.handleTagsUpdated = this.handleTagsUpdated.bind(this)),
            (this.tnCredsUpdated = this.tnCredsUpdated.bind(this)),
            (this.handleCredChange = this.handleCredChange.bind(this)),
            (this.handleCredKeyDown = this.handleCredKeyDown.bind(this)),
            (this.handleCredEntered = this.handleCredEntered.bind(this));
        }
        componentDidUpdate(e) {
          const t = this.props.tinode.getTopic(e.topic);
          t &&
            ((t.onCredsUpdated = this.tnCredsUpdated),
            t.onTagsUpdated != this.onTagsUpdated &&
              ("grp" == t.getType()
                ? ((this.previousTagsUpdated = t.onTagsUpdated),
                  (t.onTagsUpdated = this.onTagsUpdated))
                : (this.previousTagsUpdated = void 0)),
            this.state.topic != e.topic && this.setState({ topic: e.topic }));
        }
        componentWillUnmount() {
          const e = this.props.tinode.getTopic(this.props.topic);
          (e.onCredsUpdated = void 0),
            (e.onTagsUpdated = this.previousTagsUpdated);
        }
        tnCredsUpdated(e) {
          this.setState({ credentials: e || [] });
        }
        handleCredChange(e) {
          this.setState({ newCred: e.target.value, addCredInvalid: !1 });
        }
        handleCredKeyDown(e) {
          27 === e.keyCode
            ? this.setState({ newCred: "", addCredActive: !1 })
            : 13 === e.keyCode && this.handleCredEntered(e);
        }
        handleCredEntered(e) {
          const t = this.state.newCred.trim();
          if (!t)
            return void this.setState({
              addCredActive: !1,
              addCredInvalid: !1,
            });
          let a,
            s = (function (e) {
              return (
                (e = e.trim()),
                /^(?:\+?(\d{1,3}))?[- (.]*(\d{3})[- ).]*(\d{3})[- .]*(\d{2})[- .]*(\d{2})?$/.test(
                  e
                )
                  ? e.replace(/[- ().]*/, "")
                  : null
              );
            })(t);
          s
            ? (a = "tel")
            : ((s = (function (e) {
                return (
                  (e = e.trim()),
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e)
                    ? e
                    : null
                );
              })(t)),
              s && (a = "email")),
            a
              ? (this.props.onCredAdd(a, s),
                this.setState({ addCredActive: !1, newCred: "" }))
              : this.setState({ addCredInvalid: !0 });
        }
        onTagsUpdated(e) {
          this.setState({ tags: e }),
            this.previousTagsUpdated &&
              this.previousTagsUpdated != this.onTagsUpdated &&
              this.previousTagsUpdated(e);
        }
        handleTagsUpdated(e) {
          _a(this.state.tags.slice(0), e.slice(0)) ||
            this.props.onTopicTagsUpdateRequest(this.props.topic, e);
        }
        render() {
          const e = [];
          return (
            this.state.isMe &&
              this.state.credentials.map((a) => {
                e.push(
                  t().createElement(
                    "div",
                    { key: a.meth + ":" + a.val + ":" + a.done },
                    a.meth,
                    ": ",
                    t().createElement("tt", null, a.val),
                    t().createElement(
                      "span",
                      null,
                      " ",
                      a.done
                        ? null
                        : t().createElement(
                            "a",
                            {
                              href: "#",
                              onClick: (e) => {
                                e.preventDefault(),
                                  this.props.onCredConfirm(a.meth, a.val);
                              },
                            },
                            t().createElement(i.FormattedMessage, {
                              id: "validate_credential_action",
                              defaultMessage: [{ type: 0, value: "confirm" }],
                            })
                          ),
                      " ",
                      t().createElement(
                        "a",
                        {
                          href: "#",
                          onClick: (e) => {
                            e.preventDefault(),
                              this.props.onCredDelete(a.meth, a.val);
                          },
                        },
                        t().createElement(
                          "i",
                          { className: "material-icons gray" },
                          "delete_outline"
                        )
                      )
                    )
                  )
                );
              }),
            t().createElement(
              "div",
              { className: "scrollable-panel" },
              t().createElement(Ns, {
                tinode: this.props.tinode,
                topic: this.props.topic,
                onUpdateTopicDesc: this.props.onUpdateTopicDesc,
                onUpdateTags: this.handleTagsUpdated,
                onError: this.props.onError,
              }),
              this.state.isMe
                ? t().createElement(
                    t().Fragment,
                    null,
                    t().createElement("div", { className: "hr" }),
                    t().createElement(
                      "div",
                      { className: "panel-form-column" },
                      t().createElement(
                        "label",
                        { className: "small" },
                        t().createElement(i.FormattedMessage, {
                          id: "label_user_contacts",
                          defaultMessage: [{ type: 0, value: "Contacts:" }],
                        })
                      ),
                      t().createElement(
                        "div",
                        { className: "quoted" },
                        e,
                        this.state.addCredActive
                          ? t().createElement(
                              i.FormattedMessage,
                              {
                                id: "phone_or_email_prompt",
                                defaultMessage: [
                                  { type: 0, value: "Phone number or email" },
                                ],
                              },
                              (e) =>
                                t().createElement("input", {
                                  type: "text",
                                  value: this.state.value,
                                  className: this.state.addCredInvalid
                                    ? "invalid"
                                    : null,
                                  placeholder: e,
                                  required: "required",
                                  autoFocus: !0,
                                  onChange: this.handleCredChange,
                                  onKeyDown: this.handleCredKeyDown,
                                  onBlur: this.handleCredEntered,
                                })
                            )
                          : null,
                        t().createElement(
                          "div",
                          null,
                          t().createElement(
                            "a",
                            {
                              href: "#",
                              onClick: (e) => {
                                e.preventDefault(),
                                  this.setState({ addCredActive: !0 });
                              },
                            },
                            t().createElement(
                              "i",
                              { className: "material-icons" },
                              "add"
                            ),
                            t().createElement(i.FormattedMessage, {
                              id: "button_add_another",
                              defaultMessage: [
                                { type: 0, value: "Add another" },
                              ],
                            })
                          )
                        )
                      )
                    )
                  )
                : null
            )
          );
        }
      }
      const Ds = (0, i.defineMessages)({
        clear_messages: {
          id: "action_clear_messages",
          defaultMessage: [{ type: 0, value: "Clear Messages" }],
        },
        clear_messages_warning: {
          id: "clear_messages_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to clear all messages? It cannot be undone.",
            },
          ],
        },
        delete_messages: {
          id: "action_delete_messages",
          defaultMessage: [{ type: 0, value: "Clear Messages for All" }],
        },
        delete_messages_warning: {
          id: "delete_messages_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to delete all messages for everyone? It cannot be undone.",
            },
          ],
        },
        topic_delete: {
          id: "topic_delete",
          defaultMessage: [{ type: 0, value: "Delete Conversation" }],
        },
        topic_delete_warning: {
          id: "topic_delete_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to delete this conversation? It cannot be undone.",
            },
          ],
        },
        leave_chat: {
          id: "action_leave_chat",
          defaultMessage: [{ type: 0, value: "Leave Conversation" }],
        },
        leave_chat_warning: {
          id: "leave_chat_warning",
          defaultMessage: [
            {
              type: 0,
              value: "Are you sure you want to leave this conversation?",
            },
          ],
        },
        block_contact: {
          id: "action_block_contact",
          defaultMessage: [{ type: 0, value: "Block Contact" }],
        },
        block_contact_warning: {
          id: "block_contact_warning",
          defaultMessage: [
            { type: 0, value: "Are you sure you want to block this contact?" },
          ],
        },
        report_chat: {
          id: "action_report_chat",
          defaultMessage: [{ type: 0, value: "Report Conversation" }],
        },
        report_chat_warning: {
          id: "report_chat_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to block and report this conversation?",
            },
          ],
        },
        other_user: {
          id: "label_other_user",
          defaultMessage: [{ type: 0, value: "Other" }],
        },
      });
      class Is extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.handleDeleteTopic = this.handleDeleteTopic.bind(this)),
            (this.handleDeleteMessages = this.handleDeleteMessages.bind(this)),
            (this.handleLeave = this.handleLeave.bind(this)),
            (this.handleBlock = this.handleBlock.bind(this)),
            (this.handleReport = this.handleReport.bind(this));
        }
        handleDeleteTopic(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ds.topic_delete),
            t(Ds.topic_delete_warning),
            () => {
              this.props.onDeleteTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleDeleteMessages(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(this.props.deleter ? Ds.delete_messages : Ds.clear_messages),
            t(
              this.props.deleter
                ? Ds.delete_messages_warning
                : Ds.clear_messages_warning
            ),
            () => {
              this.props.onDeleteMessages(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleLeave(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ds.leave_chat),
            t(Ds.leave_chat_warning),
            () => {
              this.props.onLeaveTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleBlock(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ds.block_contact),
            t(Ds.block_contact_warning),
            () => {
              this.props.onBlockTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleReport(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ds.report_chat),
            t(Ds.report_chat_warning),
            (e) => {
              this.props.onReportTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          return t().createElement(
            "div",
            { className: "scrollable-panel" },
            t().createElement(
              "div",
              { className: "panel-form-column" },
              this.props.channel
                ? null
                : t().createElement(
                    "a",
                    {
                      href: "#",
                      className: "flat-button",
                      onClick: this.handleDeleteMessages,
                    },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "delete_outline"
                    ),
                    "  ",
                    e(
                      this.props.deleter
                        ? Ds.delete_messages
                        : Ds.clear_messages
                    )
                  ),
              this.props.owner
                ? t().createElement(
                    "a",
                    {
                      href: "#",
                      className: "danger flat-button",
                      onClick: this.handleDeleteTopic,
                    },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "delete"
                    ),
                    "  ",
                    e(Ds.topic_delete)
                  )
                : t().createElement(
                    "a",
                    {
                      href: "#",
                      className: "danger flat-button",
                      onClick: this.handleLeave,
                    },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "exit_to_app"
                    ),
                    "  ",
                    e(Ds.leave_chat)
                  ),
              this.props.groupTopic
                ? null
                : t().createElement(
                    "a",
                    {
                      href: "#",
                      className: "danger flat-button",
                      onClick: this.handleBlock,
                    },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "block"
                    ),
                    "  ",
                    e(Ds.block_contact)
                  ),
              this.props.owner
                ? null
                : t().createElement(
                    "a",
                    {
                      href: "#",
                      className: "danger flat-button",
                      onClick: this.handleReport,
                    },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "report"
                    ),
                    "  ",
                    e(Ds.report_chat)
                  )
            ),
            t().createElement("div", { className: "hr" }),
            t().createElement(
              "div",
              { className: "panel-form-column" },
              this.props.groupTopic
                ? t().createElement(
                    t().Fragment,
                    null,
                    t().createElement(
                      "div",
                      { className: "group" },
                      t().createElement(
                        "label",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_your_permissions",
                          defaultMessage: [
                            { type: 0, value: "Your permissions:" },
                          ],
                        })
                      ),
                      " ",
                      t().createElement(
                        "tt",
                        {
                          className: "clickable",
                          onClick: (e) => {
                            e.preventDefault(),
                              this.props.onLaunchPermissionsEditor("want");
                          },
                        },
                        this.props.access
                      )
                    ),
                    this.props.channel
                      ? null
                      : t().createElement(
                          "div",
                          { className: "group" },
                          t().createElement(
                            "div",
                            null,
                            t().createElement(
                              "label",
                              { className: "small" },
                              t().createElement(i.FormattedMessage, {
                                id: "label_default_access_mode",
                                defaultMessage: [
                                  { type: 0, value: "Default access mode:" },
                                ],
                              })
                            )
                          ),
                          t().createElement(
                            "div",
                            { className: "quoted" },
                            t().createElement(
                              "div",
                              null,
                              "Auth: ",
                              t().createElement(
                                "tt",
                                {
                                  className: this.props.owner
                                    ? "clickable"
                                    : null,
                                  onClick: (e) => {
                                    e.preventDefault(),
                                      this.props.owner &&
                                        this.props.onLaunchPermissionsEditor(
                                          "auth"
                                        );
                                  },
                                },
                                this.props.auth
                              )
                            ),
                            t().createElement(
                              "div",
                              null,
                              "Anon: ",
                              t().createElement(
                                "tt",
                                {
                                  className: this.props.owner
                                    ? "clickable"
                                    : null,
                                  onClick: (e) => {
                                    e.preventDefault(),
                                      this.props.owner &&
                                        this.props.onLaunchPermissionsEditor(
                                          "anon"
                                        );
                                  },
                                },
                                this.props.anon
                              )
                            )
                          )
                        )
                  )
                : t().createElement(
                    "div",
                    { className: "group" },
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "label",
                        { className: "small" },
                        t().createElement(i.FormattedMessage, {
                          id: "label_permissions",
                          defaultMessage: [{ type: 0, value: "Permissions:" }],
                        })
                      )
                    ),
                    t().createElement(
                      "div",
                      { className: "quoted" },
                      t().createElement(
                        "div",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_you",
                          defaultMessage: [{ type: 0, value: "You:" }],
                        }),
                        " ",
                        t().createElement(
                          "tt",
                          {
                            className: "clickable",
                            onClick: (e) => {
                              e.preventDefault(),
                                this.props.onLaunchPermissionsEditor("want");
                            },
                          },
                          this.props.access
                        )
                      ),
                      t().createElement(
                        "div",
                        null,
                        this.props.fullName
                          ? this.props.fullName
                          : e(Ds.other_user),
                        ":  ",
                        t().createElement(
                          "tt",
                          {
                            className: "clickable",
                            onClick: (e) => {
                              e.preventDefault(),
                                this.props.onLaunchPermissionsEditor("given");
                            },
                          },
                          this.props.modeGiven2
                        )
                      )
                    )
                  )
            )
          );
        }
      }
      const Ps = (0, i.injectIntl)(Is),
        Us = (0, i.defineMessages)({
          info: {
            id: "panel_title_info",
            defaultMessage: [{ type: 0, value: "Info" }],
          },
          general: {
            id: "panel_title_general",
            defaultMessage: [{ type: 0, value: "General" }],
          },
          security: {
            id: "panel_title_security",
            defaultMessage: [{ type: 0, value: "Security" }],
          },
          members: {
            id: "panel_title_members",
            defaultMessage: [{ type: 0, value: "Members" }],
          },
          crop: {
            id: "panel_title_crop",
            defaultMessage: [{ type: 0, value: "Drag to Adjust" }],
          },
          perm_want: {
            id: "requested_permissions",
            defaultMessage: [{ type: 0, value: "Requested" }],
          },
          perm_given: {
            id: "granted_permissions",
            defaultMessage: [{ type: 0, value: "Granted" }],
          },
          perm_auth: {
            id: "permissions_authenticated",
            defaultMessage: [{ type: 0, value: "Authenticated" }],
          },
          perm_anon: {
            id: "permissions_anonymous",
            defaultMessage: [{ type: 0, value: "Anonymous" }],
          },
          perm_user: {
            id: "permissions_user",
            defaultMessage: [{ type: 0, value: "User's Permissions" }],
          },
          edit_permissions: {
            id: "menu_item_edit_permissions",
            defaultMessage: [{ type: 0, value: "Edit permissions" }],
          },
        });
      class Rs extends t().Component {
        constructor(e) {
          super(e),
            (this.state = {
              topic: null,
              owner: !1,
              admin: !1,
              sharer: !1,
              deleter: !1,
              muted: !1,
              address: null,
              groupTopic: void 0,
              channel: void 0,
              fullName: void 0,
              description: void 0,
              avatar: null,
              private: null,
              selectedContact: null,
              access: null,
              modeGiven: null,
              modeWant: null,
              modeGiven2: null,
              modeWant2: null,
              auth: null,
              anon: null,
              contactList: [],
              trustedBadges: [],
              previousMetaDesc: void 0,
              previousSubsUpdated: void 0,
            }),
            (this.resetSubs = this.resetSubs.bind(this)),
            (this.resetDesc = this.resetDesc.bind(this)),
            (this.resetTags = this.resetTags.bind(this)),
            (this.onMetaDesc = this.onMetaDesc.bind(this)),
            (this.onSubsUpdated = this.onSubsUpdated.bind(this)),
            (this.handleImageChanged = this.handleImageChanged.bind(this)),
            (this.handleMuted = this.handleMuted.bind(this)),
            (this.handleUnarchive = this.handleUnarchive.bind(this)),
            (this.handlePermissionsChanged =
              this.handlePermissionsChanged.bind(this)),
            (this.handleLaunchPermissionsEditor =
              this.handleLaunchPermissionsEditor.bind(this)),
            (this.handleShowAddMembers = this.handleShowAddMembers.bind(this)),
            (this.handleMemberUpdateRequest =
              this.handleMemberUpdateRequest.bind(this)),
            (this.handleMemberSelected = this.handleMemberSelected.bind(this)),
            (this.handleContextMenu = this.handleContextMenu.bind(this)),
            (this.handleBackNavigate = this.handleBackNavigate.bind(this));
        }
        componentDidUpdate(e) {
          const t = this.props.tinode.getTopic(e.topic);
          t &&
            (this.onMetaDesc != t.onMetaDesc &&
              ((this.previousMetaDesc = t.onMetaDesc),
              (t.onMetaDesc = this.onMetaDesc),
              (this.previousSubsUpdated = t.onSubsUpdated),
              (t.onSubsUpdated = this.onSubsUpdated)),
            this.state.topic != e.topic &&
              (this.setState({ topic: e.topic }),
              this.resetDesc(t, e),
              this.resetSubs(t, e),
              this.resetTags(t)));
        }
        componentWillUnmount() {
          const e = this.props.tinode.getTopic(this.props.topic);
          e &&
            (this.setState({ topic: null }),
            (e.onMetaDesc = this.previousMetaDesc),
            (e.onSubsUpdated = this.previousSubsUpdated));
        }
        resetSubs(e, t) {
          const a = { contactList: [] };
          if ("p2p" == e.getType()) {
            const s = e.subscriber(t.topic);
            s
              ? ((a.modeGiven2 = s.acs.getGiven()),
                (a.modeWant2 = s.acs.getWant()))
              : ((a.modeGiven2 = "N"), (a.modeWant2 = "N"));
          } else
            e.subscribers((e) => {
              a.contactList.push(e);
            }, this);
          this.setState(a);
        }
        resetDesc(e, t) {
          const a = e.getDefaultAccess() || {},
            s = e.getAccessMode(),
            n = [];
          if (e.trusted)
            for (const [t, a] of Object.entries(e.trusted)) a && n.push(t);
          this.setState({
            owner: s && s.isOwner(),
            admin: s && s.isAdmin(),
            sharer: s && s.isSharer(),
            deleter: s && s.isDeleter(),
            muted: s && s.isMuted(),
            fullName: wa(e.public && e.public.fn, sa),
            description: wa(e.public && e.public.note, na),
            avatar: ka(e.public ? e.public.photo : null),
            trustedBadges: n,
            private: wa(e.private && e.private.comment, sa),
            archived: e.isArchived(),
            address: e.name,
            groupTopic: e.isGroupType(),
            channel: e.isChannelType() || e.chan,
            access: s ? s.getMode() : void 0,
            modeGiven: s ? s.getGiven() : void 0,
            modeWant: s ? s.getWant() : void 0,
            auth: a.auth,
            anon: a.anon,
          });
        }
        resetTags(e) {
          if ("grp" != e.getType()) return;
          const t = e.getAccessMode();
          t && t.isOwner() && e.getMeta(e.startMetaQuery().withTags().build());
        }
        onMetaDesc(e) {
          const t = this.props.tinode.getTopic(this.props.topic);
          t &&
            (this.resetDesc(t, this.props),
            this.previousMetaDesc &&
              this.previousMetaDesc != this.onMetaDesc &&
              this.previousMetaDesc(e));
        }
        onSubsUpdated(e) {
          const t = this.props.tinode.getTopic(this.props.topic);
          t &&
            (this.resetSubs(t, this.props),
            this.previousSubsUpdated &&
              this.previousSubsUpdated != this.onSubsUpdated &&
              this.previousSubsUpdated(e));
        }
        handleImageChanged(e, t) {
          this.setState({ avatar: t }),
            this.props.onTopicDescUpdate(
              this.props.topic,
              ga(null, t || Vt.Tinode.DEL_CHAR),
              null
            );
        }
        handleMuted(e, t) {
          this.setState({ muted: t }),
            this.props.onChangePermissions(this.props.topic, t ? "-P" : "+P");
        }
        handleUnarchive(e, t) {
          this.props.onTopicUnArchive(this.props.topic);
        }
        handlePermissionsChanged(e, t) {
          switch (e) {
            case "auth":
              this.props.onTopicDescUpdateRequest(
                this.props.topic,
                null,
                null,
                { auth: t }
              );
              break;
            case "anon":
              this.props.onTopicDescUpdateRequest(
                this.props.topic,
                null,
                null,
                { anon: t }
              );
              break;
            case "mode":
            case "want":
              this.props.onChangePermissions(this.props.topic, t);
              break;
            case "given":
              this.props.onChangePermissions(
                this.props.topic,
                t,
                this.props.topic
              );
              break;
            case "user":
              this.props.onChangePermissions(
                this.props.topic,
                t,
                this.state.userPermissionsEdited
              );
          }
          this.handleBackNavigate();
        }
        handleLaunchPermissionsEditor(e, t) {
          const { formatMessage: a } = this.props.intl;
          let s, n, i, o, r, l, c;
          switch (e) {
            case "mode":
              s = this.state.access;
              break;
            case "want":
              (s = this.state.modeWant),
                (n = this.state.modeGiven),
                this.state.owner
                  ? (i = "O")
                  : ((i = Vt.AccessMode.encode(
                      Vt.AccessMode.diff("ASDO", this.state.modeGiven)
                    )),
                    this.state.channel && (i += "W")),
                (o = a(Us.perm_want)),
                (r = a(Us.perm_given));
              break;
            case "given":
              (s = this.state.modeGiven2),
                (n = this.state.modeWant2),
                (i = this.state.groupTopic
                  ? this.state.owner
                    ? ""
                    : "O"
                  : "ASDO"),
                (o = a(Us.perm_given)),
                (r = a(Us.perm_want));
              break;
            case "auth":
              (s = this.state.auth), (i = "O");
              break;
            case "anon":
              (s = this.state.anon), (i = "O");
              break;
            case "user": {
              const e = this.props.tinode.getTopic(this.props.topic);
              if (!e) return;
              const d = e.subscriber(t);
              if (!d || !d.acs) return;
              (s = d.acs.getGiven()),
                (n = d.acs.getWant()),
                (i = this.state.owner ? "" : "O"),
                (o = a(Us.perm_given)),
                (r = a(Us.perm_want)),
                d.public && ((l = d.public.fn), (c = d.public.photo));
              break;
            }
            default:
              return void console.error(
                "Unknown permission editing mode '" + e + "'"
              );
          }
          this.setState({
            userPermissionsEdited: t,
            userPermissionsTitle: l,
            userPermissionsAvatar: c,
            editedPermissions: s,
            immutablePermissions: n,
            editedPermissionsTitle: o,
            immutablePermissionsTitle: r,
            editedPermissionsSkipped: i,
          }),
            this.props.onNavigate(`perm/${e}`);
        }
        handleShowAddMembers(e) {
          e.preventDefault(),
            this.props.onInitFind(),
            this.props.onNavigate("members");
        }
        handleMemberUpdateRequest(e, t, a) {
          this.props.onMemberUpdateRequest(this.props.topic, t, a),
            this.props.onNavigate("info");
        }
        handleMemberSelected(e) {
          this.setState({ selectedContact: e });
        }
        handleBackNavigate() {
          const e = (this.props.panel || "info").split("/");
          "info" == e[0]
            ? this.props.onNavigate(null)
            : "perm" == e[0]
            ? "user" == e[1]
              ? this.props.onNavigate("info")
              : this.props.onNavigate("security")
            : this.props.onNavigate("info");
        }
        handleContextMenu(e) {
          const { formatMessage: t } = this.props.intl,
            a = this.props.tinode.getTopic(this.props.topic);
          if (!a) return;
          const s = a.subscriber(e.topicName);
          if (!s || !s.acs) return;
          const n = this.props.tinode.isMe(e.topicName),
            i = [
              {
                title: t(Us.edit_permissions),
                handler: () => {
                  this.handleLaunchPermissionsEditor(
                    n ? "want" : "user",
                    e.topicName
                  );
                },
              },
            ];
          n || i.push("member_delete"),
            i.push(s.acs.isMuted() ? "member_unmute" : "member_mute"),
            n || i.push(s.acs.isJoiner() ? "member_block" : "member_unblock"),
            this.props.showContextMenu(
              {
                topicName: this.props.topic,
                x: e.x,
                y: e.y,
                user: e.topicName,
              },
              i
            );
        }
        render() {
          const e = (this.props.panel || "info").split("/"),
            a = e[0];
          e.shift();
          const { formatMessage: s } = this.props.intl,
            n = s(("perm" == a ? Us["perm_" + e[0]] : Us[a]) || Us.info);
          return t().createElement(
            "div",
            { id: "info-view" },
            t().createElement(
              "div",
              { className: "caption-panel", id: "info-caption-panel" },
              t().createElement(
                "div",
                { className: "panel-title", id: "info-title" },
                n
              ),
              t().createElement(
                "div",
                null,
                t().createElement(us, { onCancel: this.handleBackNavigate })
              )
            ),
            this.props.displayMobile
              ? t().createElement(ms, {
                  level: this.props.errorLevel,
                  text: this.props.errorText,
                  onClearError: this.props.onError,
                })
              : null,
            "members" == a
              ? t().createElement(vs, {
                  tinode: this.props.tinode,
                  members: this.state.contactList,
                  requiredMember: this.props.myUserId,
                  keepInitialMembers: !this.state.admin && !this.state.owner,
                  myUserId: this.props.myUserId,
                  contacts: this.props.searchableContacts,
                  onCancel: this.handleBackNavigate,
                  onSubmit: this.handleMemberUpdateRequest,
                })
              : "perm" == a && e.length > 0
              ? t().createElement(Cs, {
                  tinode: this.props.tinode,
                  mode: this.state.editedPermissions,
                  compare: this.state.immutablePermissions,
                  skip: this.state.editedPermissionsSkipped,
                  modeTitle: this.state.editedPermissionsTitle,
                  compareTitle: this.state.immutablePermissionsTitle,
                  userTitle: this.state.userPermissionsTitle,
                  item: this.state.userPermissionsEdited,
                  userAvatar: this.state.userPermissionsAvatar,
                  onSubmit: (t) => this.handlePermissionsChanged(e[0], t),
                  onCancel: this.handleBackNavigate,
                })
              : "general" == a
              ? t().createElement(As, {
                  tinode: this.props.tinode,
                  topic: this.props.topic,
                  onCredAdd: this.props.onCredAdd,
                  onTopicTagsUpdateRequest: this.props.onTopicTagsUpdateRequest,
                  onCredConfirm: this.props.onCredConfirm,
                  onCredDelete: this.props.onCredDelete,
                  onUpdateTopicDesc: this.props.onTopicDescUpdateRequest,
                  onError: this.props.onError,
                })
              : "security" == a
              ? t().createElement(Ps, {
                  topic: this.props.topic,
                  owner: this.state.owner,
                  admin: this.state.admin,
                  sharer: this.state.sharer,
                  deleter: this.state.deleter,
                  muted: this.state.muted,
                  groupTopic: this.state.groupTopic,
                  channel: this.state.channel,
                  access: this.state.access,
                  modeGiven: this.state.modeGiven,
                  modeWant: this.state.modeWant,
                  modeGiven2: this.state.modeGiven2,
                  modeWant2: this.state.modeWant2,
                  auth: this.state.auth,
                  anon: this.state.anon,
                  onShowAlert: this.props.onShowAlert,
                  onDeleteMessages: this.props.onDeleteMessages,
                  onLeaveTopic: this.props.onLeaveTopic,
                  onBlockTopic: this.props.onBlockTopic,
                  onReportTopic: this.props.onReportTopic,
                  onLaunchPermissionsEditor: this.handleLaunchPermissionsEditor,
                  onNavigate: this.props.onNavigate,
                })
              : t().createElement(
                  "div",
                  { id: "info-view-content", className: "scrollable-panel" },
                  t().createElement(
                    "div",
                    { className: "panel-form-column" },
                    t().createElement(
                      "a",
                      {
                        href: "#",
                        className: "flat-button float-right",
                        onClick: (e) => {
                          e.preventDefault(), this.props.onNavigate("general");
                        },
                      },
                      t().createElement(
                        "i",
                        { className: "material-icons" },
                        "edit"
                      ),
                      " ",
                      t().createElement(i.FormattedMessage, {
                        id: "button_edit",
                        defaultMessage: [{ type: 0, value: "Edit" }],
                      })
                    ),
                    t().createElement(
                      "center",
                      null,
                      t().createElement(hs, {
                        tinode: this.props.tinode,
                        avatar: this.state.avatar,
                        readOnly: !0,
                        uid: this.props.topic,
                        title: this.state.fullName,
                      })
                    ),
                    t().createElement(
                      "div",
                      { className: "group" },
                      t().createElement(
                        "div",
                        null,
                        t().createElement(
                          "label",
                          { className: "small" },
                          t().createElement(i.FormattedMessage, {
                            id: "label_topic_name",
                            defaultMessage: [{ type: 0, value: "Name" }],
                          })
                        )
                      ),
                      t().createElement(
                        "div",
                        { className: "large ellipsized" },
                        this.state.fullName,
                        this.state.channel
                          ? t().createElement("img", {
                              src: "/img/channel.png",
                              className: "channel",
                              alt: "channel",
                            })
                          : null
                      )
                    ),
                    this.state.private
                      ? t().createElement(
                          "div",
                          { className: "group" },
                          t().createElement(
                            "div",
                            null,
                            t().createElement(
                              "label",
                              { className: "small" },
                              t().createElement(i.FormattedMessage, {
                                id: "label_private",
                                defaultMessage: [
                                  { type: 0, value: "Private comment" },
                                ],
                              })
                            )
                          ),
                          t().createElement(
                            "div",
                            { className: "large ellipsized" },
                            this.state.private
                          )
                        )
                      : null,
                    t().createElement(
                      "div",
                      { className: "group" },
                      t().createElement(
                        "label",
                        { className: "small" },
                        t().createElement(i.FormattedMessage, {
                          id: "label_user_id",
                          defaultMessage: [{ type: 0, value: "ID:" }],
                        })
                      ),
                      " ",
                      t().createElement("tt", null, this.state.address)
                    ),
                    t().createElement(
                      "div",
                      { className: "group" },
                      t().createElement(os, {
                        trustedBadges: this.state.trustedBadges,
                      })
                    ),
                    this.state.description
                      ? t().createElement(
                          "div",
                          { className: "group" },
                          t().createElement(
                            "label",
                            { className: "small" },
                            t().createElement(i.FormattedMessage, {
                              id: "label_description",
                              defaultMessage: [
                                { type: 0, value: "Description" },
                              ],
                            })
                          ),
                          t().createElement("div", null, this.state.description)
                        )
                      : null
                  ),
                  t().createElement("div", { className: "hr" }),
                  t().createElement(
                    "div",
                    { className: "panel-form-row" },
                    t().createElement(
                      "label",
                      null,
                      t().createElement(i.FormattedMessage, {
                        id: "label_muting_topic",
                        defaultMessage: [{ type: 0, value: "Muted:" }],
                      })
                    ),
                    t().createElement(ps, {
                      name: "P",
                      checked: this.state.muted,
                      onChange: this.handleMuted,
                    })
                  ),
                  this.state.archived
                    ? t().createElement(
                        "div",
                        { className: "panel-form-row" },
                        t().createElement(
                          "label",
                          null,
                          t().createElement(i.FormattedMessage, {
                            id: "label_unarchive_topic",
                            defaultMessage: [{ type: 0, value: "Archived:" }],
                          })
                        ),
                        t().createElement(ps, {
                          name: "archived",
                          checked: !0,
                          onChange: this.handleUnarchive,
                        })
                      )
                    : null,
                  t().createElement("div", { className: "hr" }),
                  t().createElement(
                    "div",
                    { className: "panel-form-row" },
                    t().createElement(
                      "a",
                      {
                        href: "#",
                        className: "flat-button",
                        onClick: (e) => {
                          e.preventDefault(), this.props.onNavigate("security");
                        },
                      },
                      t().createElement(
                        "i",
                        { className: "material-icons" },
                        "security"
                      ),
                      " ",
                      t().createElement(i.FormattedMessage, {
                        id: "button_security",
                        defaultMessage: [{ type: 0, value: "Security" }],
                      })
                    )
                  ),
                  this.state.groupTopic && this.state.sharer
                    ? t().createElement(
                        t().Fragment,
                        null,
                        t().createElement("div", { className: "hr" }),
                        t().createElement(
                          "div",
                          { className: "panel-form-row" },
                          t().createElement(
                            "label",
                            { className: "small" },
                            t().createElement(i.FormattedMessage, {
                              id: "label_group_members",
                              defaultMessage: [
                                { type: 0, value: "Group members:" },
                              ],
                            })
                          )
                        ),
                        t().createElement(
                          "div",
                          { className: "panel-form-row" },
                          t().createElement(
                            "a",
                            {
                              href: "#",
                              className: "flat-button",
                              onClick: this.handleShowAddMembers,
                            },
                            t().createElement(
                              "i",
                              { className: "material-icons" },
                              "person_add"
                            ),
                            "  ",
                            t().createElement(i.FormattedMessage, {
                              id: "button_add_members",
                              defaultMessage: [
                                { type: 0, value: "Add members" },
                              ],
                            })
                          )
                        ),
                        t().createElement(
                          i.FormattedMessage,
                          {
                            id: "group_has_no_members",
                            defaultMessage: [{ type: 0, value: "No members" }],
                          },
                          (e) =>
                            t().createElement(es, {
                              tinode: this.props.tinode,
                              contacts: this.state.contactList,
                              myUserId: this.props.myUserId,
                              emptyListMessage: e,
                              topicSelected: this.state.selectedContact,
                              showOnline: !1,
                              showUnread: !1,
                              showMode: !0,
                              noScroll: !0,
                              onTopicSelected: this.handleMemberSelected,
                              showContextMenu:
                                !!this.state.admin && this.handleContextMenu,
                            })
                        )
                      )
                    : null
                )
          );
        }
      }
      const Fs = (0, i.injectIntl)(Rs),
        xs = new Audio("audio/call-out.m4a");
      xs.loop = !0;
      const Bs = new Audio("audio/call-end.m4a");
      Bs.loop = !0;
      const Ls = new Audio("audio/dialing.m4a"),
        Os = (0, i.defineMessages)({
          already_in_call: {
            id: "already_in_call",
            defaultMessage: [
              { type: 0, value: "You already in an ongoing call!" },
            ],
          },
        });
      class qs extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              localStream: void 0,
              pc: void 0,
              previousOnInfo: void 0,
              waitingForPeer: !1,
              callInitialSetupComplete: !1,
            }),
            (this.localStreamConstraints = { audio: !0, video: !0 }),
            (this.isOutgoingCall = 1 == e.callState),
            (this.localRef = t().createRef()),
            (this.remoteRef = t().createRef()),
            (this.remoteIceCandidatesCache = []),
            (this.onInfo = this.onInfo.bind(this)),
            (this.start = this.start.bind(this)),
            (this.stop = this.stop.bind(this)),
            (this.createPeerConnection = this.createPeerConnection.bind(this)),
            (this.canSendOffer = this.canSendOffer.bind(this)),
            (this.drainRemoteIceCandidatesCache =
              this.drainRemoteIceCandidatesCache.bind(this)),
            (this.handleNegotiationNeededEvent =
              this.handleNegotiationNeededEvent.bind(this)),
            (this.handleICECandidateEvent =
              this.handleICECandidateEvent.bind(this)),
            (this.handleNewICECandidateMsg =
              this.handleNewICECandidateMsg.bind(this)),
            (this.handleICEConnectionStateChangeEvent =
              this.handleICEConnectionStateChangeEvent.bind(this)),
            (this.handleSignalingStateChangeEvent =
              this.handleSignalingStateChangeEvent.bind(this)),
            (this.handleICEGatheringStateChangeEvent =
              this.handleICEGatheringStateChangeEvent.bind(this)),
            (this.handleIceCandidateErrorEvent =
              this.handleIceCandidateErrorEvent.bind(this)),
            (this.handleTrackEvent = this.handleTrackEvent.bind(this)),
            (this.handleVideoOfferMsg = this.handleVideoOfferMsg.bind(this)),
            (this.handleVideoAnswerMsg = this.handleVideoAnswerMsg.bind(this)),
            (this.handleNewICECandidateMsg =
              this.handleNewICECandidateMsg.bind(this)),
            (this.reportError = this.reportError.bind(this)),
            (this.handleGetUserMediaError =
              this.handleGetUserMediaError.bind(this)),
            (this.stopTracks = this.stopTracks.bind(this)),
            (this.handleCloseClick = this.handleCloseClick.bind(this)),
            (this.handleToggleCameraClick =
              this.handleToggleCameraClick.bind(this)),
            (this.handleToggleMicClick = this.handleToggleMicClick.bind(this)),
            (this.toggleMedia = this.toggleMedia.bind(this)),
            (this.handleRemoteHangup = this.handleRemoteHangup.bind(this)),
            (this.handleVideoCallAccepted =
              this.handleVideoCallAccepted.bind(this));
        }
        componentDidMount() {
          const e = this.props.tinode.getTopic(this.props.topic);
          (this.previousOnInfo = e.onInfo),
            (e.onInfo = this.onInfo),
            (1 != this.props.callState && 3 != this.props.callState) ||
              !this.localRef.current ||
              this.start();
        }
        componentWillUnmount() {
          (this.props.tinode.getTopic(this.props.topic).onInfo =
            this.previousOnInfo),
            this.stop();
        }
        handleVideoCallAccepted(e) {
          xs.pause();
          const t = this.createPeerConnection(),
            a = this.state.localStream;
          a.getTracks().forEach((e) => {
            t.addTrack(e, a);
          });
        }
        onInfo(e) {
          if ("call" == e.what)
            switch (e.event) {
              case "accept":
                this.handleVideoCallAccepted(e);
                break;
              case "answer":
                this.handleVideoAnswerMsg(e);
                break;
              case "ice-candidate":
                this.handleNewICECandidateMsg(e);
                break;
              case "hang-up":
                this.handleRemoteHangup(e);
                break;
              case "offer":
                this.handleVideoOfferMsg(e);
                break;
              case "ringing":
                xs.play().catch((e) => {});
                break;
              default:
                console.warn("Unknown call event", e.event);
            }
        }
        start() {
          this.state.localStream
            ? this.props.onError(
                this.props.intl.formatMessage(Os.already_in_call)
              )
            : 3 != this.props.callState
            ? navigator.mediaDevices
                .getUserMedia(this.localStreamConstraints)
                .then((e) => {
                  this.setState({ localStream: e, waitingForPeer: !0 }),
                    (this.localRef.current.srcObject = e),
                    Ls.play(),
                    this.props.onInvite(
                      this.props.topic,
                      this.props.seq,
                      this.props.callState
                    );
                })
                .catch(this.handleGetUserMediaError)
            : this.props.onInvite(
                this.props.topic,
                this.props.seq,
                this.props.callState
              );
        }
        stop() {
          Bs.pause(),
            (Bs.currentTime = 0),
            xs.pause(),
            (xs.currentTime = 0),
            this.stopTracks(this.localRef.current),
            this.stopTracks(this.remoteRef.current),
            this.state.pc &&
              ((this.state.pc.ontrack = null),
              (this.state.pc.onremovetrack = null),
              (this.state.pc.onremovestream = null),
              (this.state.pc.onicecandidate = null),
              (this.state.pc.oniceconnectionstatechange = null),
              (this.state.pc.onsignalingstatechange = null),
              (this.state.pc.onicegatheringstatechange = null),
              (this.state.pc.onnegotiationneeded = null),
              (this.state.pc.onicecandidateerror = null),
              this.state.pc.close()),
            this.setState({ pc: null, waitingForPeer: !1 });
        }
        stopTracks(e) {
          if (!e) return;
          let t = e.srcObject;
          if (!t) return;
          let a = t.getTracks();
          a &&
            a.forEach((e) => {
              e.stop(), (e.enabled = !1);
            }),
            (e.srcObject = null),
            (e.src = "");
        }
        createPeerConnection() {
          const e = this.props.tinode.getServerParam("iceServers", null),
            t = e
              ? new RTCPeerConnection({ iceServers: e })
              : new RTCPeerConnection();
          return (
            (t.onicecandidate = this.handleICECandidateEvent),
            (t.oniceconnectionstatechange =
              this.handleICEConnectionStateChangeEvent),
            (t.onicegatheringstatechange =
              this.handleICEGatheringStateChangeEvent),
            (t.onsignalingstatechange = this.handleSignalingStateChangeEvent),
            (t.onnegotiationneeded = this.handleNegotiationNeededEvent),
            (t.onicecandidateerror = this.handleIceCandidateErrorEvent),
            (t.ontrack = this.handleTrackEvent),
            this.setState({ pc: t, waitingForPeer: !1 }),
            t
          );
        }
        handleVideoAnswerMsg(e) {
          const t = new RTCSessionDescription(e.payload);
          this.state.pc
            .setRemoteDescription(t)
            .then((e) => {
              this.setState({ callInitialSetupComplete: !0 }, () =>
                this.drainRemoteIceCandidatesCache()
              );
            })
            .catch(this.reportError);
        }
        reportError(e) {
          this.props.onError(e.message, "err");
        }
        canSendOffer() {
          return this.isOutgoingCall || this.state.callInitialSetupComplete;
        }
        handleNegotiationNeededEvent() {
          this.canSendOffer() &&
            this.state.pc
              .createOffer()
              .then((e) => this.state.pc.setLocalDescription(e))
              .then((e) => {
                this.props.onSendOffer(
                  this.props.topic,
                  this.props.seq,
                  this.state.pc.localDescription.toJSON()
                );
              })
              .catch(this.reportError);
        }
        handleIceCandidateErrorEvent(e) {
          console.warn("ICE candidate error:", e);
        }
        handleICECandidateEvent(e) {
          e.candidate &&
            this.props.onIceCandidate(
              this.props.topic,
              this.props.seq,
              e.candidate.toJSON()
            );
        }
        handleNewICECandidateMsg(e) {
          const t = new RTCIceCandidate(e.payload);
          this.state.callInitialSetupComplete
            ? this.state.pc.addIceCandidate(t).catch(this.reportError)
            : this.remoteIceCandidatesCache.push(t);
        }
        drainRemoteIceCandidatesCache() {
          this.remoteIceCandidatesCache.forEach((e) => {
            this.state.pc.addIceCandidate(e).catch(this.reportError);
          }),
            (this.remoteIceCandidatesCache = []);
        }
        handleICEConnectionStateChangeEvent(e) {
          switch (this.state.pc.iceConnectionState) {
            case "closed":
            case "failed":
              this.handleCloseClick();
          }
        }
        handleSignalingStateChangeEvent(e) {
          "closed" == this.state.pc.signalingState && this.handleCloseClick();
        }
        handleICEGatheringStateChangeEvent(e) {}
        handleTrackEvent(e) {
          (this.remoteRef.current.srcObject = e.streams[0]), this.forceUpdate();
        }
        handleGetUserMediaError(e) {
          switch (e.name) {
            case "NotFoundError":
              this.reportError(e.message);
              break;
            case "SecurityError":
            case "PermissionDeniedError":
              break;
            default:
              this.reportError(e.message),
                console.error(
                  "Error opening your camera and/or microphone:",
                  e.message
                );
          }
          this.handleCloseClick();
        }
        handleVideoOfferMsg(e) {
          let t = null;
          const a = this.createPeerConnection(),
            s = new RTCSessionDescription(e.payload);
          a.setRemoteDescription(s)
            .then((e) =>
              navigator.mediaDevices.getUserMedia(this.localStreamConstraints)
            )
            .then((e) => {
              (t = e),
                (this.localRef.current.srcObject = e),
                this.setState({ localStream: e }),
                t.getTracks().forEach((e) => {
                  a.addTrack(e, t);
                });
            })
            .then((e) => a.createAnswer())
            .then((e) => a.setLocalDescription(e))
            .then((e) => {
              this.props.onSendAnswer(
                this.props.topic,
                this.props.seq,
                a.localDescription.toJSON()
              ),
                this.setState({ callInitialSetupComplete: !0 }, () =>
                  this.drainRemoteIceCandidatesCache()
                );
            })
            .catch(this.handleGetUserMediaError);
        }
        handleRemoteHangup() {
          this.state.waitingForPeer
            ? (this.setState({ waitingForPeer: !1 }),
              xs.pause(),
              (xs.currentTime = 0),
              (Bs.loop = !0),
              Bs.play().catch((e) => {}),
              setTimeout((e) => {
                this.handleCloseClick();
              }, 2e3))
            : this.handleCloseClick();
        }
        handleCloseClick() {
          this.stop(), this.props.onHangup(this.props.topic, this.props.seq);
        }
        toggleMedia(e) {
          this.state.localStream.getTracks().forEach((t) => {
            t.kind == e && (t.enabled = !t.enabled);
          }),
            this.forceUpdate();
        }
        handleToggleCameraClick() {
          this.toggleMedia("video");
        }
        handleToggleMicClick() {
          this.toggleMedia("audio");
        }
        render() {
          const e = this.remoteRef.current && this.remoteRef.current.srcObject,
            a = !(this.state.localStream && this.state.localStream.getTracks()),
            s =
              this.state.localStream &&
              this.state.localStream.getAudioTracks()[0].enabled
                ? "mic"
                : "mic_off",
            n =
              this.state.localStream &&
              this.state.localStream.getVideoTracks()[0].enabled
                ? "videocam"
                : "videocam_off",
            o = wa(this.props.title, 20),
            r = this.state.waitingForPeer ? " pulse" : "";
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "div",
              { id: "video-container" },
              t().createElement(
                "div",
                { id: "video-container-panel" },
                t().createElement(
                  "div",
                  { className: "call-party self" },
                  t().createElement("video", {
                    ref: this.localRef,
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                  }),
                  t().createElement(
                    "div",
                    { className: "caller-name inactive" },
                    t().createElement(i.FormattedMessage, {
                      id: "calls_you_label",
                      defaultMessage: [{ type: 0, value: "You" }],
                    })
                  )
                ),
                t().createElement(
                  "div",
                  { className: "call-party peer" },
                  t().createElement("video", {
                    ref: this.remoteRef,
                    autoPlay: !0,
                    playsInline: !0,
                  }),
                  e
                    ? t().createElement(
                        "div",
                        { className: "caller-name inactive" },
                        o
                      )
                    : t().createElement(
                        "div",
                        { className: `caller-card${r}` },
                        t().createElement(
                          "div",
                          { className: "avatar-box" },
                          t().createElement(Ca, {
                            tinode: this.props.tinode,
                            avatar: this.props.avatar,
                            topic: this.props.topic,
                            title: this.props.title,
                          })
                        ),
                        t().createElement(
                          "div",
                          { className: "caller-name" },
                          o
                        )
                      )
                )
              ),
              t().createElement(
                "div",
                { className: "controls" },
                t().createElement(
                  "button",
                  { className: "danger", onClick: this.handleCloseClick },
                  t().createElement(
                    "i",
                    { className: "material-icons" },
                    "call_end"
                  )
                ),
                t().createElement(
                  "button",
                  {
                    className: "secondary",
                    onClick: this.handleToggleCameraClick,
                    disabled: a,
                  },
                  t().createElement("i", { className: "material-icons" }, n)
                ),
                t().createElement(
                  "button",
                  {
                    className: "secondary",
                    onClick: this.handleToggleMicClick,
                    disabled: a,
                  },
                  t().createElement("i", { className: "material-icons" }, s)
                )
              )
            )
          );
        }
      }
      const js = (0, i.injectIntl)(qs);
      class zs extends t().Component {
        constructor(e) {
          super(e),
            (this.state = { downloader: null, progress: 0 }),
            (this.downloadFile = this.downloadFile.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        downloadFile(e, t, a) {
          if (!e)
            return void this.props.onError("Invalid download URL '" + e + "'");
          const s = this.props.tinode.getLargeFileHelper();
          this.setState({ downloader: s }),
            s
              .download(
                e,
                t,
                a,
                (e) => {
                  this.setState({ progress: e / this.props.size });
                },
                (e) => {
                  this.props.onError(e, "err");
                }
              )
              .then(() => {
                this.setState({ downloader: null, progress: 0 });
              })
              .catch((e) => {
                e &&
                  this.props.onError(
                    "Error downloading file: " + e.message,
                    "err"
                  ),
                  this.setState({ downloader: null, progress: 0 });
              });
        }
        handleCancel() {
          this.props.uploading
            ? this.props.onCancelUpload()
            : this.state.downloader && this.state.downloader.cancel();
        }
        render() {
          let e = this.props.filename || "file_attachment";
          e.length > 36 && (e = e.substr(0, 16) + "..." + e.substr(-16));
          let a,
            s,
            n =
              this.props.size > 0
                ? t().createElement(
                    "span",
                    { className: "small gray" },
                    "(",
                    ha(this.props.size),
                    ")"
                  )
                : null;
          this.props.uploading ||
          this.state.downloader ||
          !(function (e) {
            return e && !/^\s*([a-z][a-z0-9+.-]*:|\/\/)/im.test(e);
          })(this.props.downloadUrl)
            ? ((a = fa(this.props.downloadUrl)), (s = null))
            : ((a = "#"),
              (s = (e) => {
                e.preventDefault(),
                  this.downloadFile(
                    this.props.downloadUrl,
                    this.props.filename,
                    this.props.mimetype
                  );
              }));
          const o = t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "i",
              { className: "material-icons" },
              "file_download"
            ),
            " ",
            t().createElement(i.FormattedMessage, {
              id: "save_attachment",
              defaultMessage: [{ type: 0, value: "save" }],
            })
          );
          return t().createElement(
            "div",
            { className: "attachment" },
            t().createElement(
              "div",
              null,
              t().createElement(
                "i",
                { className: "material-icons big gray" },
                "insert_drive_file"
              )
            ),
            t().createElement(
              "div",
              { className: "flex-column" },
              t().createElement("div", null, e, " ", n),
              this.props.uploading || this.state.downloader
                ? t().createElement(La, {
                    progress: this.props.uploading
                      ? this.props.progress
                      : this.state.progress,
                    onCancel: this.handleCancel,
                  })
                : t().createElement(
                    "div",
                    null,
                    a
                      ? t().createElement(
                          "a",
                          {
                            href: a,
                            download: this.props.filename,
                            onClick: s,
                          },
                          o
                        )
                      : t().createElement(
                          "span",
                          { className: "light-gray" },
                          o
                        )
                  )
            )
          );
        }
      }
      const Hs = (0, i.defineMessages)({
        message_sending: {
          id: "message_sending",
          defaultMessage: [{ type: 0, value: "sending..." }],
        },
        message_sending_failed: {
          id: "message_sending_failed",
          defaultMessage: [{ type: 0, value: "failed" }],
        },
      });
      class Vs extends t().PureComponent {
        render() {
          const { formatMessage: e } = this.props.intl;
          let a;
          a =
            this.props.received <= Vt.Tinode.MESSAGE_STATUS_SENDING
              ? e(Hs.message_sending)
              : this.props.received == Vt.Tinode.MESSAGE_STATUS_FAILED
              ? e(Hs.message_sending_failed)
              : this.props.timestamp.toLocaleTimeString(
                  this.props.intl.locale,
                  { timeStyle: "short" }
                );
          const s = va(this.props.received),
            n = s
              ? t().createElement(
                  "i",
                  { className: "material-icons small " + s.color },
                  s.name
                )
              : null;
          return t().createElement(
            "span",
            { className: "timestamp" },
            a,
            " ",
            n
          );
        }
      }
      const Ws = (0, i.injectIntl)(Vs);
      function Ks() {
        return (
          (Ks = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var s in a)
                    Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
                }
                return e;
              }),
          Ks.apply(this, arguments)
        );
      }
      class Gs extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { progress: 0 }),
            e.uploader &&
              (e.uploader.onProgress = this.handleProgress.bind(this)),
            (this.handleImagePreview = this.handleImagePreview.bind(this)),
            (this.handleFormButtonClick =
              this.handleFormButtonClick.bind(this)),
            (this.handleContextClick = this.handleContextClick.bind(this)),
            (this.handleCancelUpload = this.handleCancelUpload.bind(this)),
            (this.handleQuoteClick = this.handleQuoteClick.bind(this)),
            (this.formatterContext = {
              formatMessage: e.intl.formatMessage.bind(e.intl),
              viewportWidth: e.viewportWidth,
              authorizeURL: e.tinode.authorizeURL.bind(e.tinode),
              onImagePreview: this.handleImagePreview,
              onFormButtonClick: this.handleFormButtonClick,
              onQuoteClick: this.handleQuoteClick,
            });
        }
        handleImagePreview(e) {
          e.preventDefault(),
            this.props.onImagePreview({
              url: e.target.src,
              filename: e.target.title,
              width: e.target.dataset.width,
              height: e.target.dataset.height,
              size: e.target.dataset.size,
              type: e.target.dataset.mime,
            });
        }
        handleFormButtonClick(e) {
          e.preventDefault();
          const t = { seq: this.props.seq, resp: {} };
          e.target.dataset.name &&
            (t.resp[e.target.dataset.name] = e.target.dataset.val
              ? e.target.dataset.val
              : void 0 === e.target.dataset.val
              ? 1
              : "" + e.target.dataset.val),
            "url" == e.target.dataset.act &&
              (t.ref = fa(e.target.dataset.ref) || "about:blank");
          const a = e.target.dataset.title || "unknown";
          this.props.onFormResponse(e.target.dataset.act, a, t);
        }
        handleContextClick(e) {
          e.preventDefault(), e.stopPropagation();
          const t = [];
          this.props.received == Vt.Tinode.MESSAGE_STATUS_FAILED &&
            t.push("menu_item_send_retry"),
            this.props.userIsWriter &&
              this.props.received > Vt.Tinode.MESSAGE_STATUS_FAILED &&
              this.props.received < Vt.Tinode.MESSAGE_STATUS_DEL_RANGE &&
              t.push("menu_item_reply"),
            t.push("menu_item_forward"),
            this.props.showContextMenu(
              {
                seq: this.props.seq,
                content: this.props.content,
                userFrom: this.props.userFrom,
                userName: this.props.userName,
                y: e.pageY,
                x: e.pageX,
                pickReply: this.props.pickReply,
              },
              t
            );
        }
        handleProgress(e) {
          this.setState({ progress: e });
        }
        handleCancelUpload() {
          this.props.onCancelUpload(this.props.seq, this.props.uploader);
        }
        handleQuoteClick(e) {
          e.preventDefault(), e.stopPropagation();
          const t = this.props.replyToSeq;
          t && this.props.onQuoteClick(t);
        }
        render() {
          const e =
              this.props.sequence +
              " " +
              (this.props.response ? "left" : "right"),
            a =
              "single" == this.props.sequence || "last" == this.props.sequence
                ? "bubble tip"
                : "bubble",
            s = this.props.userAvatar || !0,
            n =
              this.props.isGroup &&
              this.props.response &&
              ("single" == this.props.sequence ||
                "last" == this.props.sequence);
          let o = this.props.content;
          const r = [];
          if (
            this.props.mimeType == Vt.Drafty.getContentType() &&
            Vt.Drafty.isValid(o)
          ) {
            Vt.Drafty.attachments(
              o,
              (e, a) => {
                "application/json" != e.mime &&
                  r.push(
                    t().createElement(zs, {
                      tinode: this.props.tinode,
                      downloadUrl: Vt.Drafty.getDownloadUrl(e),
                      filename: e.name,
                      uploading: Vt.Drafty.isProcessing(e),
                      mimetype: e.mime,
                      size: Vt.Drafty.getEntitySize(e),
                      progress: this.state.progress,
                      onCancelUpload: this.handleCancelUpload,
                      onError: this.props.onError,
                      key: a,
                    })
                  );
              },
              this
            );
            const e = Vt.Drafty.format(o, za, this.formatterContext);
            o = t().createElement(t().Fragment, null, e);
          } else
            this.props.deleted
              ? (o = t().createElement(
                  t().Fragment,
                  null,
                  t().createElement(
                    "i",
                    { className: "material-icons gray" },
                    "block"
                  ),
                  " ",
                  t().createElement(
                    "i",
                    { className: "gray" },
                    t().createElement(i.FormattedMessage, {
                      id: "deleted_content",
                      defaultMessage: [{ type: 0, value: "content deleted" }],
                    })
                  )
                ))
              : "string" != typeof o &&
                (o = t().createElement(
                  t().Fragment,
                  null,
                  t().createElement(
                    "i",
                    { className: "material-icons gray" },
                    "warning_amber"
                  ),
                  " ",
                  t().createElement(
                    "i",
                    { className: "gray" },
                    t().createElement(i.FormattedMessage, {
                      id: "invalid_content",
                      defaultMessage: [{ type: 0, value: "invalid content" }],
                    })
                  )
                ));
          return t().createElement(
            "li",
            { ref: this.props.innerRef, className: e },
            this.props.isGroup && this.props.response
              ? t().createElement(
                  "div",
                  { className: "avatar-box" },
                  n
                    ? t().createElement(Ca, {
                        tinode: this.props.tinode,
                        topic: this.props.userFrom,
                        title: this.props.userName,
                        avatar: s,
                      })
                    : null
                )
              : null,
            t().createElement(
              "div",
              null,
              t().createElement(
                "div",
                { className: a },
                t().createElement(
                  "div",
                  { className: "content-meta" },
                  t().createElement(
                    "div",
                    { className: "message-content" },
                    o,
                    r
                  ),
                  this.props.timestamp
                    ? t().createElement(Ws, {
                        timestamp: this.props.timestamp,
                        received: this.props.received,
                      })
                    : null
                ),
                this.props.showContextMenu
                  ? t().createElement(
                      "span",
                      { className: "menuTrigger" },
                      t().createElement(
                        "a",
                        { href: "#", onClick: this.handleContextClick },
                        t().createElement(
                          "i",
                          { className: "material-icons" },
                          "expand_more"
                        )
                      )
                    )
                  : null
              ),
              n
                ? t().createElement(
                    "div",
                    { className: "author" },
                    this.props.userName ||
                      t().createElement(
                        "i",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "user_not_found",
                          defaultMessage: [{ type: 0, value: "Not found" }],
                        })
                      )
                  )
                : null
            )
          );
        }
      }
      const $s = (0, i.injectIntl)(Gs),
        Qs = t().forwardRef((e, a) =>
          t().createElement($s, Ks({ innerRef: a }, e))
        );
      var Ys = a(27),
        Js = a.n(Ys);
      const Xs = 100,
        Zs = "audio/webm";
      class en extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              enabled: !0,
              audioRecord: null,
              recording: !0,
              paused: !1,
              duration: "0:00",
              blobUrl: null,
              preview: null,
            }),
            (this.visualize = this.visualize.bind(this)),
            (this.initMediaRecording = this.initMediaRecording.bind(this)),
            (this.initCanvas = this.initCanvas.bind(this)),
            (this.getRecording = this.getRecording.bind(this)),
            (this.cleanUp = this.cleanUp.bind(this)),
            (this.handleResume = this.handleResume.bind(this)),
            (this.handlePause = this.handlePause.bind(this)),
            (this.handleDelete = this.handleDelete.bind(this)),
            (this.handleDone = this.handleDone.bind(this)),
            (this.durationMillis = 0),
            (this.startedOn = null),
            (this.viewBuffer = []),
            (this.canvasRef = t().createRef());
        }
        componentDidMount() {
          (this.stream = null),
            (this.mediaRecorder = null),
            (this.audioContext = null),
            (this.audioInput = null),
            (this.analyser = null),
            (this.audioChunks = []);
          try {
            navigator.mediaDevices
              .getUserMedia({ audio: !0, video: !1 })
              .then(this.initMediaRecording, this.props.onError);
          } catch (e) {
            this.props.onError(e);
          }
        }
        componentWillUnmount() {
          (this.startedOn = null), this.stream && this.cleanUp();
        }
        visualize() {
          this.initCanvas();
          const e = new Uint8Array(this.analyser.frequencyBinCount),
            t = this.canvasWidth,
            a = this.canvasHeight,
            s = (t / 10) | 0,
            n = Xs * s;
          (this.canvasContext.lineWidth = 6),
            (this.canvasContext.strokeStyle = "#BBBD");
          let i = 0,
            o = 0,
            r = 0;
          const l = () => {
            if (!this.startedOn) return;
            window.requestAnimationFrame(l);
            const c = this.durationMillis + (Date.now() - this.startedOn);
            this.setState({ duration: da(c / 1e3) }),
              c > 6e5 &&
                ((this.startedOn = null),
                this.mediaRecorder.pause(),
                (this.durationMillis += Date.now() - this.startedOn),
                this.setState({
                  enabled: !1,
                  recording: !1,
                  duration: da(this.durationMillis / 1e3),
                })),
              this.analyser.getByteTimeDomainData(e);
            let d = 0;
            for (const t of e) d += (t - 127) ** 2;
            (o += Math.sqrt(d / e.length)), r++;
            let h = (c / Xs) | 0;
            const p = n > c ? 0 : ((c - Xs * h) / Xs) * 10;
            i != h &&
              ((i = h),
              this.viewBuffer.push(o / r),
              (o = 0),
              (r = 0),
              this.viewBuffer.length > s && this.viewBuffer.shift()),
              this.canvasContext.clearRect(0, 0, t, a),
              this.canvasContext.beginPath();
            for (let e = 0; e < this.viewBuffer.length; e++) {
              let t = 10 * e - p,
                s = Math.min(this.viewBuffer[e] / 64, 0.9) * a;
              this.canvasContext.moveTo(t, 0.5 * (a - s)),
                this.canvasContext.lineTo(t, 0.5 * a + 0.5 * s);
            }
            this.canvasContext.stroke();
          };
          l();
        }
        handlePause(e) {
          e.preventDefault(),
            this.mediaRecorder.pause(),
            this.mediaRecorder.requestData(),
            (this.durationMillis += Date.now() - this.startedOn),
            (this.startedOn = null),
            this.setState({ recording: !1 });
        }
        handleResume(e) {
          e.preventDefault(),
            this.state.enabled &&
              ((this.startedOn = Date.now()),
              this.mediaRecorder.resume(),
              this.setState({ recording: !0 }, this.visualize));
        }
        handleDelete(e) {
          e.preventDefault(),
            (this.durationMillis = 0),
            (this.startedOn = null),
            this.mediaRecorder.stop(),
            this.cleanUp(),
            this.setState({ recording: !1 });
        }
        handleDone(e) {
          e.preventDefault(),
            this.setState({ recording: !1 }),
            this.startedOn &&
              ((this.durationMillis += Date.now() - this.startedOn),
              (this.startedOn = null)),
            this.mediaRecorder && this.mediaRecorder.stop();
        }
        initCanvas() {
          (this.canvasRef.current.width =
            2 * this.canvasRef.current.offsetWidth),
            (this.canvasRef.current.height =
              2 * this.canvasRef.current.offsetHeight),
            (this.canvasContext = this.canvasRef.current.getContext("2d")),
            (this.canvasContext.lineCap = "round"),
            this.canvasContext.translate(0.5, 0.5),
            (this.canvasWidth = this.canvasRef.current.width),
            (this.canvasHeight = this.canvasRef.current.height);
        }
        initMediaRecording(e) {
          (this.stream = e),
            (this.mediaRecorder = new MediaRecorder(e, { mimeType: Zs })),
            (this.audioContext = new AudioContext()),
            (this.audioInput = this.audioContext.createMediaStreamSource(e)),
            (this.analyser = this.audioContext.createAnalyser()),
            (this.analyser.fftSize = 256),
            this.audioInput.connect(this.analyser),
            (this.mediaRecorder.onstop = (e) => {
              this.durationMillis > 2e3
                ? this.getRecording(
                    this.mediaRecorder.mimeType,
                    this.durationMillis
                  ).then((e) =>
                    this.props.onFinished(e.url, e.preview, this.durationMillis)
                  )
                : this.props.onDeleted(),
                this.cleanUp();
            }),
            (this.mediaRecorder.ondataavailable = (e) => {
              e.data.size > 0 && this.audioChunks.push(e.data),
                "inactive" != this.mediaRecorder.state &&
                  this.getRecording(this.mediaRecorder.mimeType).then((e) => {
                    this.setState({ blobUrl: e.url, preview: e.preview });
                  });
            }),
            (this.durationMillis = 0),
            (this.startedOn = Date.now()),
            this.mediaRecorder.start(),
            this.visualize();
        }
        getRecording(e, t) {
          let a = new Blob(this.audioChunks, { type: e || Zs });
          return (t > 0 ? Js()(a, t, { logger: !1 }) : Promise.resolve(a))
            .then((e) => ((a = e), e.arrayBuffer()))
            .then((e) => this.audioContext.decodeAudioData(e))
            .then((e) => this.createPreview(e))
            .then((e) => ({
              url: window.URL.createObjectURL(a),
              preview: Ia(e),
            }));
        }
        createPreview(e) {
          const t = e.getChannelData(0),
            a = Math.min(t.length, 96),
            s = (t.length / a) | 0,
            n = Math.max(1, (s / 10) | 0);
          let i = [],
            o = -1;
          for (let e = 0; e < a; e++) {
            let a = 0,
              r = 0;
            for (let i = 0; i < s; i += n) (a += t[s * e + i] ** 2), r++;
            const l = Math.sqrt(a / r);
            i.push(l), (o = Math.max(o, l));
          }
          return o > 0 && (i = i.map((e) => ((100 * e) / o) | 0)), i;
        }
        cleanUp() {
          this.audioInput.disconnect(),
            this.stream.getTracks().forEach((e) => e.stop());
        }
        render() {
          const e = "material-icons " + (this.state.enabled ? "red" : "gray");
          return t().createElement(
            "div",
            { className: "audio" },
            t().createElement(
              "a",
              { href: "#", onClick: this.handleDelete, title: "Delete" },
              t().createElement(
                "i",
                { className: "material-icons gray" },
                "delete_outline"
              )
            ),
            this.state.recording
              ? t().createElement("canvas", { ref: this.canvasRef })
              : t().createElement(Ra, {
                  src: this.state.blobUrl,
                  preview: this.state.preview,
                  duration: this.durationMillis,
                  short: !0,
                }),
            t().createElement(
              "div",
              { className: "duration" },
              this.state.duration
            ),
            this.state.recording
              ? t().createElement(
                  "a",
                  { href: "#", onClick: this.handlePause, title: "Pause" },
                  t().createElement(
                    "i",
                    { className: "material-icons" },
                    "pause_circle_outline"
                  )
                )
              : t().createElement(
                  "a",
                  { href: "#", onClick: this.handleResume, title: "Resume" },
                  t().createElement(
                    "i",
                    { className: e },
                    "radio_button_checked"
                  )
                ),
            t().createElement(
              "a",
              { href: "#", onClick: this.handleDone, title: "Send" },
              t().createElement("i", { className: "material-icons" }, "send")
            )
          );
        }
      }
      const tn = (0, i.defineMessages)({
        messaging_disabled: {
          id: "messaging_disabled_prompt",
          defaultMessage: [{ type: 0, value: "Messaging disabled" }],
        },
        type_new_message: {
          id: "new_message_prompt",
          defaultMessage: [{ type: 0, value: "New message" }],
        },
        add_image_caption: {
          id: "image_caption_prompt",
          defaultMessage: [{ type: 0, value: "Image caption" }],
        },
        file_attachment_too_large: {
          id: "file_attachment_too_large",
          defaultMessage: [
            { type: 0, value: "The file size " },
            { type: 1, value: "size" },
            { type: 0, value: " exceeds the " },
            { type: 1, value: "limit" },
            { type: 0, value: " limit." },
          ],
        },
        cannot_initiate_upload: {
          id: "cannot_initiate_file_upload",
          defaultMessage: [{ type: 0, value: "Cannot initiate file upload." }],
        },
      });
      class an extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              quote: null,
              message: "",
              audioRec: !1,
              audioAvailable: !(
                !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
              ),
              keypressTimestamp: new Date().getTime() - Yt - 1,
            }),
            (this.handlePasteEvent = this.handlePasteEvent.bind(this)),
            (this.handleAttachImage = this.handleAttachImage.bind(this)),
            (this.handleAttachFile = this.handleAttachFile.bind(this)),
            (this.handleAttachAudio = this.handleAttachAudio.bind(this)),
            (this.handleSend = this.handleSend.bind(this)),
            (this.handleKeyPress = this.handleKeyPress.bind(this)),
            (this.handleMessageTyping = this.handleMessageTyping.bind(this)),
            (this.handleQuoteClick = this.handleQuoteClick.bind(this)),
            (this.formatReply = this.formatReply.bind(this));
        }
        componentDidMount() {
          this.messageEditArea &&
            this.messageEditArea.addEventListener(
              "paste",
              this.handlePasteEvent,
              !1
            ),
            this.setState({ quote: this.formatReply() });
        }
        componentWillUnmount() {
          this.messageEditArea &&
            this.messageEditArea.removeEventListener(
              "paste",
              this.handlePasteEvent,
              !1
            );
        }
        componentDidUpdate(e) {
          this.messageEditArea && this.messageEditArea.focus(),
            e.topicName != this.props.topicName &&
              this.setState({ message: "", audioRec: !1, quote: null }),
            e.reply != this.props.reply &&
              this.setState({ quote: this.formatReply() });
        }
        formatReply() {
          return this.props.reply
            ? Vt.Drafty.format(this.props.reply.content, Ga, {
                formatMessage: this.props.intl.formatMessage.bind(
                  this.props.intl
                ),
                authorizeURL: this.props.tinode.authorizeURL.bind(
                  this.props.tinode
                ),
              })
            : null;
        }
        handlePasteEvent(e) {
          this.props.disabled ||
            ((function (e, t, a, s) {
              const n = (e.clipboardData || e.originalEvent.clipboardData || {})
                .items;
              if (!n || !n.length) return !1;
              for (let e in n) {
                const i = n[e];
                if ("file" === i.kind) {
                  const e = i.getAsFile();
                  if (!e) {
                    console.error(
                      "Failed to get file object from pasted file item",
                      i.kind,
                      i.type
                    ),
                      s("Failed to get file object from pasted file item");
                    continue;
                  }
                  return (
                    e.type && "image" == e.type.split("/")[0] ? t(e) : a(e), !0
                  );
                }
              }
              return !1;
            })(
              e,
              (e) => {
                this.props.onAttachImage(e);
              },
              (e) => {
                this.props.onAttachFile(e);
              },
              this.props.onError
            ) &&
              e.preventDefault());
        }
        handleAttachImage(e) {
          e.target.files &&
            e.target.files.length > 0 &&
            this.props.onAttachImage(e.target.files[0]),
            (e.target.value = "");
        }
        handleAttachFile(e) {
          e.target.files &&
            e.target.files.length > 0 &&
            this.props.onAttachFile(e.target.files[0]),
            (e.target.value = "");
        }
        handleAttachAudio(e, t, a) {
          this.setState({ audioRec: !1 }), this.props.onAttachAudio(e, t, a);
        }
        handleSend(e) {
          e.preventDefault();
          const t = this.state.message.trim();
          (t || this.props.acceptBlank || this.props.noInput) &&
            (this.props.onSendMessage(t), this.setState({ message: "" }));
        }
        handleKeyPress(e) {
          if (this.state.audioRec)
            return e.preventDefault(), void e.stopPropagation();
          "Enter" === e.key &&
            (e.shiftKey ||
              (e.preventDefault(), e.stopPropagation(), this.handleSend(e)));
        }
        handleMessageTyping(e) {
          const t = { message: e.target.value };
          if (this.props.onKeyPress) {
            const e = new Date().getTime();
            e - this.state.keypressTimestamp > Yt &&
              (this.props.onKeyPress(), (t.keypressTimestamp = e));
          }
          this.setState(t);
        }
        handleQuoteClick(e) {
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            this.props.reply && this.props.onQuoteClick)
          ) {
            const e = this.props.reply.seq;
            this.props.onQuoteClick(e);
          }
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            a = this.props.disabled
              ? e(tn.messaging_disabled)
              : this.props.messagePrompt
              ? e(tn[this.props.messagePrompt])
              : e(tn.type_new_message),
            s = this.state.quote
              ? t().createElement(
                  "div",
                  { id: "reply-quote-preview" },
                  t().createElement(
                    "div",
                    { className: "cancel" },
                    t().createElement(
                      "a",
                      {
                        href: "#",
                        onClick: (e) => {
                          e.preventDefault(), this.props.onCancelReply();
                        },
                      },
                      t().createElement(
                        "i",
                        { className: "material-icons gray" },
                        "close"
                      )
                    )
                  ),
                  this.state.quote
                )
              : null,
            n = this.state.audioAvailable && this.props.onAttachAudio;
          return t().createElement(
            "div",
            { id: "send-message-wrapper" },
            this.props.noInput ? null : s,
            t().createElement(
              "div",
              { id: "send-message-panel" },
              this.props.disabled
                ? t().createElement("div", { id: "writing-disabled" }, a)
                : t().createElement(
                    t().Fragment,
                    null,
                    this.props.onAttachFile && !this.state.audioRec
                      ? t().createElement(
                          t().Fragment,
                          null,
                          t().createElement(
                            "a",
                            {
                              href: "#",
                              onClick: (e) => {
                                e.preventDefault(), this.attachImage.click();
                              },
                              title: "Add image",
                            },
                            t().createElement(
                              "i",
                              { className: "material-icons secondary" },
                              "photo"
                            )
                          ),
                          t().createElement(
                            "a",
                            {
                              href: "#",
                              onClick: (e) => {
                                e.preventDefault(), this.attachFile.click();
                              },
                              title: "Attach file",
                            },
                            t().createElement(
                              "i",
                              { className: "material-icons secondary" },
                              "attach_file"
                            )
                          )
                        )
                      : null,
                    this.props.noInput
                      ? s || t().createElement("div", { className: "hr thin" })
                      : this.state.audioRec
                      ? t().createElement(en, {
                          onDeleted: (e) => this.setState({ audioRec: !1 }),
                          onFinished: this.handleAttachAudio,
                        })
                      : t().createElement("textarea", {
                          id: "sendMessage",
                          placeholder: a,
                          value: this.state.message,
                          onChange: this.handleMessageTyping,
                          onKeyPress: this.handleKeyPress,
                          ref: (e) => {
                            this.messageEditArea = e;
                          },
                          autoFocus: !0,
                        }),
                    this.state.message || !n
                      ? t().createElement(
                          "a",
                          {
                            href: "#",
                            onClick: this.handleSend,
                            title: "Send",
                          },
                          t().createElement(
                            "i",
                            { className: "material-icons" },
                            "send"
                          )
                        )
                      : this.state.audioRec
                      ? null
                      : t().createElement(
                          "a",
                          {
                            href: "#",
                            onClick: (e) => {
                              e.preventDefault(),
                                this.setState({ audioRec: !0 });
                            },
                            title: "Voice",
                          },
                          t().createElement(
                            "i",
                            { className: "material-icons" },
                            "mic"
                          )
                        ),
                    t().createElement("input", {
                      type: "file",
                      ref: (e) => {
                        this.attachFile = e;
                      },
                      onChange: this.handleAttachFile,
                      style: { display: "none" },
                    }),
                    t().createElement("input", {
                      type: "file",
                      ref: (e) => {
                        this.attachImage = e;
                      },
                      accept: "image/*",
                      onChange: this.handleAttachImage,
                      style: { display: "none" },
                    })
                  )
            )
          );
        }
      }
      const sn = (0, i.injectIntl)(an);
      class nn extends t().PureComponent {
        constructor(e) {
          super(e), (this.handleSendDoc = this.handleSendDoc.bind(this));
        }
        handleSendDoc(e) {
          this.props.onClose(),
            this.props.onSendMessage(this.props.content.file);
        }
        render() {
          return this.props.content
            ? t().createElement(
                "div",
                { id: "image-preview" },
                t().createElement(
                  "div",
                  { id: "image-preview-caption-panel" },
                  t().createElement("span", null, this.props.content.name),
                  t().createElement(
                    "a",
                    {
                      href: "#",
                      onClick: (e) => {
                        e.preventDefault(), this.props.onClose();
                      },
                    },
                    t().createElement(
                      "i",
                      { className: "material-icons gray" },
                      "close"
                    )
                  )
                ),
                t().createElement(
                  "div",
                  { id: "image-preview-container" },
                  t().createElement(
                    "div",
                    { className: "flex-column narrow" },
                    t().createElement(
                      "i",
                      { className: "material-icons gray" },
                      (function (e) {
                        const t = {
                          default: "insert_drive_file",
                          image: "image",
                          text: "description",
                          video: "theaters",
                        };
                        return t[e] || t[(e || "").split("/")[0]] || t.default;
                      })(this.props.content.type)
                    ),
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "b",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_file_name",
                          defaultMessage: [{ type: 0, value: "File name:" }],
                        })
                      ),
                      " ",
                      pa(this.props.content.name, 24) || "-"
                    ),
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "b",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_content_type",
                          defaultMessage: [{ type: 0, value: "Content type:" }],
                        })
                      ),
                      " ",
                      this.props.content.type || "application/octet-stream"
                    ),
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "b",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_size",
                          defaultMessage: [{ type: 0, value: "Size:" }],
                        })
                      ),
                      " ",
                      ha(this.props.content.size)
                    )
                  )
                ),
                t().createElement(sn, {
                  noInput: !0,
                  tinode: this.props.tinode,
                  reply: this.props.reply,
                  onCancelReply: this.props.onCancelReply,
                  onSendMessage: this.handleSendDoc,
                  onError: this.props.onError,
                })
              )
            : null;
        }
      }
      class on extends t().Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = [],
            a = (this.props.subscribers || []).length,
            s = Math.min(4, a);
          return (
            (this.props.subscribers || []).some(
              (a) => (
                e.push(
                  t().createElement(
                    "div",
                    { className: "avatar-box", key: a.user },
                    t().createElement(Ca, {
                      tinode: this.props.tinode,
                      topic: a.user,
                      avatar: ka(a.public ? a.public.photo : null) || !0,
                      title: a.public ? a.public.fn : null,
                    })
                  )
                ),
                e.length == s
              )
            ),
            t().createElement(
              "div",
              { id: "topic-users" },
              e,
              " ",
              a > s
                ? t().createElement(
                    "span",
                    null,
                    t().createElement(i.FormattedMessage, {
                      id: "more_online_members",
                      defaultMessage: [
                        { type: 0, value: "+" },
                        { type: 1, value: "overflow" },
                        { type: 0, value: " more" },
                      ],
                      values: { overflow: a - s },
                    })
                  )
                : null
            )
          );
        }
      }
      class rn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { width: 0, height: 0 }),
            (this.handleSendImage = this.handleSendImage.bind(this));
        }
        assignWidth(e) {
          if (e && !this.state.width) {
            const t = e.getBoundingClientRect();
            this.setState({ width: 0 | t.width, height: 0 | t.height });
          }
        }
        handleSendImage(e) {
          this.props.onClose(),
            this.props.onSendMessage(e, this.props.content.blob);
        }
        render() {
          if (!this.props.content) return null;
          const e = Ta(
              this.props.content.width,
              this.props.content.height,
              this.state.width,
              this.state.height,
              !1
            ),
            a = e
              ? { width: e.dstWidth + "px", height: e.dstHeight + "px" }
              : this.props.content.width > this.props.content.height
              ? { width: "100%" }
              : { height: "100%" };
          (a.maxWidth = "100%"), (a.maxHeight = "100%");
          const s = Math.max(((this.state.width / Xt / 1.5) | 0) - 2, 12),
            n = pa(this.props.content.name, s) || "-",
            o = this.props.content.width || "-",
            r = this.props.content.height || "-";
          return t().createElement(
            "div",
            { id: "image-preview" },
            t().createElement(
              "div",
              { id: "image-preview-caption-panel" },
              this.props.onSendMessage
                ? t().createElement("span", null, n)
                : t().createElement(
                    "a",
                    { href: this.props.content.url, download: !0 },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "file_download"
                    ),
                    " ",
                    t().createElement(i.FormattedMessage, {
                      id: "download_action",
                      defaultMessage: [{ type: 0, value: "download" }],
                    })
                  ),
              t().createElement(
                "a",
                {
                  href: "#",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onClose();
                  },
                },
                t().createElement(
                  "i",
                  { className: "material-icons gray" },
                  "close"
                )
              )
            ),
            t().createElement(
              "div",
              {
                id: "image-preview-container",
                ref: (e) => this.assignWidth(e),
              },
              t().createElement("img", {
                src: this.props.content.url,
                style: a,
                className: "image-preview",
                alt: this.props.content.name,
              })
            ),
            this.props.onSendMessage
              ? t().createElement(sn, {
                  messagePrompt: "add_image_caption",
                  acceptBlank: !0,
                  tinode: this.props.tinode,
                  reply: this.props.reply,
                  onCancelReply: this.props.onCancelReply,
                  onSendMessage: this.handleSendImage,
                  onError: this.props.onError,
                })
              : t().createElement(
                  "div",
                  { id: "image-preview-footer" },
                  t().createElement(
                    "div",
                    null,
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "b",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_file_name",
                          defaultMessage: [{ type: 0, value: "File name:" }],
                        })
                      )
                    ),
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "span",
                        { title: this.props.content.name },
                        n
                      )
                    )
                  ),
                  t().createElement(
                    "div",
                    null,
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "b",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_content_type",
                          defaultMessage: [{ type: 0, value: "Content type:" }],
                        })
                      )
                    ),
                    t().createElement("div", null, this.props.content.type)
                  ),
                  t().createElement(
                    "div",
                    null,
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "b",
                        null,
                        t().createElement(i.FormattedMessage, {
                          id: "label_size",
                          defaultMessage: [{ type: 0, value: "Size:" }],
                        })
                      )
                    ),
                    t().createElement(
                      "div",
                      null,
                      o,
                      " × ",
                      r,
                      " px; ",
                      ha(this.props.content.size)
                    )
                  )
                )
          );
        }
      }
      class ln extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.handleButtonAction = this.handleButtonAction.bind(this));
        }
        handleButtonAction(e, t) {
          e.preventDefault(), this.props.onAction(t);
        }
        render() {
          return t().createElement(
            "div",
            { className: "accept-invite-panel" },
            t().createElement(
              "div",
              { className: "title" },
              t().createElement(i.FormattedMessage, {
                id: "chat_invitation",
                defaultMessage: [
                  {
                    type: 0,
                    value:
                      "You are invited to start a new chat. What would you like to do?",
                  },
                ],
              })
            ),
            t().createElement(
              "div",
              { className: "footer" },
              t().createElement(
                "button",
                {
                  className: "primary",
                  onClick: (e) => {
                    this.handleButtonAction(e, "accept");
                  },
                },
                t().createElement(i.FormattedMessage, {
                  id: "chat_invitation_accept",
                  defaultMessage: [{ type: 0, value: "Accept" }],
                })
              ),
              t().createElement(
                "button",
                {
                  className: "secondary",
                  onClick: (e) => {
                    this.handleButtonAction(e, "delete");
                  },
                },
                t().createElement(i.FormattedMessage, {
                  id: "chat_invitation_ignore",
                  defaultMessage: [{ type: 0, value: "Ignore" }],
                })
              ),
              t().createElement(
                "button",
                {
                  className: "secondary",
                  onClick: (e) => {
                    this.handleButtonAction(e, "block");
                  },
                },
                t().createElement(i.FormattedMessage, {
                  id: "chat_invitation_block",
                  defaultMessage: [{ type: 0, value: "Block" }],
                })
              )
            )
          );
        }
      }
      class cn extends t().PureComponent {
        render() {
          const e = Gt + " (" + Vt.Tinode.getLibrary() + ")";
          return t().createElement(
            "div",
            { id: "dummy-view" },
            t().createElement(
              "div",
              null,
              t().createElement(
                "a",
                { href: "https://github.com/tinode/chat/" },
                t().createElement("img", {
                  id: "logo",
                  alt: "logo",
                  src: "img/logo.svg",
                }),
                t().createElement("h2", null, "Tinode Web")
              ),
              t().createElement(
                "p",
                null,
                t().createElement(i.FormattedMessage, {
                  id: "label_client",
                  defaultMessage: [{ type: 0, value: "Client:" }],
                }),
                " ",
                e
              ),
              t().createElement(
                "p",
                null,
                t().createElement(i.FormattedMessage, {
                  id: "label_server",
                  defaultMessage: [{ type: 0, value: "Server:" }],
                }),
                " ",
                this.props.serverVersion,
                " (",
                this.props.serverAddress,
                ")"
              )
            )
          );
        }
      }
      class dn extends t().PureComponent {
        constructor(e) {
          super(e);
        }
        render() {
          let e = null,
            a = "bubble";
          return (
            this.props.deleted
              ? ((e = t().createElement(
                  t().Fragment,
                  null,
                  t().createElement(
                    "i",
                    { className: "material-icons gray" },
                    "block"
                  ),
                  " ",
                  t().createElement(
                    "i",
                    { className: "gray" },
                    t().createElement(i.FormattedMessage, {
                      id: "deleted_content",
                      defaultMessage: [{ type: 0, value: "content deleted" }],
                    })
                  )
                )),
                (a += " deleted"))
              : this.props.date &&
                ((e = t().createElement(t().Fragment, null, this.props.date)),
                (a += " date")),
            e
              ? t().createElement(
                  "li",
                  { className: "meta" },
                  t().createElement(
                    "div",
                    { className: a },
                    t().createElement(
                      "div",
                      { className: "message-content" },
                      e
                    )
                  )
                )
              : t().createElement(t().Fragment, null, null)
          );
        }
      }
      class hn {
        static parseUrlHash(e) {
          const t = e.split("?", 2),
            a = {};
          let s = [];
          return (
            t[0] && (s = t[0].replace("#", "").split("/")),
            t[1] &&
              t[1].split("&").forEach((e) => {
                const t = e.indexOf("=");
                t > 0 &&
                  (a[e.slice(0, t)] = decodeURIComponent(e.slice(t + 1)));
              }),
            { path: s, params: a }
          );
        }
        static navigateTo(e) {
          window.location.hash = e;
        }
        static composeUrlHash(e, t) {
          let a = e.join("/");
          const s = [];
          for (const e in t)
            t.hasOwnProperty(e) && s.push(e + "=" + encodeURIComponent(t[e]));
          return s.length > 0 && (a += "?" + s.join("&")), a;
        }
        static addUrlParam(e, t, a) {
          const s = hn.parseUrlHash(e);
          return (s.params[t] = a), hn.composeUrlHash(s.path, s.params);
        }
        static removeUrlParam(e, t) {
          const a = hn.parseUrlHash(e);
          return delete a.params[t], hn.composeUrlHash(a.path, a.params);
        }
        static setUrlSidePanel(e, t) {
          const a = hn.parseUrlHash(e);
          return (a.path[0] = t), hn.composeUrlHash(a.path, a.params);
        }
        static setUrlInfoPanel(e, t) {
          const a = hn.parseUrlHash(e);
          return (
            t ? (a.params.info = t) : delete a.params.info,
            hn.composeUrlHash(a.path, a.params)
          );
        }
        static setUrlTopic(e, t) {
          const a = hn.parseUrlHash(e);
          return (
            (a.path[1] = t),
            delete a.params.info,
            hn.composeUrlHash(a.path, a.params)
          );
        }
      }
      const pn = (0, i.defineMessages)({
        online_now: {
          id: "online_now",
          defaultMessage: [{ type: 0, value: "online now" }],
        },
        last_seen: {
          id: "last_seen_timestamp",
          defaultMessage: [{ type: 0, value: "Last seen" }],
        },
        not_found: {
          id: "title_not_found",
          defaultMessage: [{ type: 0, value: "Not found" }],
        },
        channel: {
          id: "channel",
          defaultMessage: [{ type: 0, value: "channel" }],
        },
        file_attachment_too_large: {
          id: "file_attachment_too_large",
          defaultMessage: [
            { type: 0, value: "The file size " },
            { type: 1, value: "size" },
            { type: 0, value: " exceeds the " },
            { type: 1, value: "limit" },
            { type: 0, value: " limit." },
          ],
        },
        invalid_content: {
          id: "invalid_content",
          defaultMessage: [{ type: 0, value: "invalid content" }],
        },
      });
      function un(e) {
        if (e) {
          const t = e.getExcessive() || "";
          return e.isJoiner("given") && (t.includes("R") || t.includes("W"));
        }
        return !1;
      }
      function mn(e) {
        if (e) {
          const t = e.getMissing() || "";
          return e.isJoiner("want") && (t.includes("R") || t.includes("W"));
        }
        return !1;
      }
      function gn(e) {
        return 1 == e || 3 == e;
      }
      class _n extends t().Component {
        constructor(e) {
          super(e),
            (this.state = _n.getDerivedStateFromProps(e, {})),
            (this.leave = this.leave.bind(this)),
            (this.sendMessage = this.sendMessage.bind(this)),
            (this.retrySend = this.retrySend.bind(this)),
            (this.sendImageAttachment = this.sendImageAttachment.bind(this)),
            (this.sendFileAttachment = this.sendFileAttachment.bind(this)),
            (this.sendAudioAttachment = this.sendAudioAttachment.bind(this)),
            (this.sendKeyPress = this.sendKeyPress.bind(this)),
            (this.subscribe = this.subscribe.bind(this)),
            (this.handleScrollReference =
              this.handleScrollReference.bind(this)),
            (this.handleScrollEvent = this.handleScrollEvent.bind(this)),
            (this.handleDescChange = this.handleDescChange.bind(this)),
            (this.handleSubsUpdated = this.handleSubsUpdated.bind(this)),
            (this.handleMessageUpdate = this.handleMessageUpdate.bind(this)),
            (this.handleAllMessagesReceived =
              this.handleAllMessagesReceived.bind(this)),
            (this.handleInfoReceipt = this.handleInfoReceipt.bind(this)),
            (this.handleImagePostview = this.handleImagePostview.bind(this)),
            (this.handleClosePreview = this.handleClosePreview.bind(this)),
            (this.handleFormResponse = this.handleFormResponse.bind(this)),
            (this.handleContextClick = this.handleContextClick.bind(this)),
            (this.handleShowMessageContextMenu =
              this.handleShowMessageContextMenu.bind(this)),
            (this.handleNewChatAcceptance =
              this.handleNewChatAcceptance.bind(this)),
            (this.handleEnablePeer = this.handleEnablePeer.bind(this)),
            (this.handleAttachFile = this.handleAttachFile.bind(this)),
            (this.handleAttachImage = this.handleAttachImage.bind(this)),
            (this.handleCancelUpload = this.handleCancelUpload.bind(this)),
            (this.postReadNotification = this.postReadNotification.bind(this)),
            (this.clearNotificationQueue =
              this.clearNotificationQueue.bind(this)),
            (this.goToLatestMessage = this.goToLatestMessage.bind(this)),
            (this.handlePickReply = this.handlePickReply.bind(this)),
            (this.handleCancelReply = this.handleCancelReply.bind(this)),
            (this.handleQuoteClick = this.handleQuoteClick.bind(this)),
            (this.handleCallHangup = this.handleCallHangup.bind(this)),
            (this.chatMessageRefs = {}),
            (this.getOrCreateMessageRef =
              this.getOrCreateMessageRef.bind(this)),
            (this.readNotificationQueue = []),
            (this.readNotificationTimer = null),
            (this.keyPressTimer = null);
        }
        getOrCreateMessageRef(e) {
          if (this.chatMessageRefs.hasOwnProperty(e))
            return this.chatMessageRefs[e];
          const a = t().createRef();
          return (this.chatMessageRefs[e] = a), a;
        }
        componentDidMount() {
          this.messagesScroller &&
            this.messagesScroller.addEventListener(
              "scroll",
              this.handleScrollEvent
            );
        }
        componentWillUnmount() {
          this.messagesScroller &&
            this.messagesScroller.removeEventListener(
              "scroll",
              this.handleScrollEvent
            ),
            this.clearNotificationQueue();
        }
        componentDidUpdate(e, t) {
          !this.messagesScroller ||
            (t.topic == this.state.topic &&
              t.messageCount == this.state.messageCount) ||
            (this.state.scrollPosition < 100 &&
              (this.messagesScroller.scrollTop =
                this.messagesScroller.scrollHeight -
                this.state.scrollPosition -
                this.messagesScroller.offsetHeight));
          const a = this.props.tinode
            ? this.props.tinode.getTopic(this.state.topic)
            : void 0;
          this.state.topic != t.topic &&
            (t.topic &&
              !Vt.Tinode.isNewGroupTopicName(t.topic) &&
              (this.leave(t.topic),
              t.rtcPanel && this.handleCallHangup(t.topic, e.callSeq)),
            a &&
              ((a.onData = this.handleMessageUpdate),
              (a.onAllMessagesReceived = this.handleAllMessagesReceived),
              (a.onInfo = this.handleInfoReceipt),
              (a.onMetaDesc = this.handleDescChange),
              (a.onSubsUpdated = this.handleSubsUpdated),
              (a.onPres = this.handleSubsUpdated))),
            this.props.applicationVisible
              ? this.postReadNotification(0)
              : this.clearNotificationQueue(),
            !a ||
              (this.state.topic == t.topic && e.ready) ||
              (a._new && a.isP2PType()
                ? a.getMeta(a.startMetaQuery().withDesc().build())
                : this.subscribe(a));
        }
        static getDerivedStateFromProps(e, t) {
          let a = {};
          if (e.topic)
            if (e.topic != t.topic) {
              const s = e.tinode.getTopic(e.topic);
              if (
                ((a = {
                  topic: e.topic,
                  docPreview: null,
                  imagePreview: null,
                  imagePostview: null,
                  rtcPanel: null,
                  typingIndicator: !1,
                  scrollPosition: 0,
                  fetchingMessages: !1,
                  showGoToLastButton: !1,
                  deleted: s._deleted,
                }),
                e.forwardMessage &&
                  (a.reply = { content: e.forwardMessage.preview, seq: null }),
                s)
              ) {
                const n = [];
                e.connected &&
                  s.subscribers((t) => {
                    t.online && t.user != e.myUserId && n.push(t);
                  }),
                  Object.assign(a, { onlineSubs: n }),
                  s.public
                    ? Object.assign(a, {
                        title: s.public.fn,
                        avatar: ka(s.public.photo),
                      })
                    : Object.assign(a, { title: "", avatar: null });
                const i = s.p2pPeerDesc();
                i
                  ? Object.assign(a, { peerMessagingDisabled: mn(i.acs) })
                  : t.peerMessagingDisabled &&
                    Object.assign(a, { peerMessagingDisabled: !1 }),
                  Object.assign(a, {
                    messageCount: s.messageCount(),
                    latestClearId: s.maxClearId(),
                    channel: s.isChannelType(),
                  }),
                  e.callTopic == s.name &&
                    gn(e.callState) &&
                    (a.rtcPanel = e.callTopic);
              } else
                Object.assign(a, {
                  messageCount: 0,
                  latestClearId: -1,
                  onlineSubs: [],
                  title: "",
                  avatar: null,
                  peerMessagingDisabled: !1,
                  channel: !1,
                });
            } else
              e.callTopic == t.topic &&
                !t.rtcPanel &&
                gn(e.callState) &&
                (a.rtcPanel = e.callTopic);
          else
            a = {
              messageCount: 0,
              latestClearId: -1,
              onlineSubs: [],
              topic: null,
              title: "",
              avatar: null,
              isVerified: !1,
              isStaff: !1,
              isDangerous: !1,
              deleted: !1,
              docPreview: null,
              imagePreview: null,
              imagePostview: null,
              rtcPanel: null,
              typingIndicator: !1,
              scrollPosition: 0,
              fetchingMessages: !1,
              peerMessagingDisabled: !1,
              channel: !1,
              reply: null,
              showGoToLastButton: !1,
            };
          return (
            e.acs
              ? (e.acs.isWriter() != t.isWriter && (a.isWriter = !t.isWriter),
                e.acs.isReader() != t.isReader && (a.isReader = !t.isReader),
                !e.acs.isReader("given") != t.readingBlocked &&
                  (a.readingBlocked = !t.readingBlocked),
                e.acs.isSharer() != t.isSharer && (a.isSharer = !t.isSharer))
              : (t.isWriter && (a.isWriter = !1),
                t.isReader && (a.isReader = !1),
                t.readingBlocked || (t.readingBlocked = !0),
                t.isSharer && (a.isSharer = !1)),
            un(e.acs) == !t.unconformed && (a.unconfirmed = !t.unconformed),
            !e.connected &&
              t.onlineSubs &&
              t.onlineSubs.length > 0 &&
              (a.onlineSubs = []),
            a
          );
        }
        subscribe(e) {
          if (e.isSubscribed() || !this.props.ready) return;
          const t =
            this.props.newTopicParams &&
            this.props.newTopicParams._topicName == this.props.topic;
          let a = e.startMetaQuery().withLaterDesc().withLaterSub();
          (this.state.isReader || t) &&
            ((a = a.withLaterData(24)),
            this.state.isReader && (a = a.withLaterDel()),
            this.setState({ fetchingMessages: !0 }));
          const s = t ? this.props.newTopicParams : void 0;
          e.subscribe(a.build(), s)
            .then((t) => {
              if (303 == t.code)
                return void hn.navigateTo(hn.setUrlTopic("", t.params.topic));
              this.state.topic != t.topic && this.setState({ topic: t.topic }),
                this.props.onNewTopicCreated(this.props.topic, t.topic);
              let a = [];
              e.queuedMessages((t) => {
                t._sending ||
                  (t.head && t.head.webrtc
                    ? a.push(t.seq)
                    : e.isSubscribed() && this.retrySend(t));
              }),
                a.length > 0 && e.delMessagesList(a, !0);
            })
            .catch((e) => {
              console.error("Failed subscription to", this.state.topic, e),
                this.props.onError(e.message, "err");
              const t = _n.getDerivedStateFromProps({}, {});
              (t.title = this.props.intl.formatMessage(pn.not_found)),
                this.setState(t);
            });
        }
        leave(e) {
          if (!e || !this.props.tinode.isTopicCached(e)) return;
          const t = this.props.tinode.getTopic(e);
          t &&
            t.isSubscribed() &&
            t
              .leave(!1)
              .catch(() => {})
              .finally(() => {
                this.setState({ fetchingMessages: !1 }),
                  (t.onData = void 0),
                  (t.onAllMessagesReceived = void 0),
                  (t.onInfo = void 0),
                  (t.onMetaDesc = void 0),
                  (t.onSubsUpdated = void 0),
                  (t.onPres = void 0);
              });
        }
        handleScrollReference(e) {
          e &&
            (e.addEventListener("scroll", this.handleScrollEvent),
            (this.messagesScroller = e),
            (this.messagesScroller.scrollTop =
              this.messagesScroller.scrollHeight - this.state.scrollPosition));
        }
        handleScrollEvent(e) {
          const t =
            e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight;
          if (
            (this.setState({
              scrollPosition: t,
              showGoToLastButton: t > 100 && t < this.state.scrollPosition,
            }),
            !this.state.fetchingMessages && e.target.scrollTop <= 0)
          ) {
            const e = this.props.tinode.getTopic(this.state.topic);
            e &&
              e.isSubscribed() &&
              e.msgHasMoreMessages() &&
              this.setState({ fetchingMessages: !0 }, () => {
                e.getMessagesPage(24)
                  .catch((e) => this.props.onError(e.message, "err"))
                  .finally(() => this.setState({ fetchingMessages: !1 }));
              });
          }
        }
        goToLatestMessage() {
          this.setState({ scrollPosition: 0 }),
            this.messagesScroller &&
              (this.messagesScroller.scrollTop =
                this.messagesScroller.scrollHeight);
        }
        handleDescChange(e) {
          e.public
            ? this.setState({ title: e.public.fn, avatar: ka(e.public.photo) })
            : this.setState({ title: "", avatar: null }),
            e.acs &&
              this.setState({
                isWriter: e.acs.isWriter(),
                isReader: e.acs.isReader(),
                readingBlocked: !e.acs.isReader("given"),
                unconfirmed: un(e.acs),
              });
        }
        postReadNotification(e) {
          if (!this.props.applicationVisible) return;
          this.readNotificationTimer ||
            (this.readNotificationTimer = setInterval((e) => {
              if (0 == this.readNotificationQueue.length)
                return (
                  clearInterval(this.readNotificationTimer),
                  void (this.readNotificationTimer = null)
                );
              let t = -1;
              for (; this.readNotificationQueue.length > 0; ) {
                const e = this.readNotificationQueue[0];
                if (e.topicName != this.state.topic) {
                  this.readNotificationQueue.shift();
                  continue;
                }
                const a = new Date();
                if (!(e.sendAt <= a)) break;
                this.readNotificationQueue.shift(), (t = Math.max(t, e.seq));
              }
              if (t >= 0) {
                const e = this.props.tinode.getTopic(this.state.topic);
                e && e.noteRead(t);
              }
            }, 300));
          const t = new Date();
          this.readNotificationQueue.push({
            topicName: this.state.topic,
            seq: e,
            sendAt: t.setMilliseconds(t.getMilliseconds() + 1500),
          });
        }
        clearNotificationQueue() {
          (this.readNotificationQueue = []),
            this.readNotificationTimer &&
              (clearInterval(this.readNotificationTimer),
              (this.readNotificationTimer = null));
        }
        handleSubsUpdated() {
          if (this.state.topic) {
            const e = [],
              t = this.props.tinode.getTopic(this.state.topic);
            t.subscribers((t) => {
              t.online && t.user != this.props.myUserId && e.push(t);
            });
            const a = { onlineSubs: e },
              s = t.p2pPeerDesc();
            s
              ? Object.assign(a, { peerMessagingDisabled: mn(s.acs) })
              : this.state.peerMessagingDisabled &&
                Object.assign(a, { peerMessagingDisabled: !1 }),
              this.setState(a);
          }
        }
        handleMessageUpdate(e) {
          const t = this.props.tinode.getTopic(this.state.topic);
          if (!e) return void this.setState({ latestClearId: t.maxClearId() });
          clearTimeout(this.keyPressTimer),
            this.setState(
              { messageCount: t.messageCount(), typingIndicator: !1 },
              (a) => {
                t.isNewMessage(e.seq) &&
                  (this.state.scrollPosition > 100
                    ? this.setState({ showGoToLastButton: !0 })
                    : this.goToLatestMessage());
              }
            );
          t.msgStatus(e, !0) >= Vt.Tinode.MESSAGE_STATUS_SENT &&
            e.from != this.props.myUserId &&
            this.postReadNotification(e.seq);
        }
        handleAllMessagesReceived(e) {
          this.setState({ fetchingMessages: !1 }),
            e > 0 && this.postReadNotification(0);
        }
        handleInfoReceipt(e) {
          switch (e.what) {
            case "kp":
              clearTimeout(this.keyPressTimer),
                (this.keyPressTimer = setTimeout(() => {
                  this.setState({ typingIndicator: !1 });
                }, 4e3)),
                this.state.typingIndicator ||
                  this.setState({ typingIndicator: !0 });
              break;
            case "read":
            case "recv":
              this.forceUpdate();
              break;
            default:
              console.info("Other change in topic: ", e.what);
          }
        }
        handleImagePostview(e) {
          this.setState({ imagePostview: e });
        }
        handleClosePreview() {
          this.state.imagePreview &&
            this.state.imagePreview.url &&
            URL.revokeObjectURL(this.state.imagePreview.url),
            this.setState({
              imagePostview: null,
              imagePreview: null,
              docPreview: null,
            });
        }
        handleFormResponse(e, t, a) {
          if ("pub" == e)
            this.sendMessage(Vt.Drafty.attachJSON(Vt.Drafty.parse(t), a));
          else if ("url" == e) {
            const e = new URL(a.ref),
              t = e.searchParams;
            for (let e in a.resp)
              a.resp.hasOwnProperty(e) && t.set(e, a.resp[e]);
            ["name", "seq"].map((e) => {
              a[e] && t.set(e, a[e]);
            }),
              t.set("uid", this.props.myUserId),
              t.set("topic", this.state.topic),
              (e.search = t),
              window.open(e, "_blank");
          } else console.info("Unknown action in form", e);
        }
        handleContextClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.showContextMenu({
              topicName: this.state.topic,
              y: e.pageY,
              x: e.pageX,
            });
        }
        handleShowMessageContextMenu(e, t) {
          "chan" == e.userFrom &&
            ((e.userFrom = this.state.topic), (e.userName = this.state.title)),
            (e.topicName = this.state.topic);
          const a = t || [],
            s = this.props.tinode.getTopic(e.topicName);
          if (s) {
            s.isChannelType() || a.push("message_delete");
            const e = s.getAccessMode();
            e && e.isDeleter() && a.push("message_delete_hard");
          }
          this.props.showContextMenu(e, a);
        }
        handleNewChatAcceptance(e) {
          this.props.onNewChat(this.state.topic, e);
        }
        handleEnablePeer(e) {
          e.preventDefault(),
            this.props.onChangePermissions(
              this.state.topic,
              Jt,
              this.state.topic
            );
        }
        sendKeyPress() {
          const e = this.props.tinode.getTopic(this.state.topic);
          e.isSubscribed() && e.noteKeyPress();
        }
        sendMessage(e, t, a) {
          let s;
          this.props.forwardMessage
            ? ((e = this.props.forwardMessage.msg),
              (s = this.props.forwardMessage.head),
              this.handleCancelReply())
            : this.state.reply &&
              this.state.reply.content &&
              ((s = { reply: "" + this.state.reply.seq }),
              "string" == typeof e && (e = Vt.Drafty.parse(e)),
              (e = Vt.Drafty.append(
                Vt.Drafty.sanitizeEntities(this.state.reply.content),
                e
              )),
              this.handleCancelReply()),
            this.props.sendMessage(e, t, a, s);
        }
        retrySend(e) {
          this.props.sendMessage(e.content, void 0, void 0, e.head).then(() => {
            this.props.tinode
              .getTopic(this.state.topic)
              .delMessagesList([e.seq], !0);
          });
        }
        sendFileAttachment(e) {
          const t =
            (0.75 * this.props.tinode.getServerParam("maxMessageSize", ea) -
              1024) |
            0;
          if (e.size > t) {
            const t = this.props.tinode.getLargeFileHelper();
            if (!t)
              return void this.props.onError(
                this.props.intl.formatMessage(pn.cannot_initiate_upload)
              );
            const a = t.upload(e),
              s = Vt.Drafty.attachFile(null, {
                mime: e.type,
                filename: e.name,
                size: e.size,
                urlPromise: a,
              });
            this.sendMessage(s, a, t);
          } else
            (function (e) {
              return new Promise((t, a) => {
                const s = new FileReader();
                (s.onerror = (e) => {
                  a(s.error);
                }),
                  (s.onload = () => {
                    t({
                      mime: e.type,
                      bits: s.result.split(",")[1],
                      name: e.name,
                    });
                  }),
                  s.readAsDataURL(e);
              });
            })(e)
              .then((e) =>
                this.sendMessage(
                  Vt.Drafty.attachFile(null, {
                    mime: e.mime,
                    data: e.bits,
                    filename: e.name,
                  })
                )
              )
              .catch((e) => this.props.onError(e));
        }
        handleAttachFile(e) {
          const t = this.props.tinode.getServerParam("maxFileUploadSize", ta);
          e.size > t
            ? this.props.onError(
                this.props.intl.formatMessage(pn.file_attachment_too_large, {
                  size: ha(e.size),
                  limit: ha(t),
                }),
                "err"
              )
            : this.setState({
                docPreview: {
                  file: e,
                  name: e.name,
                  size: e.size,
                  type: e.type,
                },
              });
        }
        handleCallHangup(e, t) {
          this.props.onVideoCallClosed(),
            this.setState({ rtcPanel: null }),
            this.props.onCallHangup(e, t);
        }
        sendImageAttachment(e, t) {
          const a = this.state.imagePreview.mime,
            s = this.state.imagePreview.width,
            n = this.state.imagePreview.height,
            i = this.state.imagePreview.name,
            o =
              (0.75 * this.props.tinode.getServerParam("maxMessageSize", ea) -
                1024) |
              0;
          if (t.size > o) {
            const o = this.props.tinode.getLargeFileHelper();
            if (!o)
              return void this.props.onError(
                this.props.intl.formatMessage(pn.cannot_initiate_upload)
              );
            const r = o.upload(t);
            Aa(t, 64, 64, -1, !1)
              .then((e) => Da(e.blob))
              .then((l) => {
                let c = Vt.Drafty.insertImage(null, 0, {
                  mime: a,
                  _tempPreview: l.bits,
                  width: s,
                  height: n,
                  filename: i,
                  size: t.size,
                  urlPromise: r,
                });
                e &&
                  ((c = Vt.Drafty.appendLineBreak(c)),
                  (c = Vt.Drafty.append(c, Vt.Drafty.parse(e)))),
                  this.sendMessage(c, r, o);
              })
              .catch((e) => {
                this.props.onError(e, "err");
              });
          } else
            Da(t).then((a) => {
              let o = Vt.Drafty.insertImage(null, 0, {
                mime: a.mime,
                preview: a.bits,
                width: s,
                height: n,
                filename: i,
                size: t.size,
              });
              e &&
                ((o = Vt.Drafty.appendLineBreak(o)),
                (o = Vt.Drafty.append(o, Vt.Drafty.parse(e)))),
                this.sendMessage(o);
            });
        }
        handleAttachImage(e) {
          Aa(
            e,
            1024,
            1024,
            this.props.tinode.getServerParam("maxFileUploadSize", ta),
            !1
          )
            .then((e) => {
              this.setState({
                imagePreview: {
                  url: URL.createObjectURL(e.blob),
                  blob: e.blob,
                  name: e.name,
                  width: e.width,
                  height: e.height,
                  size: e.blob.size,
                  mime: e.mime,
                },
              });
            })
            .catch((e) => {
              this.props.onError(e, "err");
            });
        }
        sendAudioAttachment(e, t, a) {
          fetch(e)
            .then((e) => e.blob())
            .then((e) => {
              const s =
                0.75 * this.props.tinode.getServerParam("maxMessageSize", ea) -
                1024;
              if (e.size > s) {
                const s = this.props.tinode.getLargeFileHelper();
                if (!s)
                  return void this.props.onError(
                    this.props.intl.formatMessage(pn.cannot_initiate_upload)
                  );
                const n = s.upload(e),
                  i = Vt.Drafty.appendAudio(null, {
                    mime: e.type,
                    size: e.size,
                    duration: a,
                    preview: t,
                    urlPromise: n,
                  });
                this.sendMessage(i, n, s);
              } else
                Da(e).then((s) => {
                  this.sendMessage(
                    Vt.Drafty.appendAudio(null, {
                      mime: s.mime,
                      size: e.size,
                      data: s.bits,
                      duration: a,
                      preview: t,
                    })
                  );
                });
            })
            .catch((e) => {
              this.props.onError(e);
            });
        }
        handleCancelUpload(e, t) {
          const a = this.props.tinode.getTopic(this.state.topic).findMessage(e);
          a && (a._cancelled = !0), t.cancel();
        }
        handlePickReply(e, t, a, s) {
          this.setState({ reply: null }),
            e &&
              t &&
              ((t = "string" == typeof t ? Vt.Drafty.init(t) : t),
              (t = Vt.Drafty.isValid(t)
                ? Vt.Drafty.replyContent(t, 30)
                : Vt.Drafty.append(
                    Vt.Drafty.init("⚠ "),
                    Vt.Drafty.wrapInto(
                      this.props.intl.formatMessage(pn.invalid_content),
                      "EM"
                    )
                  )),
              this.setState({
                reply: { content: Vt.Drafty.quote(s, a, t), seq: e },
              }),
              this.props.onCancelForwardMessage());
        }
        handleCancelReply() {
          this.setState({ reply: null }), this.props.onCancelForwardMessage();
        }
        handleQuoteClick(e) {
          const t = this.getOrCreateMessageRef(e);
          t && t.current
            ? (t.current.scrollIntoView({
                block: "center",
                behavior: "smooth",
              }),
              t.current.classList.add("flash"),
              setTimeout(() => {
                t.current.classList.remove("flash");
              }, 1e3))
            : console.error("Unresolved message ref", e);
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          let a;
          if (this.props.hideSelf) a = null;
          else if (this.state.topic) {
            let s;
            if (this.state.imagePreview)
              s = t().createElement(rn, {
                content: this.state.imagePreview,
                tinode: this.props.tinode,
                reply: this.state.reply,
                onCancelReply: this.handleCancelReply,
                onClose: this.handleClosePreview,
                onSendMessage: this.sendImageAttachment,
              });
            else if (this.state.imagePostview)
              s = t().createElement(rn, {
                content: this.state.imagePostview,
                onClose: this.handleClosePreview,
              });
            else if (this.state.docPreview)
              s = t().createElement(nn, {
                content: this.state.docPreview,
                tinode: this.props.tinode,
                reply: this.state.reply,
                onCancelReply: this.handleCancelReply,
                onClose: this.handleClosePreview,
                onSendMessage: this.sendFileAttachment,
              });
            else if (this.state.rtcPanel)
              s = t().createElement(js, {
                topic: this.state.topic,
                seq: this.props.callSeq,
                callState: this.props.callState,
                tinode: this.props.tinode,
                title: this.state.title,
                avatar: this.state.avatar || !0,
                onError: this.props.onError,
                onHangup: this.handleCallHangup,
                onInvite: this.props.onCallInvite,
                onSendOffer: this.props.onCallSendOffer,
                onIceCandidate: this.props.onCallIceCandidate,
                onSendAnswer: this.props.onCallSendAnswer,
              });
            else {
              const a = this.props.tinode.getTopic(this.state.topic),
                n = a.isChannelType(),
                o = a.isGroupType() && !n,
                r = [];
              a.trusted &&
                (a.trusted.verified &&
                  r.push({ icon: "verified", color: "badge-inv" }),
                a.trusted.staff &&
                  r.push({ icon: "staff", color: "badge-inv" }),
                a.trusted.danger &&
                  r.push({ icon: "dangerous", color: "badge-inv" }));
              const l = [];
              let c = null,
                d = null,
                h = null;
              const p = new Intl.DateTimeFormat(this.props.intl.locale);
              a.messages((e, s, n, i) => {
                let r = n ? n.from || "chan" : null,
                  u = "single",
                  m = e.from || "chan";
                m == c
                  ? (u = m == r ? "middle" : "last")
                  : m == r && (u = "first"),
                  (c = m);
                const g = !(m == this.props.myUserId),
                  _ = a.msgStatus(e, !0);
                let f,
                  b,
                  v = m;
                const y = a.userDesc(m);
                y && y.public && ((f = y.public.fn), (b = ka(y.public.photo))),
                  (h = o ? "chat-box group" : "chat-box");
                const w = this.getOrCreateMessageRef(e.seq);
                let C = e.head ? parseInt(e.head.reply) : null;
                if (((C && !isNaN(C)) || (C = null), e.hi))
                  l.push(t().createElement(dn, { deleted: !0, key: e.seq }));
                else {
                  const a = new Date(e.ts);
                  (d && d.toDateString() == a.toDateString()) ||
                    (l.push(
                      t().createElement(dn, {
                        date: p.format(e.ts),
                        locale: this.props.intl.locale,
                        key: "date-" + e.seq,
                      })
                    ),
                    (d = a)),
                    l.push(
                      t().createElement(Qs, {
                        tinode: this.props.tinode,
                        content: e.content,
                        mimeType: e.head && e.head.mime,
                        timestamp: e.ts,
                        response: g,
                        seq: e.seq,
                        isGroup: o,
                        isChan: this.state.channel,
                        userFrom: v,
                        userName: f,
                        userAvatar: b,
                        sequence: u,
                        received: _,
                        uploader: e._uploader,
                        viewportWidth: this.props.viewportWidth,
                        showContextMenu: this.handleShowMessageContextMenu,
                        onImagePreview: this.handleImagePostview,
                        onFormResponse: this.handleFormResponse,
                        onError: this.props.onError,
                        onCancelUpload: this.handleCancelUpload,
                        pickReply: this.handlePickReply,
                        replyToSeq: C,
                        onQuoteClick: this.handleQuoteClick,
                        ref: w,
                        userIsWriter: this.state.isWriter,
                        key: e.seq,
                      })
                    );
                }
              });
              let u = null;
              if (n) u = e(pn.channel);
              else {
                const t = this.props.tinode
                  .getMeTopic()
                  .getContact(this.state.topic);
                t &&
                  Vt.Tinode.isP2PTopicName(t.topic) &&
                  (t.online
                    ? (u = e(pn.online_now))
                    : t.seen &&
                      (u =
                        e(pn.last_seen) +
                        ": " +
                        (function (e, t) {
                          t =
                            t ||
                            window.navigator.userLanguage ||
                            window.navigator.language;
                          const a = new Date();
                          return e.getFullYear() == a.getFullYear()
                            ? e.getMonth() == a.getMonth() &&
                              e.getDate() == a.getDate()
                              ? e.toLocaleTimeString(t, {
                                  hour12: !1,
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : e.toLocaleDateString(t, {
                                  hour12: !1,
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                            : e.toLocaleDateString(t, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              });
                        })(t.seen.when, this.props.intl.locale)));
              }
              const m = this.state.avatar || !0,
                g = this.state.deleted
                  ? null
                  : this.props.online
                  ? "online" + (this.state.typingIndicator ? " typing" : "")
                  : "offline",
                _ = "panel-title" + (this.state.deleted ? " deleted" : "");
              s = t().createElement(
                t().Fragment,
                null,
                t().createElement(
                  "div",
                  { id: "topic-caption-panel", className: "caption-panel" },
                  this.props.displayMobile
                    ? t().createElement(
                        "a",
                        {
                          href: "#",
                          id: "hide-message-view",
                          onClick: (e) => {
                            e.preventDefault(), this.props.onHideMessagesView();
                          },
                        },
                        t().createElement(
                          "i",
                          { className: "material-icons" },
                          "arrow_back"
                        )
                      )
                    : null,
                  t().createElement(
                    "div",
                    { className: "avatar-box" },
                    t().createElement(Ca, {
                      tinode: this.props.tinode,
                      avatar: m,
                      topic: this.state.topic,
                      title: this.state.title,
                      deleted: this.state.deleted,
                    }),
                    n ? null : t().createElement("span", { className: g })
                  ),
                  t().createElement(
                    "div",
                    { id: "topic-title-group" },
                    t().createElement(
                      "div",
                      { id: "topic-title", className: _ },
                      this.state.title ||
                        t().createElement(
                          "i",
                          null,
                          t().createElement(i.FormattedMessage, {
                            id: "unnamed_topic",
                            defaultMessage: [{ type: 0, value: "Unnamed" }],
                          })
                        ),
                      t().createElement(ca, { badges: r })
                    ),
                    t().createElement("div", { id: "topic-last-seen" }, u)
                  ),
                  o
                    ? t().createElement(on, {
                        tinode: this.props.tinode,
                        subscribers: this.state.onlineSubs,
                      })
                    : t().createElement("div", { id: "topic-users" }),
                  t().createElement(
                    "div",
                    null,
                    t().createElement(
                      "a",
                      { href: "#", onClick: this.handleContextClick },
                      t().createElement(
                        "i",
                        { className: "material-icons" },
                        "more_vert"
                      )
                    )
                  )
                ),
                this.props.displayMobile
                  ? t().createElement(ms, {
                      level: this.props.errorLevel,
                      text: this.props.errorText,
                      onClearError: this.props.onError,
                    })
                  : null,
                t().createElement(ds, { show: this.state.fetchingMessages }),
                t().createElement(
                  "div",
                  { id: "messages-container" },
                  t().createElement(
                    "button",
                    {
                      className:
                        "action-button" +
                        (this.state.showGoToLastButton ? "" : " hidden"),
                      onClick: this.goToLatestMessage,
                    },
                    t().createElement(
                      "i",
                      { className: "material-icons" },
                      "arrow_downward"
                    )
                  ),
                  t().createElement(
                    "div",
                    { id: "messages-panel", ref: this.handleScrollReference },
                    t().createElement("ul", { id: "scroller", className: h }, l)
                  ),
                  this.state.isReader
                    ? null
                    : t().createElement(
                        "div",
                        { id: "write-only-background" },
                        this.state.readingBlocked
                          ? t().createElement(
                              "div",
                              { id: "write-only-note" },
                              t().createElement(i.FormattedMessage, {
                                id: "messages_not_readable",
                                defaultMessage: [
                                  { type: 0, value: "no access to messages" },
                                ],
                              })
                            )
                          : null
                      )
                ),
                this.state.peerMessagingDisabled && !this.state.unconfirmed
                  ? t().createElement(
                      "div",
                      { id: "peer-messaging-disabled-note" },
                      t().createElement(
                        "i",
                        { className: "material-icons secondary" },
                        "block"
                      ),
                      " ",
                      t().createElement(i.FormattedMessage, {
                        id: "peers_messaging_disabled",
                        defaultMessage: [
                          { type: 0, value: "Peer's messaging is disabled." },
                        ],
                      }),
                      " ",
                      t().createElement(
                        "a",
                        { href: "#", onClick: this.handleEnablePeer },
                        t().createElement(i.FormattedMessage, {
                          id: "enable_peers_messaging",
                          defaultMessage: [{ type: 0, value: "Enable" }],
                        })
                      ),
                      "."
                    )
                  : null,
                this.state.unconfirmed
                  ? t().createElement(ln, {
                      onAction: this.handleNewChatAcceptance,
                    })
                  : t().createElement(sn, {
                      tinode: this.props.tinode,
                      topicName: this.state.topic,
                      noInput: !!this.props.forwardMessage,
                      disabled: !this.state.isWriter || this.state.deleted,
                      onKeyPress: this.sendKeyPress,
                      onSendMessage: this.sendMessage,
                      onAttachFile: this.props.forwardMessage
                        ? null
                        : this.handleAttachFile,
                      onAttachImage: this.props.forwardMessage
                        ? null
                        : this.handleAttachImage,
                      onAttachAudio: this.props.forwardMessage
                        ? null
                        : this.sendAudioAttachment,
                      onError: this.props.onError,
                      reply: this.state.reply,
                      onQuoteClick: this.handleQuoteClick,
                      onCancelReply: this.handleCancelReply,
                    })
              );
            }
            a = t().createElement("div", { id: "topic-view" }, s);
          } else
            a = t().createElement(cn, {
              serverVersion: this.props.serverVersion,
              serverAddress: this.props.serverAddress,
            });
          return a;
        }
      }
      const fn = (0, i.injectIntl)(_n);
      class bn extends t().PureComponent {
        render() {
          return t().createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), this.props.onBack();
              },
            },
            t().createElement(
              "i",
              { className: "material-icons" },
              "arrow_back"
            )
          );
        }
      }
      class vn extends t().PureComponent {
        render() {
          return t().createElement(
            "div",
            null,
            t().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onNewTopic();
                },
              },
              t().createElement("i", { className: "material-icons" }, "chat")
            ),
            " ",
            t().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onSettings();
                },
              },
              t().createElement(
                "i",
                { className: "material-icons" },
                "settings"
              )
            )
          );
        }
      }
      class yn extends t().PureComponent {
        render() {
          return t().createElement(
            "div",
            null,
            t().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onSignUp();
                },
              },
              t().createElement(
                "i",
                { className: "material-icons" },
                "person_add"
              )
            ),
            " ",
            t().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onSettings();
                },
              },
              t().createElement(
                "i",
                { className: "material-icons" },
                "settings"
              )
            )
          );
        }
      }
      class wn extends t().PureComponent {
        render() {
          const e = [];
          this.props.trustedBadges &&
            this.props.trustedBadges.map((t) => {
              e.push({ icon: t, color: "badge-inv" });
            });
          let a = null;
          return (
            this.props.tinode &&
              (a = this.props.tinode.authorizeURL(
                ba(this.props.avatar, "image")
              )),
            t().createElement(
              "div",
              { id: "side-caption-panel", className: "caption-panel" },
              this.props.onCancel
                ? t().createElement(bn, { onBack: this.props.onCancel })
                : null,
              a
                ? t().createElement(
                    "div",
                    { id: "self-avatar", className: "avatar-box" },
                    t().createElement(Ca, {
                      tinode: this.props.tinode,
                      avatar: a,
                      topic: this.props.myUserId,
                      title: this.props.title,
                    })
                  )
                : null,
              t().createElement(
                "div",
                { id: "sidepanel-title", className: "panel-title" },
                this.props.title,
                t().createElement(ca, { badges: e })
              ),
              "login" === this.props.state
                ? t().createElement(yn, {
                    onSignUp: this.props.onSignUp,
                    onSettings: this.props.onSettings,
                  })
                : "contacts" === this.props.state
                ? t().createElement(vn, {
                    onNewTopic: this.props.onNewTopic,
                    onSettings: this.props.onSettings,
                  })
                : null
            )
          );
        }
      }
      function Cn(e, t) {
        return e && e.substring(0, t);
      }
      class En extends t().Component {
        constructor(e) {
          super(e);
          const t = this.props.tinode.getMeTopic();
          this.state = {
            fullName: Cn(t.public ? t.public.fn : void 0, sa),
            description: Cn(t.public ? t.public.note : void 0, na),
            avatar: ka(t.public ? t.public.photo : null),
          };
        }
        render() {
          return t().createElement(
            "div",
            { className: "scrollable-panel" },
            t().createElement(
              "div",
              { className: "panel-form-column" },
              t().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button float-right",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onNavigate("general");
                  },
                },
                t().createElement("i", { className: "material-icons" }, "edit"),
                " ",
                t().createElement(i.FormattedMessage, {
                  id: "button_edit",
                  defaultMessage: [{ type: 0, value: "Edit" }],
                })
              ),
              t().createElement(
                "center",
                null,
                t().createElement(hs, {
                  tinode: this.props.tinode,
                  avatar: this.state.avatar,
                  readOnly: !0,
                  uid: this.props.myUserId,
                  title: this.state.fullName,
                })
              ),
              t().createElement(
                "div",
                { className: "group" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_your_name",
                    defaultMessage: [{ type: 0, value: "Your name" }],
                  })
                ),
                t().createElement(
                  "div",
                  { className: "large ellipsized" },
                  this.state.fullName
                )
              ),
              t().createElement(
                "div",
                { className: "group" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_user_id",
                    defaultMessage: [{ type: 0, value: "ID:" }],
                  })
                ),
                " ",
                t().createElement("tt", null, this.props.myUserId)
              ),
              t().createElement(
                "div",
                { className: "group" },
                t().createElement(os, {
                  trustedBadges: this.props.trustedBadges,
                })
              ),
              this.state.description
                ? t().createElement(
                    "div",
                    { className: "group" },
                    t().createElement(
                      "label",
                      { className: "small" },
                      t().createElement(i.FormattedMessage, {
                        id: "label_description",
                        defaultMessage: [{ type: 0, value: "Description" }],
                      })
                    ),
                    t().createElement("div", null, this.state.description)
                  )
                : null
            ),
            t().createElement("div", { className: "hr" }),
            t().createElement(
              "div",
              { className: "panel-form-column" },
              t().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onNavigate("notif");
                  },
                },
                t().createElement(
                  "i",
                  { className: "material-icons" },
                  "notifications"
                ),
                " ",
                t().createElement(i.FormattedMessage, {
                  id: "sidepanel_title_acc_notifications",
                  defaultMessage: [{ type: 0, value: "Notifications" }],
                })
              ),
              t().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onNavigate("security");
                  },
                },
                t().createElement(
                  "i",
                  { className: "material-icons" },
                  "security"
                ),
                " ",
                t().createElement(i.FormattedMessage, {
                  id: "button_security",
                  defaultMessage: [{ type: 0, value: "Security" }],
                })
              ),
              t().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onNavigate("support");
                  },
                },
                t().createElement(
                  "i",
                  { className: "material-icons" },
                  "contact_support"
                ),
                " ",
                t().createElement(i.FormattedMessage, {
                  id: "sidepanel_title_acc_support",
                  defaultMessage: [{ type: 0, value: "Support" }],
                })
              )
            )
          );
        }
      }
      const Sn = (0, i.defineMessages)({
        archived_contacts_title: {
          id: "archived_contacts",
          defaultMessage: [
            { type: 0, value: "Archived contacts (" },
            { type: 1, value: "count" },
            { type: 0, value: ")" },
          ],
        },
      });
      class Mn extends t().Component {
        constructor(e) {
          super(e),
            (this.handleAction = this.handleAction.bind(this)),
            (this.state = Mn.deriveStateFromProps(e));
        }
        static deriveStateFromProps(e) {
          const t = [];
          let a = 0,
            s = 0;
          return (
            e.chatList.map((n) => {
              const i = n.acs && !n.acs.isJoiner();
              i && e.blocked && t.push(n),
                i ||
                  e.blocked ||
                  (n.private && n.private.arch
                    ? e.archive
                      ? t.push(n)
                      : s++
                    : e.archive || (t.push(n), (a += n.unread > 0 ? 1 : 0)));
            }),
            t.sort((e, t) => (t.touched || 0) - (e.touched || 0)),
            s > 0 &&
              t.push({
                action: "archive",
                title: Sn.archived_contacts_title,
                values: { count: s },
              }),
            { contactList: t, unreadThreads: a }
          );
        }
        componentDidUpdate(e, t) {
          if (
            e.chatList != this.props.chatList ||
            e.archive != this.props.archive ||
            e.blocked != this.props.blocked
          ) {
            const e = Mn.deriveStateFromProps(this.props);
            this.setState(e),
              e.unreadThreads != t.unreadThreads && ma(e.unreadThreads);
          }
        }
        handleAction(e) {
          this.props.onShowArchive();
        }
        render() {
          return t().createElement(
            i.FormattedMessage,
            {
              id: "contacts_not_found",
              defaultMessage: [
                { type: 0, value: "You have no chats" },
                { type: 0, value: "<br/>" },
                { type: 0, value: "¯∖_(ツ)_/¯" },
              ],
            },
            (e) =>
              t().createElement(es, {
                tinode: this.props.tinode,
                connected: this.props.connected,
                contacts: this.state.contactList,
                emptyListMessage: e,
                topicSelected: this.props.topicSelected,
                myUserId: this.props.myUserId,
                showOnline: !0,
                showUnread: !0,
                onTopicSelected: this.props.onTopicSelected,
                showContextMenu: this.props.showContextMenu,
                onAction: this.handleAction,
              })
          );
        }
      }
      class kn {
        static setObject(e, t) {
          localStorage.setItem(e, JSON.stringify(t));
        }
        static getObject(e) {
          const t = localStorage.getItem(e);
          return t && JSON.parse(t);
        }
        static updateObject(e, t) {
          const a = this.getObject(e);
          this.setObject(e, Object.assign(a || {}, t));
        }
        static removeItem(e) {
          localStorage.removeItem(e);
        }
      }
      class Tn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              login: "",
              password: "",
              email: "",
              fn: "",
              imageUrl: null,
              uploadUrl: null,
              newAvatar: null,
              newAvatarMime: null,
              errorCleared: !1,
              buttonDisabled: !1,
              saveToken: kn.getObject("keep-logged-in"),
            }),
            (this.handleLoginChange = this.handleLoginChange.bind(this)),
            (this.handlePasswordChange = this.handlePasswordChange.bind(this)),
            (this.handleEmailChange = this.handleEmailChange.bind(this)),
            (this.handleFnChange = this.handleFnChange.bind(this)),
            (this.handleImageChanged = this.handleImageChanged.bind(this)),
            (this.handleToggleSaveToken =
              this.handleToggleSaveToken.bind(this)),
            (this.handleAvatarCropped = this.handleAvatarCropped.bind(this)),
            (this.handleAvatarCropCancel =
              this.handleAvatarCropCancel.bind(this)),
            (this.uploadAvatar = this.uploadAvatar.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        handleLoginChange(e) {
          this.setState({ login: e.target.value });
        }
        handlePasswordChange(e) {
          this.setState({ password: e });
        }
        handleEmailChange(e) {
          this.setState({ email: e.target.value });
        }
        handleFnChange(e) {
          this.setState({ fn: e.target.value });
        }
        handleImageChanged(e, t) {
          this.setState({ newAvatar: t, newAvatarMime: e });
        }
        handleToggleSaveToken() {
          kn.setObject("keep-logged-in", !this.state.saveToken),
            this.setState({ saveToken: !this.state.saveToken });
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.setState({ errorCleared: !1 }),
            this.props.onCreateAccount(
              this.state.login.trim(),
              this.state.password.trim(),
              ga(this.state.fn.trim().substring(0, sa), this.state.uploadUrl),
              { meth: "email", val: this.state.email }
            );
        }
        handleAvatarCropped(e, t, a, s) {
          const n = t ? URL.createObjectURL(t) : null;
          this.setState({ avatar: n, newAvatar: null, newAvatarMime: null }),
            t && this.uploadAvatar(e, t, a, s);
        }
        handleAvatarCropCancel() {
          this.setState({ newAvatar: null, newAvatarMime: null });
        }
        uploadAvatar(e, t, a, s) {
          const n = (e) => {
            let { mime: t, blob: a } = e;
            if (
              (this.setState({
                imageUrl: URL.createObjectURL(a),
                buttonDisabled: !0,
              }),
              a.size > 4096)
            ) {
              this.props.tinode
                .getLargeFileHelper()
                .upload(a, "newacc")
                .then((e) => this.setState({ uploadUrl: e }))
                .catch((e) => this.props.onError(e.message, "err"))
                .finally((e) => this.setState({ buttonDisabled: !1 }));
            } else
              Da(a)
                .then((e) =>
                  this.setState({ uploadUrl: ka({ data: e.bits, type: t }) })
                )
                .finally((e) => this.setState({ buttonDisabled: !1 }));
          };
          a > Zt || s > Zt || a != s
            ? Aa(t, Zt, Zt, ta, !0)
                .then((e) => n(e))
                .catch((e) => this.props.onError(e.message, "err"))
            : n({ mime: e, blob: t, width: a, height: s });
        }
        render() {
          if (this.state.newAvatar)
            return t().createElement(Ss, {
              avatar: this.state.newAvatar,
              mime: this.state.newAvatarMime,
              onSubmit: this.handleAvatarCropped,
              onCancel: this.handleAvatarCropCancel,
              onError: this.props.onError,
            });
          let e = "primary";
          return (
            this.props.disabled && (e += " disabled"),
            t().createElement(
              "form",
              { className: "panel-form-column", onSubmit: this.handleSubmit },
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "div",
                  { className: "panel-form-column" },
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "login_prompt",
                      defaultMessage: [{ type: 0, value: "Login" }],
                    },
                    (e) =>
                      t().createElement("input", {
                        type: "text",
                        placeholder: e,
                        autoComplete: "user-name",
                        value: this.state.login,
                        onChange: this.handleLoginChange,
                        required: !0,
                        autoFocus: !0,
                      })
                  ),
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "password_prompt",
                      defaultMessage: [{ type: 0, value: "Password" }],
                    },
                    (e) =>
                      t().createElement(Ms, {
                        placeholder: e,
                        autoComplete: "new-password",
                        value: this.state.password,
                        onFinished: this.handlePasswordChange,
                        required: !0,
                      })
                  )
                ),
                t().createElement(hs, {
                  tinode: this.props.tinode,
                  avatar: this.state.imageUrl,
                  onImageUpdated: this.handleImageChanged,
                  onError: this.props.onError,
                })
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  i.FormattedMessage,
                  {
                    id: "full_name_prompt",
                    defaultMessage: [
                      { type: 0, value: "Full name, e.g. John Doe" },
                    ],
                  },
                  (e) =>
                    t().createElement("input", {
                      type: "text",
                      placeholder: e,
                      autoComplete: "name",
                      value: this.state.fn,
                      onChange: this.handleFnChange,
                      required: !0,
                    })
                )
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  i.FormattedMessage,
                  {
                    id: "email_prompt",
                    defaultMessage: [
                      { type: 0, value: "Email, e.g. jdoe@example.com" },
                    ],
                  },
                  (e) =>
                    t().createElement("input", {
                      type: "email",
                      placeholder: e,
                      autoComplete: "email",
                      value: this.state.email,
                      onChange: this.handleEmailChange,
                      required: !0,
                    })
                )
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(ps, {
                  id: "save-token",
                  name: "save-token",
                  checked: this.state.saveToken,
                  onChange: this.handleToggleSaveToken,
                }),
                t().createElement(
                  i.FormattedMessage,
                  {
                    id: "stay_logged_in",
                    defaultMessage: [{ type: 0, value: "Stay logged in" }],
                  },
                  (e) =>
                    t().createElement(
                      "label",
                      { htmlFor: "save-token" },
                      " ",
                      e
                    )
                )
              ),
              t().createElement(
                "div",
                { className: "dialog-buttons" },
                t().createElement(
                  "button",
                  {
                    className: e,
                    type: "submit",
                    disabled: this.state.buttonDisabled,
                  },
                  t().createElement(i.FormattedMessage, {
                    id: "button_sign_up",
                    defaultMessage: [{ type: 0, value: "Sign up" }],
                  })
                )
              )
            )
          );
        }
      }
      class Nn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.handleCheckboxClick = this.handleCheckboxClick.bind(this));
        }
        handleCheckboxClick(e, t) {
          "sound" == e
            ? this.props.onToggleMessageSounds(t)
            : "alert" == e
            ? this.props.onTogglePushNotifications(t)
            : "incognito" == e && this.props.onToggleIncognitoMode(t);
        }
        render() {
          return t().createElement(
            "div",
            { className: "scrollable-panel" },
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                "label",
                { htmlFor: "message-sound" },
                t().createElement(i.FormattedMessage, {
                  id: "label_message_sound",
                  defaultMessage: [{ type: 0, value: "Message sound:" }],
                })
              ),
              t().createElement(ps, {
                name: "sound",
                id: "message-sound",
                checked: this.props.messageSounds,
                onChange: this.handleCheckboxClick,
              })
            ),
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                "label",
                { htmlFor: "desktop-alerts" },
                this.props.desktopAlertsEnabled
                  ? t().createElement(i.FormattedMessage, {
                      id: "label_push_notifications",
                      defaultMessage: [
                        { type: 0, value: "Notification alerts:" },
                      ],
                    })
                  : t().createElement(i.FormattedMessage, {
                      id: "label_push_notifications_disabled",
                      defaultMessage: [
                        {
                          type: 0,
                          value: "Notification alerts (requires HTTPS):",
                        },
                      ],
                    })
              ),
              t().createElement(ps, {
                name: "alert",
                id: "desktop-alerts",
                checked: this.props.desktopAlerts,
                onChange: this.props.desktopAlertsEnabled
                  ? this.handleCheckboxClick
                  : null,
              })
            ),
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                "label",
                { htmlFor: "incognito-mode" },
                t().createElement(i.FormattedMessage, {
                  id: "label_incognito_mode",
                  defaultMessage: [{ type: 0, value: "Incognito mode:" }],
                })
              ),
              t().createElement(ps, {
                name: "incognito",
                id: "incognito-mode",
                checked: this.props.incognitoMode,
                onChange: this.handleCheckboxClick,
              })
            )
          );
        }
      }
      const An = (0, i.defineMessages)({
        delete_account: {
          id: "delete_account",
          defaultMessage: [{ type: 0, value: "Delete account" }],
        },
        delete_account_warning: {
          id: "delete_account_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to delete your account? It cannot be undone.",
            },
          ],
        },
      });
      class Dn extends t().Component {
        constructor(e) {
          super(e);
          const t = this.props.tinode.getMeTopic();
          let a = 0;
          t.contacts((e) => {
            e.acs && !e.acs.isJoiner() && a++;
          });
          const s = t.getDefaultAccess();
          (this.state = {
            auth: s ? s.auth : null,
            anon: s ? s.anon : null,
            showPermissionEditorFor: void 0,
            blockedCount: a,
          }),
            (this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this)),
            (this.handleLaunchPermissionsEditor =
              this.handleLaunchPermissionsEditor.bind(this)),
            (this.handleHidePermissionsEditor =
              this.handleHidePermissionsEditor.bind(this)),
            (this.handlePermissionsChanged =
              this.handlePermissionsChanged.bind(this)),
            (this.handleDeleteAccount = this.handleDeleteAccount.bind(this));
        }
        handlePasswordUpdate(e) {
          this.setState({ password: e }), this.props.onUpdatePassword(e);
        }
        handleLaunchPermissionsEditor(e) {
          this.setState({
            showPermissionEditorFor: e,
            editedPermissions: this.state[e],
          });
        }
        handleHidePermissionsEditor() {
          this.setState({ showPermissionEditorFor: void 0 });
        }
        handlePermissionsChanged(e) {
          let t = {};
          (t[this.state.showPermissionEditorFor] = e),
            this.props.onUpdateAccountDesc("me", void 0, void 0, t);
          let a = { showPermissionEditorFor: void 0 };
          (a[this.state.showPermissionEditorFor] = e), this.setState(a);
        }
        handleDeleteAccount(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(An.delete_account),
            t(An.delete_account_warning),
            () => {
              this.props.onDeleteAccount();
            },
            null,
            !0,
            null
          );
        }
        render() {
          return t().createElement(
            t().Fragment,
            null,
            this.state.showPermissionEditorFor
              ? t().createElement(Cs, {
                  mode: this.state.editedPermissions,
                  skip: "O",
                  onSubmit: this.handlePermissionsChanged,
                  onCancel: this.handleHidePermissionsEditor,
                })
              : t().createElement(
                  "div",
                  { className: "scrollable-panel" },
                  t().createElement(
                    "div",
                    { className: "panel-form-column" },
                    t().createElement(
                      "label",
                      { className: "small" },
                      t().createElement(i.FormattedMessage, {
                        id: "label_password",
                        defaultMessage: [{ type: 0, value: "Password" }],
                      })
                    ),
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        i.FormattedMessage,
                        {
                          id: "password_unchanged_prompt",
                          defaultMessage: [{ type: 0, value: "Unchanged" }],
                        },
                        (e) =>
                          t().createElement(ks, {
                            placeholder: e,
                            type: "password",
                            onFinished: this.handlePasswordUpdate,
                          })
                      )
                    )
                  ),
                  t().createElement("div", { className: "hr" }),
                  t().createElement(
                    "div",
                    { className: "panel-form-column" },
                    t().createElement(
                      "a",
                      {
                        href: "#",
                        className: "danger flat-button",
                        onClick: (e) => {
                          e.preventDefault(), this.props.onLogout();
                        },
                      },
                      t().createElement(
                        "i",
                        { className: "material-icons" },
                        "exit_to_app"
                      ),
                      "  ",
                      t().createElement(i.FormattedMessage, {
                        id: "button_logout",
                        defaultMessage: [{ type: 0, value: "Logout" }],
                      })
                    ),
                    t().createElement(
                      "a",
                      {
                        href: "#",
                        className: "danger flat-button",
                        onClick: (e) => {
                          this.handleDeleteAccount(e);
                        },
                      },
                      t().createElement(
                        "i",
                        { className: "material-icons" },
                        "delete"
                      ),
                      "  ",
                      t().createElement(i.FormattedMessage, {
                        id: "button_delete_account",
                        defaultMessage: [{ type: 0, value: "Delete account" }],
                      })
                    )
                  ),
                  t().createElement("div", { className: "hr" }),
                  t().createElement(
                    "div",
                    { className: "panel-form-column" },
                    t().createElement(
                      "div",
                      null,
                      t().createElement(
                        "label",
                        { className: "small" },
                        t().createElement(i.FormattedMessage, {
                          id: "label_default_access_mode",
                          defaultMessage: [
                            { type: 0, value: "Default access mode:" },
                          ],
                        })
                      )
                    ),
                    t().createElement(
                      "div",
                      { className: "quoted" },
                      t().createElement(
                        "div",
                        null,
                        "Auth: ",
                        t().createElement(
                          "tt",
                          {
                            className: "clickable",
                            onClick: this.handleLaunchPermissionsEditor.bind(
                              this,
                              "auth"
                            ),
                          },
                          this.state.auth
                        )
                      ),
                      t().createElement(
                        "div",
                        null,
                        "Anon: ",
                        t().createElement(
                          "tt",
                          {
                            className: "clickable",
                            onClick: this.handleLaunchPermissionsEditor.bind(
                              this,
                              "anon"
                            ),
                          },
                          this.state.anon
                        )
                      )
                    )
                  ),
                  this.state.blockedCount > 0
                    ? t().createElement(
                        t().Fragment,
                        null,
                        t().createElement("div", { className: "hr" }),
                        t().createElement(
                          "div",
                          { className: "panel-form-row" },
                          t().createElement(
                            "i",
                            { className: "material-icons" },
                            "block"
                          ),
                          " ",
                          t().createElement(
                            "a",
                            {
                              href: "#",
                              className: "gray",
                              onClick: (e) => {
                                e.preventDefault(), this.props.onShowBlocked();
                              },
                            },
                            t().createElement(i.FormattedMessage, {
                              id: "blocked_contacts_link",
                              defaultMessage: [
                                { type: 0, value: "Blocked contacts (" },
                                { type: 1, value: "count" },
                                { type: 0, value: ")" },
                              ],
                              values: { count: this.state.blockedCount },
                            })
                          )
                        )
                      )
                    : null
                )
          );
        }
      }
      const In = (0, i.injectIntl)(Dn);
      class Pn extends t().PureComponent {
        render() {
          return t().createElement(
            "div",
            { className: "scrollable-panel" },
            t().createElement(
              "div",
              { className: "panel-form-column" },
              t().createElement(
                "a",
                {
                  href: "mailto:support@tinode.co",
                  className: "flat-button",
                  target: "_blank",
                },
                t().createElement(
                  "i",
                  { className: "material-icons" },
                  "email"
                ),
                "  ",
                t().createElement(i.FormattedMessage, {
                  id: "link_contact_us",
                  defaultMessage: [{ type: 0, value: "Contact Us" }],
                })
              ),
              t().createElement(
                "a",
                {
                  href: "https://tinode.co/terms.html",
                  className: "flat-button",
                  target: "_blank",
                },
                t().createElement(
                  "i",
                  { className: "material-icons" },
                  "description"
                ),
                "  ",
                t().createElement(i.FormattedMessage, {
                  id: "link_terms_of_service",
                  defaultMessage: [{ type: 0, value: "Terms of Service" }],
                })
              ),
              t().createElement(
                "a",
                {
                  href: "https://tinode.co/privacy.html",
                  className: "flat-button",
                  target: "_blank",
                },
                t().createElement(
                  "i",
                  { className: "material-icons" },
                  "policy"
                ),
                "  ",
                t().createElement(i.FormattedMessage, {
                  id: "link_privacy_policy",
                  defaultMessage: [{ type: 0, value: "Privacy Policy" }],
                })
              )
            ),
            t().createElement("div", { className: "hr" }),
            t().createElement(
              "div",
              { className: "panel-form-column" },
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_client",
                    defaultMessage: [{ type: 0, value: "Client:" }],
                  })
                ),
                Gt
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_sdk",
                    defaultMessage: [{ type: 0, value: "SDK:" }],
                  })
                ),
                Vt.Tinode.getLibrary()
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_server",
                    defaultMessage: [{ type: 0, value: "Server:" }],
                  })
                ),
                this.props.serverVersion
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_server_address",
                    defaultMessage: [{ type: 0, value: "Server address:" }],
                  })
                ),
                this.props.serverAddress
              )
            )
          );
        }
      }
      class Un extends t().Component {
        constructor(e) {
          super(e),
            (this.state = {
              login: e.login,
              password: "",
              hostName: e.serverAddress,
              saveToken: e.persist,
            }),
            (this.handleLoginChange = this.handleLoginChange.bind(this)),
            (this.handlePasswordChange = this.handlePasswordChange.bind(this)),
            (this.handleToggleSaveToken =
              this.handleToggleSaveToken.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        handleLoginChange(e) {
          this.setState({ login: e.target.value });
        }
        handlePasswordChange(e) {
          this.setState({ password: e.target.value });
        }
        handleToggleSaveToken() {
          this.props.onPersistenceChange(!this.state.saveToken),
            this.setState({ saveToken: !this.state.saveToken });
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.props.onLogin(
              this.state.login.trim(),
              this.state.password.trim()
            );
        }
        render() {
          let e = "primary";
          return (
            this.props.disabled && (e += " disabled"),
            t().createElement(
              "form",
              { id: "login-form", onSubmit: this.handleSubmit },
              t().createElement(
                i.FormattedMessage,
                {
                  id: "login_prompt",
                  defaultMessage: [{ type: 0, value: "Login" }],
                },
                (e) =>
                  t().createElement("input", {
                    type: "text",
                    id: "inputLogin",
                    placeholder: e,
                    autoComplete: "username",
                    autoCorrect: "off",
                    autoCapitalize: "none",
                    value: this.state.login,
                    onChange: this.handleLoginChange,
                    required: !0,
                    autoFocus: !0,
                  })
              ),
              t().createElement(
                i.FormattedMessage,
                {
                  id: "password_prompt",
                  defaultMessage: [{ type: 0, value: "Password" }],
                },
                (e) =>
                  t().createElement(Ms, {
                    type: "password",
                    id: "inputPassword",
                    placeholder: e,
                    autoComplete: "current-password",
                    value: this.state.password,
                    onChange: this.handlePasswordChange,
                    required: !0,
                  })
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(ps, {
                  id: "save-token",
                  name: "save-token",
                  checked: this.state.saveToken,
                  onChange: this.handleToggleSaveToken,
                }),
                t().createElement(
                  "label",
                  { htmlFor: "save-token" },
                  " ",
                  t().createElement(i.FormattedMessage, {
                    id: "stay_logged_in",
                    defaultMessage: [{ type: 0, value: "Stay logged in" }],
                  })
                ),
                t().createElement(
                  "a",
                  { href: "#reset" },
                  t().createElement(i.FormattedMessage, {
                    id: "forgot_password_link",
                    defaultMessage: [{ type: 0, value: "Forgot password?" }],
                  })
                )
              ),
              t().createElement(
                "div",
                { className: "dialog-buttons" },
                t().createElement(
                  "button",
                  { className: e, type: "submit" },
                  t().createElement(i.FormattedMessage, {
                    id: "button_sign_in",
                    defaultMessage: [{ type: 0, value: "Sign in" }],
                  })
                )
              )
            )
          );
        }
      }
      const Rn = (0, i.defineMessages)({
        invalid_id: {
          id: "error_invalid_id",
          defaultMessage: [{ type: 0, value: "Invalid ID" }],
        },
      });
      class Fn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { groupId: "" }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.handleKeyPress = this.handleKeyPress.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        handleChange(e) {
          this.setState({ groupId: e.target.value });
        }
        handleKeyPress(e) {
          "Enter" === e.key && this.handleSubmit(e);
        }
        handleSubmit(e) {
          if ((e.preventDefault(), this.state.groupId)) {
            const e = this.state.groupId.trim(),
              t = e.substr(0, 3);
            e.length > 3 && ["usr", "grp", "chn"].includes(t)
              ? this.props.onSubmit(e)
              : this.props.onError(
                  this.props.intl.formatMessage(Rn.invalid_id),
                  "err"
                );
          }
        }
        render() {
          return t().createElement(
            "div",
            { className: "panel-form" },
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                i.FormattedMessage,
                {
                  id: "group_user_id_prompt",
                  defaultMessage: [{ type: 0, value: "Group or User ID" }],
                },
                (e) =>
                  t().createElement("input", {
                    type: "text",
                    placeholder: e,
                    value: this.state.groupId,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    required: !0,
                    autoFocus: !0,
                  })
              )
            ),
            t().createElement(
              "div",
              { className: "dialog-buttons" },
              t().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                t().createElement(i.FormattedMessage, {
                  id: "button_subscribe",
                  defaultMessage: [{ type: 0, value: "Subscribe" }],
                })
              )
            )
          );
        }
      }
      const xn = (0, i.injectIntl)(Fn);
      class Bn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.fullName = t().createRef()),
            (this.state = {
              fullName: "",
              private: "",
              description: "",
              imageDataUrl: null,
              tags: [],
              isChannel: !1,
            }),
            (this.handleFieldEdit = this.handleFieldEdit.bind(this)),
            (this.handleImageChanged = this.handleImageChanged.bind(this)),
            (this.handleTagsChanged = this.handleTagsChanged.bind(this)),
            (this.handleChannelToggle = this.handleChannelToggle.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        componentDidMount() {}
        handleFieldEdit(e, t) {
          this.setState({ [e]: t.target.value || "" });
        }
        handleImageChanged(e, t) {
          this.setState({ imageDataUrl: t });
        }
        handleTagsChanged(e) {
          this.setState({ tags: e });
        }
        handleChannelToggle() {
          this.setState({ isChannel: !this.state.isChannel });
        }
        handleSubmit(e) {
          e.preventDefault();
          const t = this.state.fullName.trim().substring(0, sa),
            a = this.state.private.trim().substring(0, sa),
            s = this.state.description.trim().substring(0, na);
          t &&
            this.props.onSubmit(
              t,
              s,
              this.state.imageDataUrl,
              a,
              this.state.tags,
              this.state.isChannel
            );
        }
        render() {
          let e = "primary";
          return (
            this.props.disabled && (e += " disabled"),
            t().createElement(
              "form",
              { className: "panel-form", onSubmit: this.handleSubmit },
              t().createElement(
                "div",
                { className: "panel-form-column" },
                t().createElement(
                  "center",
                  null,
                  t().createElement(hs, {
                    tinode: this.props.tinode,
                    onError: this.props.onError,
                    onImageUpdated: this.handleImageChanged,
                  })
                ),
                t().createElement(
                  "div",
                  { className: "group" },
                  t().createElement(
                    "label",
                    { className: "small", htmlFor: "new-topic-fn" },
                    t().createElement(i.FormattedMessage, {
                      id: "label_topic_name",
                      defaultMessage: [{ type: 0, value: "Name" }],
                    })
                  ),
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "topic_name_editing_placeholder",
                      defaultMessage: [
                        { type: 0, value: "Freeform name of the group" },
                      ],
                    },
                    (e) =>
                      t().createElement("input", {
                        type: "text",
                        id: "new-topic-fn",
                        placeholder: e,
                        ref: this.fullName,
                        value: this.state.fullName,
                        onChange: this.handleFieldEdit.bind(this, "fullName"),
                        autoFocus: !0,
                        required: !0,
                        tabIndex: 0,
                      })
                  )
                ),
                t().createElement(
                  "div",
                  { className: "group" },
                  t().createElement(
                    "label",
                    { className: "small", htmlFor: "new-topic-priv" },
                    t().createElement(i.FormattedMessage, {
                      id: "label_private",
                      defaultMessage: [{ type: 0, value: "Private comment" }],
                    })
                  ),
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "private_editing_placeholder",
                      defaultMessage: [
                        { type: 0, value: "Visible to you only" },
                      ],
                    },
                    (e) =>
                      t().createElement("input", {
                        type: "text",
                        id: "new-topic-priv",
                        placeholder: e,
                        value: this.state.private,
                        onChange: this.handleFieldEdit.bind(this, "private"),
                        tabIndex: 1,
                      })
                  )
                ),
                t().createElement(
                  "div",
                  { className: "group" },
                  t().createElement(
                    "label",
                    { className: "small", htmlFor: "new-topic-desc" },
                    t().createElement(i.FormattedMessage, {
                      id: "label_description",
                      defaultMessage: [{ type: 0, value: "Description" }],
                    })
                  ),
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "description_editing_placeholder",
                      defaultMessage: [
                        { type: 0, value: "Description (optional)" },
                      ],
                    },
                    (e) =>
                      t().createElement("input", {
                        type: "text",
                        id: "new-topic-desc",
                        placeholder: e,
                        value: this.state.description,
                        onChange: this.handleFieldEdit.bind(
                          this,
                          "description"
                        ),
                        tabIndex: 2,
                      })
                  )
                )
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(ps, {
                  checked: this.state.isChannel,
                  tabIndex: 3,
                  onChange: this.handleChannelToggle,
                }),
                " ",
                t().createElement(
                  "label",
                  { onClick: this.handleChannelToggle },
                  t().createElement(i.FormattedMessage, {
                    id: "channel_prompt",
                    defaultMessage: [{ type: 0, value: "This is a channel" }],
                  })
                )
              ),
              t().createElement(
                i.FormattedMessage,
                {
                  id: "title_tag_manager",
                  defaultMessage: [
                    { type: 0, value: "Tags (search & discovery)" },
                  ],
                },
                (e) =>
                  t().createElement(Ts, {
                    tinode: this.props.tinode,
                    tags: this.state.tags,
                    activated: !0,
                    onTagsChanged: this.handleTagsChanged,
                    tabIndex: 4,
                    title: e,
                  })
              ),
              t().createElement(
                "div",
                { className: "dialog-buttons" },
                t().createElement(
                  "button",
                  { className: e },
                  t().createElement(i.FormattedMessage, {
                    id: "button_create",
                    defaultMessage: [{ type: 0, value: "Create" }],
                  })
                )
              )
            )
          );
        }
      }
      const Ln = (0, i.defineMessages)({
        search_for_contacts: {
          id: "search_for_contacts",
          defaultMessage: [{ type: 0, value: "Use search to find contacts" }],
        },
        search_no_results: {
          id: "search_no_results",
          defaultMessage: [{ type: 0, value: "Search returned no results" }],
        },
        search_placeholder: {
          id: "search_placeholder",
          defaultMessage: [
            {
              type: 0,
              value: "List like email:alice@example.com, tel:17025550003...",
            },
          ],
        },
      });
      class On extends t().Component {
        constructor(e) {
          super(e),
            (this.state = { tabSelected: "find", searchQuery: null }),
            (this.handleTabClick = this.handleTabClick.bind(this)),
            (this.handleSearchContacts = this.handleSearchContacts.bind(this)),
            (this.handleSearchResultSelected =
              this.handleSearchResultSelected.bind(this)),
            (this.handleNewGroupSubmit = this.handleNewGroupSubmit.bind(this)),
            (this.handleGroupByID = this.handleGroupByID.bind(this));
        }
        componentDidMount() {
          this.props.onInitFind();
        }
        handleTabClick(e) {
          e.preventDefault(),
            hn.navigateTo(
              hn.addUrlParam(
                window.location.hash,
                "tab",
                e.currentTarget.dataset.id
              )
            ),
            this.setState({ tabSelected: e.currentTarget.dataset.id });
        }
        handleSearchContacts(e) {
          this.props.onSearchContacts(e),
            this.setState({ searchQuery: Vt.Tinode.isNullValue(e) ? null : e });
        }
        handleSearchResultSelected(e) {
          "find" == this.state.tabSelected &&
            (hn.navigateTo(hn.removeUrlParam(window.location.hash, "tab")),
            this.props.onCreateTopic(e));
        }
        handleNewGroupSubmit(e, t, a, s, n, i) {
          hn.navigateTo(hn.removeUrlParam(window.location.hash, "tab")),
            this.props.onCreateTopic(
              void 0,
              { public: ga(e, a, null, t), private: s, tags: n },
              i
            );
        }
        handleGroupByID(e) {
          hn.navigateTo(hn.removeUrlParam(window.location.hash, "tab")),
            this.props.onCreateTopic(e);
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            a = e(
              this.state.searchQuery
                ? Ln.search_no_results
                : Ln.search_for_contacts
            ),
            s = e(Ln.search_placeholder);
          return t().createElement(
            "div",
            { className: "flex-column" },
            t().createElement(
              "ul",
              { className: "tabbar" },
              t().createElement(
                "li",
                {
                  className:
                    "find" === this.state.tabSelected ? "active" : null,
                },
                t().createElement(
                  "a",
                  {
                    href: "#",
                    "data-id": "find",
                    onClick: this.handleTabClick,
                  },
                  t().createElement(i.FormattedMessage, {
                    id: "tabtitle_find_user",
                    defaultMessage: [{ type: 0, value: "find" }],
                  })
                )
              ),
              t().createElement(
                "li",
                {
                  className: "grp" === this.state.tabSelected ? "active" : null,
                },
                t().createElement(
                  "a",
                  { href: "#", "data-id": "grp", onClick: this.handleTabClick },
                  t().createElement(i.FormattedMessage, {
                    id: "tabtitle_new_group",
                    defaultMessage: [{ type: 0, value: "new group" }],
                  })
                )
              ),
              t().createElement(
                "li",
                {
                  className:
                    "byid" === this.state.tabSelected ? "active" : null,
                },
                t().createElement(
                  "a",
                  {
                    href: "#",
                    "data-id": "byid",
                    onClick: this.handleTabClick,
                  },
                  t().createElement(i.FormattedMessage, {
                    id: "tabtitle_group_by_id",
                    defaultMessage: [{ type: 0, value: "by id" }],
                  })
                )
              )
            ),
            "grp" === this.state.tabSelected
              ? t().createElement(Bn, {
                  tinode: this.props.tinode,
                  onSubmit: this.handleNewGroupSubmit,
                })
              : "byid" === this.state.tabSelected
              ? t().createElement(xn, {
                  onSubmit: this.handleGroupByID,
                  onError: this.props.onError,
                })
              : t().createElement(
                  "div",
                  { className: "flex-column" },
                  t().createElement(ts, {
                    placeholder: s,
                    onSearchContacts: this.handleSearchContacts,
                  }),
                  t().createElement(es, {
                    tinode: this.props.tinode,
                    contacts: this.props.searchResults,
                    myUserId: this.props.myUserId,
                    emptyListMessage: a,
                    showOnline: !1,
                    showUnread: !1,
                    showContextMenu: !1,
                    onTopicSelected: this.handleSearchResultSelected,
                  })
                )
          );
        }
      }
      const qn = (0, i.injectIntl)(On);
      class jn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { email: "", password: "", sent: !1 }),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleEmailChange = this.handleEmailChange.bind(this)),
            (this.handlePasswordChange = this.handlePasswordChange.bind(this));
        }
        componentDidMount() {
          const e = hn.parseUrlHash(window.location.hash);
          this.setState({ token: e.params.token, scheme: e.params.scheme });
        }
        handleSubmit(e) {
          if ((e.preventDefault(), this.state.token))
            this.props.onReset(
              this.state.scheme,
              this.state.password.trim(),
              this.state.token
            );
          else if (this.state.sent) this.props.onCancel();
          else {
            const e = this.state.email.trim();
            this.setState({ email: e }),
              this.props.onRequest("email", e).then(() => {
                this.setState({ sent: !0 });
              });
          }
        }
        handleEmailChange(e) {
          this.setState({ email: e.target.value });
        }
        handlePasswordChange(e) {
          this.setState({ password: e.target.value });
        }
        render() {
          return t().createElement(
            "form",
            { id: "password-reset-form", onSubmit: this.handleSubmit },
            this.state.token && this.state.scheme
              ? t().createElement(
                  t().Fragment,
                  null,
                  t().createElement(
                    "label",
                    { htmlFor: "new-password" },
                    t().createElement(i.FormattedMessage, {
                      id: "label_new_password",
                      defaultMessage: [{ type: 0, value: "New password" }],
                    })
                  ),
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "new_password_placeholder",
                      defaultMessage: [
                        { type: 0, value: "Enter new password" },
                      ],
                    },
                    (e) =>
                      t().createElement(Ms, {
                        id: "new-password",
                        placeholder: e,
                        autoComplete: "new-password",
                        value: this.state.password,
                        required: !0,
                        autoFocus: !0,
                        onChange: this.handlePasswordChange,
                      })
                  )
                )
              : this.state.sent
              ? t().createElement(
                  t().Fragment,
                  null,
                  t().createElement("br", null),
                  t().createElement(
                    "center",
                    null,
                    t().createElement(
                      "i",
                      { className: "material-icons huge green" },
                      "task_alt"
                    )
                  ),
                  t().createElement("br", null),
                  t().createElement(
                    "center",
                    null,
                    t().createElement(i.FormattedMessage, {
                      id: "password_reset_email_sent",
                      defaultMessage: [
                        { type: 0, value: "An email has been sent to " },
                        { type: 1, value: "email" },
                        {
                          type: 0,
                          value:
                            ". Follow the directions in the email to reset your password.",
                        },
                      ],
                      values: {
                        email: t().createElement("tt", null, this.state.email),
                      },
                    })
                  )
                )
              : t().createElement(
                  t().Fragment,
                  null,
                  t().createElement(
                    "label",
                    { htmlFor: "inputEmail" },
                    t().createElement(i.FormattedMessage, {
                      id: "label_reset_password",
                      defaultMessage: [
                        { type: 0, value: "Send a password reset email:" },
                      ],
                    })
                  ),
                  t().createElement(
                    i.FormattedMessage,
                    {
                      id: "credential_email_prompt",
                      defaultMessage: [
                        { type: 0, value: "Your registration email" },
                      ],
                    },
                    (e) =>
                      t().createElement("input", {
                        type: "email",
                        id: "inputEmail",
                        placeholder: e,
                        autoComplete: "email",
                        value: this.state.email,
                        onChange: this.handleEmailChange,
                        required: !0,
                        autoFocus: !0,
                      })
                  )
                ),
            t().createElement(
              "div",
              { className: "dialog-buttons" },
              t().createElement(
                "button",
                { className: "primary", type: "submit" },
                this.state.token && this.state.scheme
                  ? t().createElement(i.FormattedMessage, {
                      id: "button_reset",
                      defaultMessage: [{ type: 0, value: "Reset" }],
                    })
                  : this.state.sent
                  ? t().createElement(i.FormattedMessage, {
                      id: "button_ok",
                      defaultMessage: [{ type: 0, value: "OK" }],
                    })
                  : t().createElement(i.FormattedMessage, {
                      id: "button_send_request",
                      defaultMessage: [{ type: 0, value: "Send request" }],
                    })
              )
            )
          );
        }
      }
      class zn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { hostName: e.serverAddress, changed: !1 }),
            (this.handleHostNameChange = this.handleHostNameChange.bind(this)),
            (this.handleEditingFinished =
              this.handleEditingFinished.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this));
        }
        handleHostNameChange(e) {
          this.setState({ hostName: e.target.value, changed: !0 });
        }
        handleEditingFinished() {
          this.state.changed &&
            (this.setState({ changed: !1 }),
            this.props.onServerAddressChange(this.state.hostName.trim()));
        }
        handleKeyDown(e) {
          "Enter" == e.key && this.handleEditingFinished();
        }
        render() {
          var e = [];
          for (let a in $t) {
            let s = $t[a];
            e.push(t().createElement("option", { key: s, value: s }));
          }
          return t().createElement(
            "div",
            { className: "panel-form-row" },
            t().createElement("input", {
              type: "search",
              id: "host-name",
              placeholder: this.props.hostName,
              list: "known-hosts",
              className: "quoted",
              value: this.state.hostName,
              onChange: this.handleHostNameChange,
              onBlur: this.handleEditingFinished,
              onKeyDown: this.handleKeyDown,
              required: !0,
            }),
            t().createElement("datalist", { id: "known-hosts" }, e)
          );
        }
      }
      class Hn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              transport: e.transport || "def",
              serverAddress: e.serverAddress,
              secureConnection: e.secureConnection,
            }),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleTransportSelected =
              this.handleTransportSelected.bind(this)),
            (this.handleServerAddressChange =
              this.handleServerAddressChange.bind(this)),
            (this.handleToggleSecure = this.handleToggleSecure.bind(this));
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.props.onUpdate({
              transport: this.state.transport,
              serverAddress: this.state.serverAddress,
              secureConnection: this.state.secureConnection,
            });
        }
        handleTransportSelected(e) {
          this.setState({ transport: e.currentTarget.value });
        }
        handleServerAddressChange(e) {
          this.setState({ serverAddress: e });
        }
        handleToggleSecure(e) {
          this.setState({ secureConnection: !this.state.secureConnection });
        }
        render() {
          const e = { def: "default", ws: "websocket", lp: "long polling" },
            a = [];
          return (
            ["def", "ws", "lp"].map((s) => {
              const n = "transport-" + s,
                i = e[s];
              a.push(
                t().createElement(
                  "li",
                  { key: s },
                  t().createElement("input", {
                    type: "radio",
                    id: n,
                    name: "transport-select",
                    value: s,
                    checked: this.state.transport === s,
                    onChange: this.handleTransportSelected,
                  }),
                  t().createElement("label", { htmlFor: n }, i)
                )
              );
            }),
            t().createElement(
              "form",
              {
                id: "settings-form",
                className: "panel-form",
                onSubmit: this.handleSubmit,
              },
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_server_to_use",
                    defaultMessage: [{ type: 0, value: "Server to use:" }],
                  })
                )
              ),
              t().createElement(zn, {
                serverAddress: this.state.serverAddress,
                onServerAddressChange: this.handleServerAddressChange,
              }),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(ps, {
                  id: "secure-connection",
                  name: "secure-connection",
                  checked: this.state.secureConnection,
                  className: "quoted",
                  onChange: this.handleToggleSecure,
                }),
                t().createElement(
                  "label",
                  { htmlFor: "secure-connection" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_use_secure_connection",
                    defaultMessage: [
                      { type: 0, value: "Use secure connection" },
                    ],
                  })
                )
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement(
                  "label",
                  { className: "small" },
                  t().createElement(i.FormattedMessage, {
                    id: "label_wire_transport",
                    defaultMessage: [{ type: 0, value: "Wire transport:" }],
                  })
                )
              ),
              t().createElement(
                "div",
                { className: "panel-form-row" },
                t().createElement("ul", { className: "quoted" }, a)
              ),
              t().createElement(
                "div",
                { className: "dialog-buttons" },
                t().createElement(
                  "button",
                  { type: "submit", className: "primary" },
                  t().createElement(i.FormattedMessage, {
                    id: "button_update",
                    defaultMessage: [{ type: 0, value: "Update" }],
                  })
                )
              )
            )
          );
        }
      }
      const Vn = (0, i.defineMessages)({
        phone: {
          id: "phone_dative",
          defaultMessage: [{ type: 0, value: "phone" }],
        },
        email: {
          id: "email_dative",
          defaultMessage: [{ type: 0, value: "email" }],
        },
      });
      class Wn extends t().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { code: e.credCode || "", codeReceived: e.credCode }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.handleKeyPress = this.handleKeyPress.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        static getDerivedStateFromProps(e, t) {
          return e.credCode != t.codeReceived
            ? { code: e.credCode || "", codeReceived: e.credCode }
            : t;
        }
        componentDidMount() {
          this.props.credCode &&
            this.props.onSubmit(
              this.props.credMethod,
              this.props.credCode,
              this.props.credToken
            );
        }
        componentDidUpdate(e, t) {
          this.state.codeReceived &&
            this.state.code &&
            this.state.code != t.code &&
            this.props.onSubmit(
              this.props.credMethod,
              this.state.code,
              this.props.credToken
            );
        }
        handleChange(e) {
          this.setState({ code: e.target.value.trim() });
        }
        handleKeyPress(e) {
          "Enter" === e.key
            ? this.handleSubmit(e)
            : "Escape" == e.key && this.handleCancel(e);
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.state.code &&
              this.state.code.trim() &&
              this.props.onSubmit(
                this.props.credMethod,
                this.state.code.trim(),
                this.props.credToken
              );
        }
        handleCancel(e) {
          e.preventDefault(), this.props.onCancel();
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            a =
              { email: e(Vn.email), tel: e(Vn.phone) }[this.props.credMethod] ||
              this.props.credMethod;
          return t().createElement(
            "div",
            { className: "panel-form" },
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                "label",
                { className: "small", htmlFor: "enter-confirmation-code" },
                t().createElement(i.FormattedMessage, {
                  id: "enter_confirmation_code_prompt",
                  defaultMessage: [
                    {
                      type: 0,
                      value: "Enter confirmation code sent to you by ",
                    },
                    { type: 1, value: "method" },
                    { type: 0, value: ":" },
                  ],
                  values: { method: a },
                })
              )
            ),
            t().createElement(
              "div",
              { className: "panel-form-row" },
              t().createElement(
                i.FormattedMessage,
                {
                  id: "numeric_confirmation_code_prompt",
                  defaultMessage: [{ type: 0, value: "Numbers only" }],
                },
                (e) =>
                  t().createElement("input", {
                    type: "text",
                    id: "enter-confirmation-code",
                    placeholder: e,
                    value: this.state.code,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    required: !0,
                  })
              )
            ),
            t().createElement(
              "div",
              { className: "dialog-buttons" },
              t().createElement(
                "button",
                { className: "secondary", onClick: this.handleCancel },
                t().createElement(i.FormattedMessage, {
                  id: "button_cancel",
                  defaultMessage: [{ type: 0, value: "Cancel" }],
                })
              ),
              t().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                t().createElement(i.FormattedMessage, {
                  id: "button_confirm",
                  defaultMessage: [{ type: 0, value: "Confirm" }],
                })
              )
            )
          );
        }
      }
      const Kn = (0, i.injectIntl)(Wn),
        Gn = (0, i.defineMessages)({
          login: {
            id: "sidepanel_title_login",
            defaultMessage: [{ type: 0, value: "Sign In" }],
          },
          register: {
            id: "sidepanel_title_register",
            defaultMessage: [{ type: 0, value: "Create Account" }],
          },
          settings: {
            id: "sidepanel_title_settings",
            defaultMessage: [{ type: 0, value: "Settings" }],
          },
          edit: {
            id: "sidepanel_title_account_settings",
            defaultMessage: [{ type: 0, value: "Account Settings" }],
          },
          general: {
            id: "panel_title_general",
            defaultMessage: [{ type: 0, value: "General" }],
          },
          security: {
            id: "panel_title_security",
            defaultMessage: [{ type: 0, value: "Security" }],
          },
          crop: {
            id: "panel_title_crop",
            defaultMessage: [{ type: 0, value: "Drag to Adjust" }],
          },
          notif: {
            id: "sidepanel_title_acc_notifications",
            defaultMessage: [{ type: 0, value: "Notifications" }],
          },
          support: {
            id: "sidepanel_title_acc_support",
            defaultMessage: [{ type: 0, value: "Support" }],
          },
          newtpk: {
            id: "sidepanel_title_newtpk",
            defaultMessage: [{ type: 0, value: "Start New Chat" }],
          },
          cred: {
            id: "sidepanel_title_cred",
            defaultMessage: [{ type: 0, value: "Confirm Credentials" }],
          },
          reset: {
            id: "sidepanel_title_reset",
            defaultMessage: [{ type: 0, value: "Reset Password" }],
          },
          archive: {
            id: "sidepanel_title_archive",
            defaultMessage: [{ type: 0, value: "Archived Chats" }],
          },
          blocked: {
            id: "sidepanel_title_blocked",
            defaultMessage: [{ type: 0, value: "Blocked Chats" }],
          },
        });
      class $n extends t().PureComponent {
        constructor(e) {
          super(e), (this.handleNewTopic = this.handleNewTopic.bind(this));
        }
        handleNewTopic() {
          this.props.onNavigate("newtpk");
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            a =
              this.props.state || (this.props.myUserId ? "contacts" : "login");
          let s, n, i, o;
          return (
            "contacts" == a
              ? ((s = this.props.title),
                (n = !this.props.avatar || this.props.avatar),
                (i = this.props.trustedBadges))
              : ((s = e(Gn[a])), (n = !1), (i = null)),
            -1 == ["login", "contacts"].indexOf(a) && (o = this.props.onCancel),
            t().createElement(
              "div",
              {
                id: "sidepanel",
                className: this.props.hideSelf ? "nodisplay" : null,
              },
              t().createElement(wn, {
                state: a,
                title: s,
                avatar: n,
                tinode: this.props.tinode,
                trustedBadges: i,
                myUserId: this.props.myUserId,
                onSignUp: this.props.onSignUp,
                onSettings: this.props.onSettings,
                onNewTopic: this.handleNewTopic,
                onCancel: o,
              }),
              t().createElement(ms, {
                level: this.props.errorLevel,
                text: this.props.errorText,
                action: this.props.errorAction,
                actionText: this.props.errorActionText,
                onClearError: this.props.onError,
              }),
              t().createElement(ds, { show: this.props.loadSpinnerVisible }),
              "login" === a
                ? t().createElement(Un, {
                    login: this.props.login,
                    disabled: this.props.loginDisabled,
                    persist: this.props.persist,
                    onLogin: this.props.onLoginRequest,
                    onPersistenceChange: this.props.onPersistenceChange,
                  })
                : "register" === a
                ? t().createElement(Tn, {
                    tinode: this.props.tinode,
                    onCreateAccount: this.props.onCreateAccount,
                    onCancel: this.props.onCancel,
                    onError: this.props.onError,
                  })
                : "settings" === a
                ? t().createElement(Hn, {
                    transport: this.props.transport,
                    serverAddress: this.props.serverAddress,
                    secureConnection: this.props.secureConnection,
                    onCancel: this.props.onCancel,
                    onUpdate: this.props.onGlobalSettings,
                  })
                : "edit" === a
                ? t().createElement(En, {
                    tinode: this.props.tinode,
                    myUserId: this.props.myUserId,
                    trustedBadges: this.props.trustedBadges,
                    onNavigate: this.props.onNavigate,
                  })
                : "general" === a || "crop" === a
                ? t().createElement(As, {
                    topic: "me",
                    tinode: this.props.tinode,
                    myUserId: this.props.myUserId,
                    onUpdateTopicDesc: this.props.onUpdateAccountDesc,
                    onUpdateTags: this.props.onUpdateAccountTags,
                    onCredAdd: this.props.onCredAdd,
                    onCredDelete: this.props.onCredDelete,
                    onCredConfirm: this.props.onCredConfirm,
                    onError: this.props.onError,
                  })
                : "notif" === a
                ? t().createElement(Nn, {
                    messageSounds: this.props.messageSounds,
                    desktopAlerts: this.props.desktopAlerts,
                    desktopAlertsEnabled: this.props.desktopAlertsEnabled,
                    incognitoMode: this.props.incognitoMode,
                    onTogglePushNotifications:
                      this.props.onTogglePushNotifications,
                    onToggleMessageSounds: this.props.onToggleMessageSounds,
                    onToggleIncognitoMode: this.props.onToggleIncognitoMode,
                  })
                : "security" === a
                ? t().createElement(In, {
                    tinode: this.props.tinode,
                    onUpdateAccountDesc: this.props.onUpdateAccountDesc,
                    onUpdatePassword: this.props.onUpdatePassword,
                    onLogout: this.props.onLogout,
                    onDeleteAccount: this.props.onDeleteAccount,
                    onShowAlert: this.props.onShowAlert,
                    onShowBlocked: this.props.onShowBlocked,
                  })
                : "support" === a
                ? t().createElement(Pn, {
                    serverAddress: this.props.serverAddress,
                    serverVersion: this.props.serverVersion,
                  })
                : "contacts" === a || "archive" == a || "blocked" == a
                ? t().createElement(Mn, {
                    tinode: this.props.tinode,
                    myUserId: this.props.myUserId,
                    connected: this.props.connected,
                    topicSelected: this.props.topicSelected,
                    archive: "archive" == a,
                    blocked: "blocked" == a,
                    chatList: this.props.chatList,
                    showContextMenu: this.props.showContextMenu,
                    onTopicSelected: this.props.onTopicSelected,
                    onShowArchive: this.props.onShowArchive,
                  })
                : "newtpk" === a
                ? t().createElement(qn, {
                    tinode: this.props.tinode,
                    searchResults: this.props.searchResults,
                    onInitFind: this.props.onInitFind,
                    onSearchContacts: this.props.onSearchContacts,
                    onCreateTopic: this.props.onCreateTopic,
                    onError: this.props.onError,
                  })
                : "cred" === a
                ? t().createElement(Kn, {
                    credCode: this.props.credCode,
                    credMethod: this.props.credMethod,
                    credToken: this.props.credToken,
                    onSubmit: this.props.onValidateCredentials,
                    onCancel: this.props.onCancel,
                  })
                : "reset" === a
                ? t().createElement(jn, {
                    onRequest: this.props.onPasswordResetRequest,
                    onReset: this.props.onResetPassword,
                    onCancel: this.props.onCancel,
                  })
                : null
            )
          );
        }
      }
      const Qn = (0, i.injectIntl)($n);
      function Yn() {
        let e = Qt;
        return (
          "object" == typeof window.location &&
            ("file:" == window.location.protocol ||
            "localhost" == window.location.hostname
              ? (e = $t.local)
              : window.location.hostname &&
                (e =
                  window.location.hostname +
                  (window.location.port ? ":" + window.location.port : ""))),
          e
        );
      }
      function Jn() {
        return (
          "object" == typeof window.location &&
          "https:" == window.location.protocol
        );
      }
      const Xn = new Audio("audio/msg.m4a"),
        Zn = (0, i.defineMessages)({
          reconnect_countdown: {
            id: "reconnect_countdown",
            defaultMessage: [
              { type: 0, value: "Disconnected. Reconnecting in " },
              { type: 1, value: "seconds" },
              { type: 0, value: "…" },
            ],
          },
          reconnect_now: {
            id: "reconnect_now",
            defaultMessage: [{ type: 0, value: "Try now" }],
          },
          push_init_failed: {
            id: "push_init_failed",
            defaultMessage: [
              { type: 0, value: "Failed to initialize push notifications" },
            ],
          },
          invalid_security_token: {
            id: "invalid_security_token",
            defaultMessage: [{ type: 0, value: "Invalid security token" }],
          },
          no_connection: {
            id: "no_connection",
            defaultMessage: [{ type: 0, value: "No connection" }],
          },
          code_doesnot_match: {
            id: "code_doesnot_match",
            defaultMessage: [{ type: 0, value: "Code does not match" }],
          },
          menu_item_info: {
            id: "menu_item_info",
            defaultMessage: [{ type: 0, value: "Info" }],
          },
          menu_item_video_call: {
            id: "menu_item_video_call",
            defaultMessage: [{ type: 0, value: "Video call" }],
          },
          cred_confirmed_successfully: {
            id: "cred_confirmed_successfully",
            defaultMessage: [{ type: 0, value: "Confirmed successfully" }],
          },
        });
      class ei extends t().Component {
        constructor(e) {
          super(e),
            (this.selfRef = t().createRef()),
            (this.state = this.getBlankState()),
            (this.handleResize = this.handleResize.bind(this)),
            (this.handleHashRoute = this.handleHashRoute.bind(this)),
            (this.handleOnline = this.handleOnline.bind(this)),
            (this.checkForAppUpdate = this.checkForAppUpdate.bind(this)),
            (this.handleVisibilityEvent =
              this.handleVisibilityEvent.bind(this)),
            (this.handleError = this.handleError.bind(this)),
            (this.handleLoginRequest = this.handleLoginRequest.bind(this)),
            (this.handlePersistenceChange =
              this.handlePersistenceChange.bind(this)),
            (this.handleConnected = this.handleConnected.bind(this)),
            (this.handleAutoreconnectIteration =
              this.handleAutoreconnectIteration.bind(this)),
            (this.doLogin = this.doLogin.bind(this)),
            (this.handleLoginSuccessful =
              this.handleLoginSuccessful.bind(this)),
            (this.handleDisconnect = this.handleDisconnect.bind(this)),
            (this.tnMeMetaDesc = this.tnMeMetaDesc.bind(this)),
            (this.tnMeContactUpdate = this.tnMeContactUpdate.bind(this)),
            (this.tnMeSubsUpdated = this.tnMeSubsUpdated.bind(this)),
            (this.resetContactList = this.resetContactList.bind(this)),
            (this.tnInitFind = this.tnInitFind.bind(this)),
            (this.tnFndSubsUpdated = this.tnFndSubsUpdated.bind(this)),
            (this.handleSearchContacts = this.handleSearchContacts.bind(this)),
            (this.handleTopicSelected = this.handleTopicSelected.bind(this)),
            (this.handleHideMessagesView =
              this.handleHideMessagesView.bind(this)),
            (this.handleSendMessage = this.handleSendMessage.bind(this)),
            (this.handleNewChatInvitation =
              this.handleNewChatInvitation.bind(this)),
            (this.handleNewAccount = this.handleNewAccount.bind(this)),
            (this.handleNewAccountRequest =
              this.handleNewAccountRequest.bind(this)),
            (this.handleUpdatePasswordRequest =
              this.handleUpdatePasswordRequest.bind(this)),
            (this.handleUpdateAccountTagsRequest =
              this.handleUpdateAccountTagsRequest.bind(this)),
            (this.handleToggleIncognitoMode =
              this.handleToggleIncognitoMode.bind(this)),
            (this.handleSettings = this.handleSettings.bind(this)),
            (this.handleGlobalSettings = this.handleGlobalSettings.bind(this)),
            (this.handleShowArchive = this.handleShowArchive.bind(this)),
            (this.handleShowBlocked = this.handleShowBlocked.bind(this)),
            (this.handleToggleMessageSounds =
              this.handleToggleMessageSounds.bind(this)),
            (this.handleCredAdd = this.handleCredAdd.bind(this)),
            (this.handleCredDelete = this.handleCredDelete.bind(this)),
            (this.handleCredConfirm = this.handleCredConfirm.bind(this)),
            (this.initFCMessaging = this.initFCMessaging.bind(this)),
            (this.toggleFCMToken = this.toggleFCMToken.bind(this)),
            (this.handlePushMessage = this.handlePushMessage.bind(this)),
            (this.handleSidepanelCancel =
              this.handleSidepanelCancel.bind(this)),
            (this.handleStartTopicRequest =
              this.handleStartTopicRequest.bind(this)),
            (this.handleNewTopicCreated =
              this.handleNewTopicCreated.bind(this)),
            (this.handleTopicUpdateRequest =
              this.handleTopicUpdateRequest.bind(this)),
            (this.handleUnarchive = this.handleUnarchive.bind(this)),
            (this.handleChangePermissions =
              this.handleChangePermissions.bind(this)),
            (this.handleTagsUpdateRequest =
              this.handleTagsUpdateRequest.bind(this)),
            (this.handleLogout = this.handleLogout.bind(this)),
            (this.handleDeleteAccount = this.handleDeleteAccount.bind(this)),
            (this.handleDeleteTopicRequest =
              this.handleDeleteTopicRequest.bind(this)),
            (this.handleDeleteMessagesRequest =
              this.handleDeleteMessagesRequest.bind(this)),
            (this.handleLeaveUnsubRequest =
              this.handleLeaveUnsubRequest.bind(this)),
            (this.handleBlockTopicRequest =
              this.handleBlockTopicRequest.bind(this)),
            (this.handleReportTopic = this.handleReportTopic.bind(this)),
            (this.handleShowContextMenu =
              this.handleShowContextMenu.bind(this)),
            (this.defaultTopicContextMenu =
              this.defaultTopicContextMenu.bind(this)),
            (this.handleHideContextMenu =
              this.handleHideContextMenu.bind(this)),
            (this.handleShowAlert = this.handleShowAlert.bind(this)),
            (this.handleShowInfoView = this.handleShowInfoView.bind(this)),
            (this.handleMemberUpdateRequest =
              this.handleMemberUpdateRequest.bind(this)),
            (this.handleValidateCredentialsRequest =
              this.handleValidateCredentialsRequest.bind(this)),
            (this.handlePasswordResetRequest =
              this.handlePasswordResetRequest.bind(this)),
            (this.handleResetPassword = this.handleResetPassword.bind(this)),
            (this.handleContextMenuAction =
              this.handleContextMenuAction.bind(this)),
            (this.handleShowForwardDialog =
              this.handleShowForwardDialog.bind(this)),
            (this.handleHideForwardDialog =
              this.handleHideForwardDialog.bind(this)),
            (this.handleStartVideoCall = this.handleStartVideoCall.bind(this)),
            (this.handleInfoMessage = this.handleInfoMessage.bind(this)),
            (this.handleDataMessage = this.handleDataMessage.bind(this)),
            (this.handleCallClose = this.handleCallClose.bind(this)),
            (this.handleCallInvite = this.handleCallInvite.bind(this)),
            (this.handleCallRinging = this.handleCallRinging.bind(this)),
            (this.handleCallHangup = this.handleCallHangup.bind(this)),
            (this.handleCallSendOffer = this.handleCallSendOffer.bind(this)),
            (this.handleCallIceCandidate =
              this.handleCallIceCandidate.bind(this)),
            (this.handleCallSendAnswer = this.handleCallSendAnswer.bind(this)),
            (this.handleCallAcceptCall = this.handleCallAcceptCall.bind(this)),
            (this.sendMessageToTopic = this.sendMessageToTopic.bind(this)),
            (this.callTimeoutTimer = null);
        }
        getBlankState() {
          const e = kn.getObject("settings") || {},
            t = !!kn.getObject("keep-logged-in");
          return {
            connected: !1,
            ready: !1,
            autoLogin: !1,
            transport: e.transport || null,
            serverAddress: e.serverAddress || Yn(),
            secureConnection:
              void 0 === e.secureConnection ? Jn() : e.secureConnection,
            serverVersion: "no connection",
            messageSounds: !e.messageSoundsOff,
            incognitoMode: !1,
            desktopAlerts: t && !!e.desktopAlerts,
            desktopAlertsEnabled:
              (Jn() ||
                ("object" == typeof window.location &&
                  "localhost" == window.location.hostname)) &&
              "undefined" != typeof navigator &&
              "undefined" != typeof FIREBASE_INIT,
            firebaseToken: t ? kn.getObject("firebase-token") : null,
            applicationVisible: !document.hidden,
            errorText: "",
            errorLevel: null,
            errorAction: void 0,
            errorActionText: null,
            sidePanelSelected: "login",
            sidePanelTitle: null,
            sidePanelAvatar: null,
            myTrustedBadges: [],
            loadSpinnerVisible: !1,
            login: "",
            password: "",
            persist: t,
            myUserId: null,
            liveConnection: navigator.onLine,
            topicSelected: "",
            topicSelectedOnline: !1,
            topicSelectedAcs: null,
            newTopicParams: null,
            loginDisabled: !1,
            displayMobile: window.innerWidth <= 640,
            infoPanel: void 0,
            mobilePanel: "sidepanel",
            callTopic: void 0,
            callState: 0,
            callShouldStart: !1,
            contextMenuVisible: !1,
            contextMenuBounds: null,
            contextMenuClickAt: null,
            contextMenuParams: null,
            contextMenuItems: [],
            forwardDialogVisible: !1,
            forwardMessage: null,
            alertVisible: !1,
            alertParams: {},
            chatList: [],
            searchResults: [],
            searchableContacts: [],
            credMethod: void 0,
            credCode: void 0,
            credToken: void 0,
            requestedTopic: void 0,
          };
        }
        componentDidMount() {
          if (
            (window.addEventListener("resize", this.handleResize),
            window.addEventListener("online", (e) => {
              this.handleOnline(!0);
            }),
            window.addEventListener("offline", (e) => {
              this.handleOnline(!1);
            }),
            window.addEventListener("hashchange", this.handleHashRoute),
            "function" == typeof BroadcastChannel)
          ) {
            new BroadcastChannel("tinode-sw").addEventListener(
              "message",
              this.handlePushMessage
            );
          } else
            console.warn(
              "Your browser does not support BroadcastChannel. Some features will not be available"
            );
          document.addEventListener(
            "visibilitychange",
            this.handleVisibilityEvent
          ),
            this.setState({
              viewportWidth: document.documentElement.clientWidth,
              viewportHeight: document.documentElement.clientHeight,
            }),
            new Promise((e, t) => {
              (this.tinode = ei.tnSetup(
                this.state.serverAddress,
                Jn(),
                this.state.transport,
                this.props.intl.locale,
                this.state.persist,
                e
              )),
                (this.tinode.onConnect = this.handleConnected),
                (this.tinode.onDisconnect = this.handleDisconnect),
                (this.tinode.onAutoreconnectIteration =
                  this.handleAutoreconnectIteration),
                (this.tinode.onInfoMessage = this.handleInfoMessage),
                (this.tinode.onDataMessage = this.handleDataMessage);
            }).then((e) => {
              this.state.desktopAlertsEnabled &&
                this.initFCMessaging()
                  .then((e) => {
                    this.state.desktopAlerts &&
                      this.tinode.setDeviceToken(this.state.firebaseToken);
                  })
                  .catch(() => {});
              const t = hn.parseUrlHash(window.location.hash);
              this.resetContactList();
              const a = this.state.persist
                ? kn.getObject("auth-token")
                : void 0;
              if (
                (a &&
                  (this.setState({ autoLogin: !0 }),
                  (a.expires = new Date(a.expires)),
                  this.tinode.setAuthToken(a),
                  this.tinode.connect().catch((e) => {
                    this.handleError(e.message, "err");
                  })),
                (this.readTimer = null),
                (this.readTimerCallback = null),
                ["cred", "reset", "register"].includes(t.path[0]))
              )
                this.handleHashRoute();
              else {
                this.setState({ requestedTopic: t.path[1] });
                const e =
                  t.params && t.params.cred_done
                    ? hn.addUrlParam("", "cred_done", t.params.cred_done)
                    : "";
                hn.navigateTo(e);
              }
            });
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize),
            window.removeEventListener("hashchange", this.handleHashRoute),
            document.removeEventListener(
              "visibilitychange",
              this.handleVisibilityEvent
            );
        }
        static tnSetup(e, t, a, s, n, i) {
          const o = new Vt.Tinode(
            {
              appName: Gt,
              host: e,
              apiKey: "AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K",
              transport: a,
              secure: t,
              persist: n,
            },
            i
          );
          return o.setHumanLanguage(s), o.enableLogging(true, !0), o;
        }
        handlePushMessage(e) {
          this.tinode.oobNotification(e.data || {});
        }
        initFCMessaging() {
          const { formatMessage: e, locale: t } = this.props.intl,
            a = (t, a) => {
              console.error(t, a),
                this.handleError(e(Zn.push_init_failed), "err"),
                this.setState({
                  desktopAlertsEnabled: !1,
                  firebaseToken: null,
                }),
                kn.updateObject("settings", { desktopAlerts: !1 });
            };
          try {
            return (
              (this.fcm = qt(oe(FIREBASE_INIT, Gt))),
              navigator.serviceWorker
                .register("/service-worker.js")
                .then(
                  (e) => (
                    this.checkForAppUpdate(e),
                    e.active.postMessage(
                      JSON.stringify({ locale: t, version: Kt })
                    ),
                    e
                  )
                )
                .then((e) => ei.requestFCMToken(this.fcm, e))
                .then((e) => {
                  const t = kn.getObject("keep-logged-in");
                  e != this.state.firebaseToken &&
                    (this.tinode.setDeviceToken(e),
                    t && kn.setObject("firebase-token", e)),
                    this.setState({ firebaseToken: e, desktopAlerts: !0 }),
                    t && kn.updateObject("settings", { desktopAlerts: !0 }),
                    Ht(this.fcm, (e) => {
                      this.handlePushMessage(e);
                    });
                })
                .catch((e) => {
                  throw (a(e), e);
                })
            );
          } catch (e) {
            return a(e), Promise.reject(e);
          }
        }
        static requestFCMToken(e, t) {
          return jt(e, {
            serviceWorkerRegistration: t,
            vapidKey: FIREBASE_INIT.messagingVapidKey,
          }).then(
            (t) =>
              t ||
              Notification.requestPermission().then((t) => {
                if ("granted" === t)
                  return jt(e, {
                    serviceWorkerRegistration: reg,
                    vapidKey: FIREBASE_INIT.messagingVapidKey,
                  }).then((e) => {
                    if (e) return e;
                    throw new Error("Failed to initialize notifications");
                  });
                throw new Error("No permission to send notifications: " + t);
              })
          );
        }
        handleResize() {
          const e = document.documentElement.clientWidth <= 640;
          this.setState({
            viewportWidth: document.documentElement.clientWidth,
            viewportHeight: document.documentElement.clientHeight,
          }),
            this.state.displayMobile != e &&
              this.setState({ displayMobile: e });
        }
        checkForAppUpdate(e) {
          e.onupdatefound = () => {
            const a = e.installing;
            a.onstatechange = () => {
              if (
                "installed" == a.state &&
                navigator.serviceWorker.controller
              ) {
                const e = t().createElement(
                  t().Fragment,
                  null,
                  t().createElement(i.FormattedMessage, {
                    id: "update_available",
                    defaultMessage: [{ type: 0, value: "Update available." }],
                  }),
                  " ",
                  t().createElement(
                    "a",
                    { href: "" },
                    t().createElement(i.FormattedMessage, {
                      id: "reload_update",
                      defaultMessage: [{ type: 0, value: "Reload" }],
                    })
                  ),
                  "."
                );
                this.handleError(e, "info");
              }
            };
          };
        }
        handleHashRoute() {
          const e = hn.parseUrlHash(window.location.hash),
            t = { infoPanel: e.params.info, newTopicTabSelected: e.params.tab };
          if (e.path && e.path.length > 0) {
            [
              "register",
              "settings",
              "edit",
              "notif",
              "security",
              "support",
              "general",
              "crop",
              "cred",
              "reset",
              "newtpk",
              "archive",
              "blocked",
              "contacts",
              "",
            ].includes(e.path[0])
              ? (t.sidePanelSelected = e.path[0])
              : console.warn("Unknown sidepanel view", e.path[0]);
            let a = e.path[1] || null;
            a != this.state.topicSelected &&
              (Vt.Tinode.topicType(a) || (a = null),
              Object.assign(t, {
                topicSelected: a,
                topicSelectedAcs: this.tinode.getTopicAccessMode(a),
              }));
          } else
            Object.assign(t, { sidePanelSelected: "", topicSelected: null });
          e.params.method && (t.credMethod = e.params.method),
            e.params.code && (t.credCode = e.params.code),
            e.params.token && (t.credToken = e.params.token),
            e.params.cred_done &&
              Object.assign(
                t,
                ei.stateForError(
                  this.props.intl.formatMessage(Zn.cred_confirmed_successfully),
                  "info"
                )
              ),
            this.setState(t);
        }
        handleOnline(e) {
          e
            ? (this.handleError(),
              clearInterval(this.reconnectCountdown),
              this.tinode.reconnect())
            : this.handleError(
                this.props.intl.formatMessage(Zn.no_connection),
                "warn"
              ),
            this.setState({ liveConnection: e });
        }
        handleVisibilityEvent() {
          this.setState({ applicationVisible: !document.hidden });
        }
        static stateForError(e, t, a, s) {
          return {
            errorText: e,
            errorLevel: t,
            errorAction: a,
            errorActionText: s,
            callShouldStart: !1,
          };
        }
        handleError(e, t, a, s) {
          this.setState(ei.stateForError(e, t, a, s));
        }
        handleLoginRequest(e, t) {
          this.setState({
            loginDisabled: !0,
            login: e,
            password: t,
            loadSpinnerVisible: !0,
            autoLogin: !0,
          }),
            this.handleError("", null),
            this.tinode.isConnected()
              ? this.doLogin(e, t, null, {
                  meth: this.state.credMethod,
                  resp: this.state.credCode,
                })
              : this.tinode.connect().catch((e) => {
                  this.setState({
                    loginDisabled: !1,
                    autoLogin: !1,
                    loadSpinnerVisible: !1,
                  }),
                    this.handleError(e.message, "err");
                });
        }
        handlePersistenceChange(e) {
          e
            ? this.tinode.initStorage().then(() => {
                kn.setObject("keep-logged-in", !0),
                  this.setState({ persist: !0 });
              })
            : this.tinode.clearStorage().then(() => {
                kn.setObject("keep-logged-in", !1),
                  this.setState({ persist: !1 });
              });
        }
        handleConnected() {
          clearInterval(this.reconnectCountdown), this.handleError();
          const e = this.tinode.getServerInfo();
          this.setState({
            serverVersion: e.ver + " " + (e.build ? e.build : "none"),
          }),
            this.state.autoLogin &&
              this.doLogin(this.state.login, this.state.password, null, {
                meth: this.state.credMethod,
                resp: this.state.credCode,
              });
        }
        handleAutoreconnectIteration(e, t) {
          if ((clearInterval(this.reconnectCountdown), e < 0))
            return void this.handleError();
          if (t)
            return void t
              .then(() => {
                this.handleError();
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
          const { formatMessage: a } = this.props.intl;
          let s = e / 1e3;
          (s |= s),
            (this.reconnectCountdown = setInterval(() => {
              const e = s > 99 ? da(s) : s;
              this.handleError(
                a(Zn.reconnect_countdown, { seconds: e }),
                "warn",
                (e) => {
                  clearInterval(this.reconnectCountdown),
                    this.tinode.reconnect();
                },
                a(Zn.reconnect_now)
              ),
                (s -= 1);
            }, 1e3));
        }
        handleDisconnect(e) {
          this.setState({
            connected: !1,
            ready: !1,
            topicSelectedOnline: !1,
            errorText: e && e.message ? e.message : "Disconnected",
            errorLevel: e && e.message ? "err" : "warn",
            loginDisabled: !1,
            contextMenuVisible: !1,
            forwardDialogVisible: !1,
            serverVersion: "no connection",
          });
        }
        doLogin(e, t, a, s) {
          if (this.tinode.isAuthenticated()) return void hn.navigateTo("");
          let n = a || (this.tinode.getAuthToken() || {}).token;
          if (!((e && t) || n))
            return hn.navigateTo(""), void this.setState({ loginDisabled: !1 });
          s = Vt.Tinode.credential(s);
          let i,
            o = this.tinode.isConnected()
              ? Promise.resolve()
              : this.tinode.connect();
          e && t
            ? ((n = null),
              this.setState({ password: null }),
              (i = o.then((a) => this.tinode.loginBasic(e, t, s))))
            : (i = o.then((e) => this.tinode.loginToken(n, s))),
            i
              .then((e) => {
                e.code >= 300 && "validate credentials" === e.text
                  ? (this.setState({ loadSpinnerVisible: !1 }),
                    s &&
                      this.handleError(
                        this.props.intl.formatMessage(Zn.code_doesnot_match),
                        "warn"
                      ),
                    ei.navigateToCredentialsView(e.params))
                  : this.handleLoginSuccessful();
              })
              .catch((e) => {
                this.setState({
                  loginDisabled: !1,
                  credMethod: void 0,
                  credCode: void 0,
                  loadSpinnerVisible: !1,
                  autoLogin: !1,
                }),
                  this.handleError(e.message, "err"),
                  console.warn("Login failed", e),
                  n && this.handleLogout(),
                  hn.navigateTo("");
              });
        }
        static navigateToCredentialsView(e) {
          const t = hn.parseUrlHash(window.location.hash);
          (t.path[0] = "cred"),
            (t.params.method = e.cred[0]),
            (t.params.token = e.token),
            hn.navigateTo(hn.composeUrlHash(t.path, t.params));
        }
        handleLoginSuccessful() {
          this.handleError(),
            kn.getObject("keep-logged-in") &&
              kn.setObject("auth-token", this.tinode.getAuthToken());
          const e = this.state.requestedTopic,
            t = this.tinode.getMeTopic();
          (t.onMetaDesc = this.tnMeMetaDesc),
            (t.onContactUpdate = this.tnMeContactUpdate),
            (t.onSubsUpdated = this.tnMeSubsUpdated),
            this.setState({
              connected: !0,
              credMethod: void 0,
              credCode: void 0,
              credToken: void 0,
              myUserId: this.tinode.getCurrentUserID(),
              autoLogin: !0,
              requestedTopic: void 0,
            }),
            t
              .subscribe(
                t
                  .startMetaQuery()
                  .withLaterSub()
                  .withDesc()
                  .withTags()
                  .withCred()
                  .build()
              )
              .catch((e) => {
                this.tinode.disconnect(),
                  localStorage.removeItem("auth-token"),
                  this.handleError(e.message, "err"),
                  hn.navigateTo("");
              })
              .finally(() => {
                this.setState({ loadSpinnerVisible: !1 });
              });
          let a = hn.setUrlSidePanel(window.location.hash, "contacts");
          e && (a = hn.setUrlTopic(a, e)), hn.navigateTo(a);
        }
        tnMeMetaDesc(e) {
          if (e) {
            if (
              (e.public &&
                this.setState({
                  sidePanelTitle: e.public.fn,
                  sidePanelAvatar: ka(e.public.photo),
                }),
              e.trusted)
            ) {
              const t = [];
              for (const [a, s] of Object.entries(e.trusted)) s && t.push(a);
              this.setState({ myTrustedBadges: t });
            }
            e.acs && this.setState({ incognitoMode: !e.acs.isPresencer() });
          }
        }
        tnMeContactUpdate(e, t) {
          if ("on" == e || "off" == e)
            this.resetContactList(),
              this.state.topicSelected == t.topic &&
                this.setState({ topicSelectedOnline: "on" == e });
          else if ("read" == e) this.resetContactList();
          else if ("msg" == e) {
            const e = this.tinode.getTopic(t.topic),
              a = e && e.isArchived();
            t.unread > 0 &&
              this.state.messageSounds &&
              !a &&
              (document.hidden || this.state.topicSelected != t.topic) &&
              Xn.play().catch((e) => {}),
              this.resetContactList();
          } else
            "recv" == e ||
              ("gone" == e || "unsub" == e
                ? (this.state.topicSelected == t.topic &&
                    this.handleTopicSelected(null),
                  this.resetContactList())
                : "acs" == e
                ? this.state.topicSelected == t.topic &&
                  this.setState({ topicSelectedAcs: t.acs })
                : "del" == e ||
                  "upd" == e ||
                  "call" == e ||
                  console.info(
                    "Unsupported (yet) presence update:",
                    e,
                    "in",
                    t.topic
                  ));
        }
        tnMeSubsUpdated(e) {
          this.resetContactList();
        }
        static prepareSearchableContacts(e, t) {
          const a = {};
          for (const t of e)
            Vt.Tinode.isP2PTopicName(t.topic) &&
              (a[t.topic] = {
                user: t.topic,
                updated: t.updated,
                public: t.public,
                private: t.private,
                acs: t.acs,
              });
          for (const e of t) a[e.user] || (a[e.user] = e);
          return Object.values(a);
        }
        resetContactList() {
          const e = { chatList: [] };
          this.state.ready || (e.ready = !0),
            this.tinode.getMeTopic().contacts((t) => {
              t.topic || t.user || (t.topic = t.name),
                e.chatList.push(t),
                this.state.topicSelected == t.topic &&
                  ((e.topicSelectedOnline = t.online),
                  (e.topicSelectedAcs = t.acs));
            });
          const t = new Date(0);
          e.chatList.sort(
            (e, a) => (e.touched || t).getTime() - (a.touched || t).getTime()
          ),
            (e.searchableContacts = ei.prepareSearchableContacts(
              e.chatList,
              this.state.searchResults
            )),
            this.setState(e);
        }
        tnInitFind() {
          const e = this.tinode.getFndTopic();
          (e.onSubsUpdated = this.tnFndSubsUpdated),
            e.isSubscribed()
              ? this.tnFndSubsUpdated()
              : e.subscribe(e.startMetaQuery().withSub().build()).catch((e) => {
                  this.handleError(e.message, "err");
                });
        }
        tnFndSubsUpdated() {
          const e = [];
          this.tinode.getFndTopic().contacts((t) => {
            e.push(t);
          }),
            this.setState({
              searchResults: e,
              searchableContacts: ei.prepareSearchableContacts(
                this.state.chatList,
                e
              ),
            });
        }
        handleSearchContacts(e) {
          const t = this.tinode.getFndTopic();
          t.setMeta({ desc: { public: e } })
            .then((e) => t.getMeta(t.startMetaQuery().withSub().build()))
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleTopicSelected(e) {
          this.state.newTopicParams &&
            this.state.newTopicParams._topicName != e &&
            this.setState({ newTopicParams: null }),
            e
              ? (this.setState({
                  errorText: "",
                  errorLevel: null,
                  mobilePanel: "topic-view",
                  infoPanel: void 0,
                }),
                this.state.topicSelected != e &&
                  (this.setState({
                    topicSelectedOnline: this.tinode.isTopicOnline(e),
                    topicSelectedAcs: this.tinode.getTopicAccessMode(e),
                    forwardMessage: null,
                  }),
                  hn.navigateTo(hn.setUrlTopic("", e))))
              : (this.setState({
                  errorText: "",
                  errorLevel: null,
                  mobilePanel: "sidepanel",
                  topicSelectedOnline: !1,
                  topicSelectedAcs: null,
                  infoPanel: void 0,
                  forwardMessage: null,
                }),
                hn.navigateTo(hn.setUrlTopic("", null)));
        }
        handleHideMessagesView() {
          this.setState({ mobilePanel: "sidepanel" }),
            hn.navigateTo(hn.setUrlTopic(window.location.hash, null));
        }
        handleSendMessage(e, t, a, s) {
          const n = this.tinode.getTopic(this.state.topicSelected);
          return this.sendMessageToTopic(n, e, t, a, s);
        }
        sendMessageToTopic(e, t, a, s, n) {
          ((t = e.createMessage(t, !1))._uploader = s),
            n && (t.head = Object.assign(t.head || {}, n));
          const i = [];
          if ((a && i.push(a), !e.isSubscribed())) {
            const a = e.subscribe().then(() => {
              let a = [];
              e.queuedMessages((s) => {
                s._sending ||
                  s.seq == t.seq ||
                  (s.head && s.head.webrtc
                    ? a.push(s.seq)
                    : e.isSubscribed() && e.publishMessage(s));
              }),
                a.length > 0 && e.delMessagesList(a, !0);
            });
            i.push(a);
          }
          return e
            .publishDraft(t, Promise.all(i))
            .then((t) => (e.isArchived() && e.archive(!1), t))
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleNewChatInvitation(e, t) {
          const a = this.tinode.getTopic(e);
          let s = null;
          switch (t) {
            case "accept":
              const n = a.getAccessMode().getGiven();
              (s = a.setMeta({ sub: { mode: n } })),
                a.isP2PType() &&
                  (s = s.then((t) => {
                    a.setMeta({ sub: { user: e, mode: n } });
                  }));
              break;
            case "delete":
              s = a.delTopic(!0);
              break;
            case "block":
              const i = a.getAccessMode().updateWant("-JP").getWant();
              s = a
                .setMeta({ sub: { mode: i } })
                .then((e) => this.handleTopicSelected(null));
              break;
            default:
              console.warn("Unknown invitation action", '"' + t + '""');
          }
          null != s &&
            s.catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleNewAccount() {
          this.handleError(),
            hn.navigateTo(hn.setUrlSidePanel(window.location.hash, "register"));
        }
        handleNewAccountRequest(e, t, a, s, n) {
          this.handleError(),
            this.tinode
              .connect(this.state.serverAddress)
              .then((i) => {
                let o;
                return (
                  a && a.photo && a.photo.ref && (o = [a.photo.ref]),
                  this.tinode.createAccountBasic(e, t, {
                    public: a,
                    tags: n,
                    cred: Vt.Tinode.credential(s),
                    attachments: o,
                  })
                );
              })
              .then((e) => {
                e.code >= 300 && "validate credentials" == e.text
                  ? ei.navigateToCredentialsView(e.params)
                  : this.handleLoginSuccessful(this);
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleToggleIncognitoMode(e) {
          this.setState({ incognitoMode: null });
          const t = this.tinode.getMeTopic(),
            a = t
              .getAccessMode()
              .updateWant(e ? "-P" : "+P")
              .getWant();
          t.setMeta({ sub: { mode: a } }).catch((t) => {
            this.setState({ incognitoMode: !e }),
              this.handleError(t.message, "err");
          });
        }
        handleUpdateAccountTagsRequest(e) {
          this.tinode
            .getMeTopic()
            .setMeta({ tags: e })
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleSettings() {
          this.handleError(),
            hn.navigateTo(
              hn.setUrlSidePanel(
                window.location.hash,
                this.state.myUserId ? "edit" : "settings"
              )
            );
        }
        handleGlobalSettings(e) {
          const t = e.serverAddress || this.state.serverAddress,
            a = e.transport || this.state.transport,
            s =
              void 0 === e.secureConnection
                ? this.state.secureConnection
                : e.secureConnection;
          this.tinode &&
            (this.tinode.clearStorage(),
            (this.tinode.onDisconnect = void 0),
            this.tinode.disconnect()),
            (this.tinode = ei.tnSetup(
              t,
              s,
              a,
              this.props.intl.locale,
              kn.getObject("keep-logged-in")
            )),
            (this.tinode.onConnect = this.handleConnected),
            (this.tinode.onDisconnect = this.handleDisconnect),
            (this.tinode.onAutoreconnectIteration =
              this.handleAutoreconnectIteration),
            (this.tinode.onInfoMessage = this.handleInfoMessage),
            (this.tinode.onDataMessage = this.handleDataMessage),
            this.setState({
              serverAddress: t,
              transport: a,
              secureConnection: s,
            }),
            kn.setObject("settings", {
              serverAddress: t,
              transport: a,
              secureConnection: s,
            }),
            hn.navigateTo(hn.setUrlSidePanel(window.location.hash, ""));
        }
        handleShowArchive() {
          hn.navigateTo(
            hn.setUrlSidePanel(
              window.location.hash,
              this.state.myUserId ? "archive" : ""
            )
          );
        }
        handleShowBlocked() {
          hn.navigateTo(
            hn.setUrlSidePanel(
              window.location.hash,
              this.state.myUserId ? "blocked" : ""
            )
          );
        }
        toggleFCMToken(e) {
          e
            ? (this.setState({ desktopAlerts: null }),
              this.state.firebaseToken
                ? (this.setState({ desktopAlerts: !0 }),
                  kn.getObject("keep-logged-in") &&
                    kn.updateObject("settings", { desktopAlerts: !0 }))
                : this.initFCMessaging())
            : this.state.firebaseToken && this.fcm
            ? zt(this.fcm)
                .catch((e) => {
                  console.error("Unable to delete token.", e);
                })
                .finally(() => {
                  kn.updateObject("settings", { desktopAlerts: !1 }),
                    localStorage.removeItem("firebase-token"),
                    this.setState({ desktopAlerts: !1, firebaseToken: null }),
                    this.tinode.setDeviceToken(null);
                })
            : (this.setState({ desktopAlerts: !1, firebaseToken: null }),
              kn.updateObject("settings", { desktopAlerts: !1 }));
        }
        handleToggleMessageSounds(e) {
          this.setState({ messageSounds: e }),
            kn.updateObject("settings", { messageSoundsOff: !e });
        }
        handleCredAdd(e, t) {
          this.tinode
            .getMeTopic()
            .setMeta({ cred: { meth: e, val: t } })
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleCredDelete(e, t) {
          this.tinode
            .getMeTopic()
            .delCredential(e, t)
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleCredConfirm(e, t) {
          ei.navigateToCredentialsView({ cred: [e] });
        }
        handleSidepanelCancel() {
          const e = hn.parseUrlHash(window.location.hash);
          let t = "";
          ["security", "support", "general", "notif"].includes(e.path[0])
            ? (t = "edit")
            : "crop" == e.path[0]
            ? (t = "general")
            : "blocked" == e.path[0]
            ? (t = "security")
            : this.state.myUserId && (t = "contacts"),
            (e.path[0] = t),
            e.params &&
              (delete e.params.code,
              delete e.params.method,
              delete e.params.tab,
              delete e.params.scheme,
              delete e.params.token),
            hn.navigateTo(hn.composeUrlHash(e.path, e.params)),
            this.setState({ errorText: "", errorLevel: null });
        }
        basicNavigator(e) {
          hn.navigateTo(hn.setUrlSidePanel(window.location.hash, e));
        }
        infoNavigator(e) {
          hn.navigateTo(hn.setUrlInfoPanel(window.location.hash, e));
        }
        handleStartTopicRequest(e, t, a) {
          if (e && this.tinode.isTopicCached(e))
            return void this.handleTopicSelected(e);
          const s = {};
          Vt.Tinode.isP2PTopicName(e)
            ? ((s.sub = { mode: Jt }), (s.desc = { defacs: { auth: Jt } }))
            : ((e = e || this.tinode.newGroupTopicName(a)),
              t &&
                ((s.desc = {
                  public: t.public,
                  private: { comment: t.private },
                }),
                (s.tags = t.tags))),
            (s._topicName = e),
            this.setState({ newTopicParams: s }, () => {
              this.handleTopicSelected(e);
            });
        }
        handleNewTopicCreated(e, t) {
          let a = {};
          this.state.callShouldStart &&
            (a = { callState: 3, callShouldStart: !1 }),
            this.state.topicSelected == e && e != t && (a.topicSelected = t),
            this.setState(a, (e) => {
              hn.navigateTo(hn.setUrlTopic("", t));
            });
        }
        handleTopicUpdateRequest(e, t, a, s) {
          this.handleError();
          const n = this.tinode.getTopic(e);
          if (n) {
            const e = {};
            let i;
            t &&
              (t.photo &&
                (t.photo.ref && t.photo.ref != Vt.Tinode.DEL_CHAR
                  ? (i = [t.photo.ref])
                  : (t.photo.data && t.photo.data != Vt.Tinode.DEL_CHAR) ||
                    (t.photo = Vt.Tinode.DEL_CHAR)),
              (e.public = t)),
              "string" == typeof a &&
                (e.private =
                  a === Vt.Tinode.DEL_CHAR
                    ? Vt.Tinode.DEL_CHAR
                    : { comment: a }),
              s && (e.defacs = s),
              n.setMeta({ desc: e, attachments: i }).catch((e) => {
                this.handleError(e.message, "err");
              });
          }
        }
        handleUnarchive(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t.archive(!1).catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleUpdatePasswordRequest(e) {
          this.handleError(),
            e &&
              this.tinode
                .updateAccountBasic(null, this.tinode.getCurrentLogin(), e)
                .catch((e) => {
                  this.handleError(e.message, "err");
                });
        }
        handleChangePermissions(e, t, a) {
          const s = this.tinode.getTopic(e);
          if (s) {
            const e = s.getAccessMode();
            a
              ? (e.updateGiven(t), (t = e.getGiven()))
              : (e.updateWant(t), (t = e.getWant())),
              s.setMeta({ sub: { user: a, mode: t } }).catch((e) => {
                this.handleError(e.message, "err");
              });
          }
        }
        handleTagsUpdateRequest(e, t) {
          const a = this.tinode.getTopic(e);
          a &&
            a.setMeta({ tags: t }).catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleLogout() {
          let e;
          ma(0),
            localStorage.removeItem("auth-token"),
            localStorage.removeItem("firebase-token"),
            localStorage.removeItem("settings"),
            this.state.firebaseToken && zt(this.fcm),
            clearInterval(this.reconnectCountdown),
            this.tinode
              ? ((e = this.tinode.clearStorage()),
                (this.tinode.onDisconnect = void 0),
                this.tinode.disconnect())
              : (e = Promose.resolve()),
            this.setState(this.getBlankState()),
            e.then(() => {
              this.tinode = ei.tnSetup(
                this.state.serverAddress,
                Jn(),
                this.state.transport,
                this.props.intl.locale,
                kn.getObject("keep-logged-in"),
                () => {
                  (this.tinode.onConnect = this.handleConnected),
                    (this.tinode.onDisconnect = this.handleDisconnect),
                    (this.tinode.onAutoreconnectIteration =
                      this.handleAutoreconnectIteration),
                    (this.tinode.onInfoMessage = this.handleInfoMessage),
                    (this.tinode.onDataMessage = this.handleDataMessage),
                    hn.navigateTo("");
                }
              );
            });
        }
        handleDeleteAccount() {
          this.tinode.delCurrentUser(!0).then((e) => {
            this.handleLogout();
          });
        }
        handleDeleteTopicRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t
              .delTopic(!0)
              .then((e) => {
                hn.navigateTo(hn.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleDeleteMessagesRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t.delMessagesAll(!0).catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleLeaveUnsubRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t
              .leave(!0)
              .then((e) => {
                hn.navigateTo(hn.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleBlockTopicRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t
              .updateMode(null, "-JP")
              .then((e) => {
                hn.navigateTo(hn.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleReportTopic(e) {
          const t = this.tinode.getTopic(e);
          t &&
            (this.tinode.report("report", e),
            t
              .updateMode(null, "-JP")
              .then((e) => {
                hn.navigateTo(hn.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              }));
        }
        handleShowContextMenu(e, t) {
          this.setState({
            contextMenuVisible: !0,
            contextMenuClickAt: { x: e.x, y: e.y },
            contextMenuParams: e,
            contextMenuItems: t || this.defaultTopicContextMenu(e.topicName),
            contextMenuBounds: this.selfRef.current.getBoundingClientRect(),
          });
        }
        handleShowForwardDialog(e) {
          "newtpk" == this.state.sidePanelSelected &&
            this.handleSidepanelCancel();
          const t = "➦ " + e.userName,
            a =
              "string" == typeof e.content
                ? Vt.Drafty.init(e.content)
                : Vt.Drafty.forwardedContent(e.content),
            s = Vt.Drafty.preview(a, 84, !0),
            n = Vt.Drafty.append(
              Vt.Drafty.appendLineBreak(Vt.Drafty.mention(t, e.userFrom)),
              a
            ),
            i = Vt.Drafty.quote(t, e.userFrom, s),
            o = { forwarded: e.topicName + ":" + e.seq };
          this.setState({
            forwardDialogVisible: !0,
            forwardMessage: { head: o, msg: n, preview: i },
          });
        }
        defaultTopicContextMenu(e) {
          const t = this.tinode.getTopic(e);
          if (t._deleted) return ["topic_delete"];
          let a = !1,
            s = !1,
            n = !1,
            i = !1,
            o = !1,
            r = !1,
            l = !1;
          if (t) {
            (i = t.isSubscribed()), (r = t.isArchived());
            const e = t.getAccessMode();
            e &&
              ((a = e.isMuted()),
              (s = !e.isJoiner()),
              (n = !e.isJoiner("want")),
              (o = e.isDeleter()));
          }
          return (
            (l = !!this.tinode.getServerParam("iceServers")),
            [
              i
                ? {
                    title: this.props.intl.formatMessage(Zn.menu_item_info),
                    handler: this.handleShowInfoView,
                  }
                : null,
              i && Vt.Tinode.isP2PTopicName(e) && l
                ? {
                    title: this.props.intl.formatMessage(
                      Zn.menu_item_video_call
                    ),
                    handler: this.handleStartVideoCall,
                  }
                : null,
              i ? "messages_clear" : null,
              i && o ? "messages_clear_hard" : null,
              a ? (s ? null : "topic_unmute") : "topic_mute",
              n ? "topic_unblock" : "topic_block",
              r ? "topic_restore" : "topic_archive",
              "topic_delete",
            ]
          );
        }
        handleHideContextMenu() {
          this.setState({
            contextMenuVisible: !1,
            contextMenuClickAt: null,
            contextMenuParams: null,
            contextMenuBounds: null,
          });
        }
        handleHideForwardDialog(e) {
          this.setState({
            forwardDialogVisible: !1,
            forwardMessage: e ? this.state.forwardMessage : null,
          });
        }
        handleContextMenuAction(e, t, a) {
          "topic_archive" == e
            ? t &&
              a.topicName &&
              a.topicName == this.state.topicSelected &&
              t.then(() => {
                this.handleTopicSelected(null);
              })
            : "menu_item_forward" == e && this.handleShowForwardDialog(a);
        }
        handleShowAlert(e, t, a, s, n, i) {
          this.setState({
            alertVisible: !0,
            alertParams: {
              title: e,
              content: t,
              onConfirm: a,
              confirm: s,
              onReject: n,
              reject: i,
            },
          });
        }
        handleShowInfoView() {
          hn.navigateTo(hn.addUrlParam(window.location.hash, "info", "info")),
            this.setState({ infoPanel: "info" });
        }
        handleMemberUpdateRequest(e, t, a) {
          if (!e) return;
          const s = this.tinode.getTopic(e);
          s &&
            (t &&
              t.length > 0 &&
              t.map((e) => {
                s.invite(e, null).catch((e) => {
                  this.handleError(e.message, "err");
                });
              }),
            a &&
              a.length > 0 &&
              a.map((e) => {
                s.delSubscription(e).catch((e) => {
                  this.handleError(e.message, "err");
                });
              }));
        }
        handleValidateCredentialsRequest(e, t, a) {
          this.tinode.isAuthenticated()
            ? this.tinode
                .getMeTopic()
                .setMeta({ cred: { meth: e, resp: t } })
                .catch((e) => {
                  this.handleError(e.message, "err");
                })
            : (this.setState({ credMethod: e, credCode: t, credToken: a }),
              this.doLogin(null, null, a, { meth: e, resp: t }));
        }
        handlePasswordResetRequest(e, t) {
          return this.tinode
            .connect()
            .then(() => this.tinode.requestResetAuthSecret("basic", e, t))
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleResetPassword(e, t, a) {
          (a = (function (e) {
            if (e) {
              e = e.replace(/-/g, "+").replace(/_/g, "/");
              try {
                e = btoa(atob(e));
              } catch (t) {
                console.error("Failed to base64 re-encode string.", t),
                  (e = null);
              }
            }
            return e;
          })(a))
            ? this.tinode
                .connect()
                .then(() =>
                  this.tinode.updateAccountBasic(null, null, t, { token: a })
                )
                .then(() => {
                  hn.navigateTo("");
                })
                .catch((e) => {
                  this.handleError(e.message, "err");
                })
            : this.handleError(
                this.props.intl.formatMessage(Zn.invalid_security_token),
                "err"
              );
        }
        handleStartVideoCall() {
          this.setState({ callTopic: this.state.topicSelected, callState: 1 });
        }
        handleCallInvite(e, t, a) {
          switch (a) {
            case 1:
              let a = { webrtc: rs };
              this.handleSendMessage(
                Vt.Drafty.videoCall(),
                void 0,
                void 0,
                a
              ).then((e) => {
                e.code < 200 || e.code >= 300 || !e.params || !e.params.seq
                  ? this.handleCallClose()
                  : this.setState({ callSeq: e.params.seq });
              });
              break;
            case 3:
              const s = this.tinode.getTopic(e);
              if (!s) return;
              s.videoCall("accept", t);
          }
        }
        handleCallRinging(e, t) {
          const a = this.tinode.getTopic(e);
          a && a.videoCall("ringing", t);
        }
        handleCallHangup(e, t) {
          const a = this.tinode.getTopic(e);
          a && a.videoCall("hang-up", t);
        }
        handleCallSendOffer(e, t, a) {
          const s = this.tinode.getTopic(e);
          s && s.videoCall("offer", t, a);
        }
        handleCallIceCandidate(e, t, a) {
          const s = this.tinode.getTopic(e);
          s && s.videoCall("ice-candidate", t, a);
        }
        handleCallSendAnswer(e, t, a) {
          const s = this.tinode.getTopic(e);
          s && s.videoCall("answer", t, a);
        }
        handleCallClose() {
          this.callTimeoutTimer && clearTimeout(this.callTimeoutTimer),
            this.setState({ callTopic: void 0, callState: 0 });
        }
        handleCallAcceptCall(e) {
          const t = this.tinode.getTopic(e);
          t &&
            (t.isSubscribed()
              ? (this.handleTopicSelected(this.state.callTopic),
                this.setState({ callState: 3 }))
              : this.setState({ callShouldStart: !0 }, () =>
                  this.handleTopicSelected(this.state.callTopic)
                ));
        }
        handleInfoMessage(e) {
          if ("call" == e.what)
            switch (e.event) {
              case "accept":
                if (
                  Vt.Tinode.isMeTopicName(e.topic) &&
                  this.tinode.isMe(e.from)
                )
                  return void this.setState({
                    callTopic: null,
                    callState: 0,
                    callSeq: null,
                  });
                e.topic == this.state.callTopic &&
                  this.setState({ callState: 3 });
                break;
              case "hang-up":
                this.handleCallClose();
            }
        }
        handleDataMessage(e) {
          if (e.head && e.head.webrtc && e.head.webrtc == rs) {
            const t = this.tinode.getTopic(e.topic);
            if (t) {
              const a = t.latestMsgVersion(e.seq) || e;
              a.head &&
                a.head.webrtc &&
                a.head.webrtc == rs &&
                e.from != this.state.myUserId &&
                (0 == this.state.callState
                  ? this.setState({
                      callTopic: e.topic,
                      callState: 2,
                      callSeq: e.seq,
                    })
                  : this.handleCallHangup(e.topic, e.seq));
            } else
              console.warn(
                "Received vc data message from unknown topic",
                e.topic
              );
          }
        }
        render() {
          return t().createElement(
            "div",
            { id: "app-container", ref: this.selfRef },
            this.state.contextMenuVisible
              ? t().createElement(ra, {
                  tinode: this.tinode,
                  bounds: this.state.contextMenuBounds,
                  clickAt: this.state.contextMenuClickAt,
                  params: this.state.contextMenuParams,
                  items: this.state.contextMenuItems,
                  hide: this.handleHideContextMenu,
                  onShowAlert: this.handleShowAlert,
                  onAction: this.handleContextMenuAction,
                  onTopicRemoved: (e) => {
                    e == this.state.topicSelected &&
                      this.handleTopicSelected(null);
                  },
                  onError: this.handleError,
                })
              : null,
            this.state.forwardDialogVisible
              ? t().createElement(as, {
                  tinode: this.tinode,
                  contacts: this.state.chatList,
                  topicSelected: this.state.topicSelected,
                  myUserId: this.state.myUserId,
                  hide: this.handleHideForwardDialog,
                  onInitFind: this.tnInitFind,
                  searchResults: this.state.searchResults,
                  onSearchContacts: this.handleSearchContacts,
                  onTopicSelected: this.handleStartTopicRequest,
                })
              : null,
            this.state.callTopic && 2 == this.state.callState
              ? t().createElement(cs, {
                  tinode: this.tinode,
                  onClose: this.handleCallClose,
                  topic: this.state.callTopic,
                  seq: this.state.callSeq,
                  callState: this.state.callState,
                  onRinging: this.handleCallRinging,
                  onAcceptCall: this.handleCallAcceptCall,
                  onReject: this.handleCallHangup,
                })
              : null,
            t().createElement(Wt, {
              visible: this.state.alertVisible,
              title: this.state.alertParams.title,
              content: this.state.alertParams.content,
              onReject: this.state.alertParams.onReject
                ? () => {
                    this.setState({ alertVisible: !1 });
                  }
                : null,
              reject: this.state.alertParams.reject,
              onConfirm: () => {
                this.setState({ alertVisible: !1 }),
                  this.state.alertParams.onConfirm();
              },
              confirm: this.state.alertParams.confirm,
            }),
            t().createElement(Qn, {
              tinode: this.tinode,
              connected: this.state.connected,
              displayMobile: this.state.displayMobile,
              hideSelf:
                this.state.displayMobile &&
                "sidepanel" !== this.state.mobilePanel,
              state: this.state.sidePanelSelected,
              title: this.state.sidePanelTitle,
              avatar: this.state.sidePanelAvatar,
              trustedBadges: this.state.myTrustedBadges,
              login: this.state.login,
              persist: this.state.persist,
              myUserId: this.state.myUserId,
              loginDisabled: this.state.loginDisabled,
              loadSpinnerVisible: this.state.loadSpinnerVisible,
              errorText: this.state.errorText,
              errorLevel: this.state.errorLevel,
              errorAction: this.state.errorAction,
              errorActionText: this.state.errorActionText,
              topicSelected: this.state.topicSelected,
              chatList: this.state.chatList,
              credMethod: this.state.credMethod,
              credCode: this.state.credCode,
              credToken: this.state.credToken,
              transport: this.state.transport,
              messageSounds: this.state.messageSounds,
              desktopAlerts: this.state.desktopAlerts,
              desktopAlertsEnabled: this.state.desktopAlertsEnabled,
              incognitoMode: this.state.incognitoMode,
              serverAddress: this.state.serverAddress,
              secureConnection: this.state.secureConnection,
              serverVersion: this.state.serverVersion,
              onGlobalSettings: this.handleGlobalSettings,
              onSignUp: this.handleNewAccount,
              onSettings: this.handleSettings,
              onNavigate: this.basicNavigator,
              onLoginRequest: this.handleLoginRequest,
              onPersistenceChange: this.handlePersistenceChange,
              onCreateAccount: this.handleNewAccountRequest,
              onUpdateAccountDesc: this.handleTopicUpdateRequest,
              onUpdatePassword: this.handleUpdatePasswordRequest,
              onUpdateAccountTags: this.handleUpdateAccountTagsRequest,
              onTogglePushNotifications: this.toggleFCMToken,
              onToggleMessageSounds: this.handleToggleMessageSounds,
              onToggleIncognitoMode: this.handleToggleIncognitoMode,
              onCredAdd: this.handleCredAdd,
              onCredDelete: this.handleCredDelete,
              onCredConfirm: this.handleCredConfirm,
              onTopicSelected: this.handleTopicSelected,
              onCreateTopic: this.handleStartTopicRequest,
              onLogout: this.handleLogout,
              onDeleteAccount: this.handleDeleteAccount,
              onShowAlert: this.handleShowAlert,
              onCancel: this.handleSidepanelCancel,
              onError: this.handleError,
              onValidateCredentials: this.handleValidateCredentialsRequest,
              onPasswordResetRequest: this.handlePasswordResetRequest,
              onResetPassword: this.handleResetPassword,
              onShowArchive: this.handleShowArchive,
              onShowBlocked: this.handleShowBlocked,
              onInitFind: this.tnInitFind,
              searchResults: this.state.searchResults,
              onSearchContacts: this.handleSearchContacts,
              showContextMenu: this.handleShowContextMenu,
            }),
            t().createElement(fn, {
              tinode: this.tinode,
              connected: this.state.connected,
              ready: this.state.ready,
              online: this.state.topicSelectedOnline,
              acs: this.state.topicSelectedAcs,
              displayMobile: this.state.displayMobile,
              viewportWidth: this.state.viewportWidth,
              viewportHeight: this.state.viewportHeight,
              hideSelf:
                this.state.displayMobile &&
                ("topic-view" !== this.state.mobilePanel ||
                  this.state.infoPanel),
              topic: this.state.topicSelected,
              myUserId: this.state.myUserId,
              myUserName: this.state.sidePanelTitle,
              serverVersion: this.state.serverVersion,
              serverAddress: this.state.serverAddress,
              applicationVisible: this.state.applicationVisible,
              forwardMessage: this.state.forwardMessage,
              onCancelForwardMessage: this.handleHideForwardDialog,
              callTopic: this.state.callTopic,
              callSeq: this.state.callSeq,
              callState: this.state.callState,
              onCallHangup: this.handleCallHangup,
              onCallInvite: this.handleCallInvite,
              onCallSendOffer: this.handleCallSendOffer,
              onCallIceCandidate: this.handleCallIceCandidate,
              onCallSendAnswer: this.handleCallSendAnswer,
              errorText: this.state.errorText,
              errorLevel: this.state.errorLevel,
              errorAction: this.state.errorAction,
              errorActionText: this.state.errorActionText,
              newTopicParams: this.state.newTopicParams,
              onHideMessagesView: this.handleHideMessagesView,
              onError: this.handleError,
              onNewTopicCreated: this.handleNewTopicCreated,
              showContextMenu: this.handleShowContextMenu,
              onChangePermissions: this.handleChangePermissions,
              onNewChat: this.handleNewChatInvitation,
              sendMessage: this.handleSendMessage,
              onVideoCallClosed: this.handleCallClose,
            }),
            this.state.infoPanel
              ? t().createElement(Fs, {
                  tinode: this.tinode,
                  connected: this.state.connected,
                  displayMobile: this.state.displayMobile,
                  topic: this.state.topicSelected,
                  searchableContacts: this.state.searchableContacts,
                  myUserId: this.state.myUserId,
                  panel: this.state.infoPanel,
                  errorText: this.state.errorText,
                  errorLevel: this.state.errorLevel,
                  errorAction: this.state.errorAction,
                  errorActionText: this.state.errorActionText,
                  onNavigate: this.infoNavigator,
                  onTopicDescUpdateRequest: this.handleTopicUpdateRequest,
                  onShowAlert: this.handleShowAlert,
                  onChangePermissions: this.handleChangePermissions,
                  onMemberUpdateRequest: this.handleMemberUpdateRequest,
                  onDeleteTopic: this.handleDeleteTopicRequest,
                  onDeleteMessages: this.handleDeleteMessagesRequest,
                  onLeaveTopic: this.handleLeaveUnsubRequest,
                  onBlockTopic: this.handleBlockTopicRequest,
                  onReportTopic: this.handleReportTopic,
                  onAddMember: this.handleManageGroupMembers,
                  onTopicTagsUpdateRequest: this.handleTagsUpdateRequest,
                  onTopicUnArchive: this.handleUnarchive,
                  onInitFind: this.tnInitFind,
                  onError: this.handleError,
                  showContextMenu: this.handleShowContextMenu,
                })
              : null
          );
        }
      }
      const ti = (0, i.injectIntl)(ei),
        { params: ai } = hn.parseUrlHash(window.location.hash),
        si =
          (ai && ai.hl) ||
          (navigator.languages && navigator.languages[0]) ||
          navigator.language ||
          navigator.userLanguage ||
          "en",
        ni = si.toLowerCase().split(/[-_]/)[0],
        ii = o[si] ? si : o[ni] ? ni : "en",
        oi = o[ii];
      document.getElementsByTagName("html")[0].setAttribute("lang", ii),
        n().render(
          t().createElement(
            t().StrictMode,
            null,
            t().createElement(
              i.IntlProvider,
              { locale: si, messages: oi, textComponent: t().Fragment },
              t().createElement(ti, null)
            )
          ),
          document.getElementById("mountPoint")
        );
    })();
})();
//# sourceMappingURL=index.prod.js.map
