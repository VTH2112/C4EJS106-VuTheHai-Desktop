Pt2(1, -5, 4);


function Pt2(a, b, c) {
    if (a == 0 || b == 0 || c == 0) {
        console.log("a,b,c phải lớn hơn  > 0");
        return 0;
    } else {
        let delta = Math.pow(b, 2) - 4 * a * c;
        let x1 = 0;
        let x2 = 0;
        if (delta > 0) {
            if (a + b + c == 0) {
                x1 = 1;
                x2 = c / a;
                console.log("Pt có 2 nghiệm phân biệt & có ( a+b+c  = 0 ) : " + "x1 = " + x1 + ", x2 = " + x2);
            } else if (a - b + c == 0) {
                x1 = -1;
                x2 = -(c / a);
                console.log("Pt có 2  nghiệm phân biệt & có ( a-b+c = 0 ): " + "x1 = " + x1 + ", x2 = " + x2);
            } else {
                x1 = (-b + Math.sqrt(delta)) / (2 * a);
                x2 = (-b - Math.sqrt(delta)) / (2 * a);
                console.log("Pt có 2  nghiệm phân biệt : " + "x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2));
            }

        } else if (delta == 0) {
            let Nkep = x1 = x2 = -(b / (2 * a));
            console.log("Pt có nghiệm kép " + "x1 = x2 = " + Nkep);
        } else {
            console.log("Pt vô nghiệm");
        }

    };
};

avg(10,7.5,7,7.5,7);
function avg (...marks){
    let totalMarks = 0;
    for( let i of marks){
        totalMarks += i;
    }
    avgMarks = (totalMarks / marks.length).toFixed(2);
    if(avgMarks >= 0 && avgMarks <4 ){
        alert(`Điểm trung bình của ${marks.length} môn học là: ${avgMarks}\nXếp loại : Yếu`);
    }else if( avgMarks < 6 ){
        alert(`Điểm trung bình của ${marks.length} môn học là: ${avgMarks}\nXếp loại : Trung Bình`);
    }else if( avgMarks < 8 ){
        alert(`Điểm trung bình của ${marks.length} môn học là: ${avgMarks}\nXếp loại : Khá`);
    }else if(avgMarks <= 10){
        alert(`Điểm trung bình của ${marks.length} môn học là: ${avgMarks}\nXếp loại : Giỏi`);
    }
    else{
        alert("Điểm trung bình phải từ 0 -> 10");
    }
}
