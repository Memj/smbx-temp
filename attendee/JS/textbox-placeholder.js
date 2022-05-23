  $(document).ready(function () {
      $('form').find("input[type=textarea], textarea").each(function (ev) {
          if (!$(this).val()) {
              $(this).attr("placeholder", "Message");
          }
      });
  });