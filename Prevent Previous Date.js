function RevisedDeliveryDateOnChange(executionContext) {
    var formContext = executionContext.getFormContext();

    var RevisedDeliveryDate = formContext.getAttribute("intellik_reviseddeliverydate").getValue();
    var RevisedDeliveryDate1 = formContext.getControl("intellik_reviseddeliverydate");

    if (RevisedDeliveryDate != null) {
        RevisedDeliveryDate.setHours(0, 0, 0, 0);

        var today = new Date();
        today.setHours(0, 0, 0, 0);

        if (RevisedDeliveryDate >= today) {
            RevisedDeliveryDate1.clearNotification("DATE");
        }
        else {
            RevisedDeliveryDate1.setNotification("You Can't Select Previous Date. You Must be Select Current Date", "DATE");
        }
    }
}



///======================================================================



function SetStageUpdatedate(executionContext) {
    var formContext = executionContext.getFormContext();

    var intellik_stageupdatedate = formContext.getAttribute("intellik_stageupdatedate").getValue();
    var intellik_stageupdatedate1 = formContext.getControl("intellik_stageupdatedate");

    if (intellik_stageupdatedate != null) {
        intellik_stageupdatedate.setHours(0, 0, 0, 0);

        var today = new Date();
        today.setHours(0, 0, 0, 0);

        if (intellik_stageupdatedate <= today) {
            intellik_stageupdatedate1.clearNotification("DATE");
        }
        else {
            intellik_stageupdatedate1.setNotification("Date selected is invalid.", "DATE");
        }
    }
}

function setStageUpdateDate1(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();
    var stageUpdateDate = formContext.getAttribute("intellik_stageupdatedate").getValue();
    if (stageUpdateDate == null) {
        //var stageUpdateDate = new Date(new Date().toISOString().split('T')[0]);
        var stageUpdateDate1 = new Date();

        formContext.getAttribute("intellik_stageupdatedate").setValue(stageUpdateDate1);
    }
}


function RevertrequiredbyDateOnChange(executionContext) {
    var formContext = executionContext.getFormContext();

    var Revertrequiredby = formContext.getAttribute("threekts_revertrequiredby").getValue();
    var Revertrequiredby1 = formContext.getControl("threekts_revertrequiredby");

    if (Revertrequiredby != null) {
        Revertrequiredby.setHours(0, 0, 0, 0);

        var today = new Date();
        today.setHours(0, 0, 0, 0);

        if (Revertrequiredby >= today) {
            Revertrequiredby1.clearNotification("DATE");
        }
        else {

            Revertrequiredby1.setNotification("Invalid Date Selection: Revert by cannot be less than today’s date, (back dated not allowed), please select date greater than today or today’s date.", "DATE");

        }
    }
}





















function SetStageUpdatedate(executionContext) {
    var formContext = executionContext.getFormContext();

    var intellik_fabricsubmittedon = formContext.getAttribute("intellik_fabricsubmittedon").getValue();
    var intellik_committedreadydatefromdid = formContext.getAttribute("intellik_committedreadydatefromdid").getValue();

    if (intellik_fabricsubmittedon == null) {
        formContext.getAttribute("intellik_passfailna").setValue(2);
    }
    else if (intellik_committedreadydatefromdid == null) {
        formContext.getAttribute("intellik_passfailna").setValue(2);
    }
    else if (intellik_fabricsubmittedon <= intellik_committedreadydatefromdid) {
        formContext.getAttribute("intellik_passfailna").setValue(0);
    }
    else {
        formContext.getAttribute("intellik_passfailna").setValue(1);
    }
}



























function restrictDateSelection(executionContext) {
    // Get the form context
    var formContext = executionContext.getFormContext();

    // Get today's date
    var today = new Date();

    // Calculate the date 15 days from today
    var maxDate = new Date();
    maxDate.setDate(today.getDate() + 15);

    // Retrieve the date field control
    var dateField = formContext.getControl("scheduledend"); // Replace with your date field name

    if (dateField) {
        // Set the minimum and maximum date for the control
        dateField.getAttribute().setValue(today); // Set default to today

        // Attach event handler to onChange event
        dateField.addOnChange(validateDateRange);

        // Initial validation
        validateDateRange(executionContext);
    }
}

function validateDateRange(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();

    var kkk_nextscheduledate = formContext.getAttribute("kkk_nextscheduledate").getValue(); // Replace with your date field name
    var nextscheduledate = formContext.getControl("kkk_nextscheduledate");

    if (kkk_nextscheduledate != null) {
        kkk_nextscheduledate.setHours(0, 0, 0, 0);

        // Get today's date
        var today = new Date();
        today.setHours(0, 0, 0, 0);

        // Calculate the date 15 days from today
        var maxDate = new Date();
        maxDate.setDate(today.getDate() + 15);

        maxDate.setHours(0, 0, 0, 0);

        if (kkk_nextscheduledate >= today && kkk_nextscheduledate <= maxDate) {
            nextscheduledate.clearNotification("DATE");
            // Reset date to today's date
        }
        else {
            nextscheduledate.setNotification("Please enter relevant date.", "DATE");
        }
    }
}


