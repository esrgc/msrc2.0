/* dual stage click event for nested advisGroup on committees page*/
const advisGroup = () => {
   if ($('#advisDiv').is(':visible')) {
    $(location.hash).trigger('click');
  } else {
    $('#advisGroup').trigger('click');
    $(location.hash).trigger('click');
  }
};

export { advisGroup }
