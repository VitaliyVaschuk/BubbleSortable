

function BubbleSort(A)
{
    var n = A.length;
    for (var i = 0; i < n-1; i++)
    { for (var j = 0; j < n-1-i; j++)
    { if (A[j+1] < A[j])
    { var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
    }
    }
    return A;
}

function Sort () {
    $('#out-field').empty();
    var numberString = $('#array-field').val();
    var numberArray = numberString.split(',');
    console.log(numberArray);
    var res = BubbleSort(numberArray);
    $('#out-field').append(res);
}
