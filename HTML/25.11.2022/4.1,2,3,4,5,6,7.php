<?php
echo 'HTML, CSS, JS, PHP и всякое такое';

echo "<br/>";
echo "<br/>";

$studentsArray = array(
    'student0' => 'value0',
    'student1' => 'value1',
    'student2' => 'value2',
);
print_r($studentsArray);

echo "<br/>";
echo "<br/>";

$one = 1+2;
$two = $one*2;
$three = $two ** 2;
$four = $three/2;
$five = $four%2;
$six = $five+$one;
echo "$one, $two, $three, $four, $five, $six";

echo "<br/>";
echo "<br/>";

$first = 1;
$second = 2;
$Re = $first;
$first = $second;
$second = $Re;
echo '$first=', $first, ' $second=', $second;

echo "<br/>";
echo "<br/>";

$n=1;
//$n=2;
if ($n%2==0) {
    echo ('Четное');
} else {
    echo ('Нечетное');
}

echo "<br/>";
echo "<br/>";

$strangeArray=array();
$strangeArray[0][0][0]=1;
print_r ($strangeArray);

echo "<br/>";
echo "<br/>";

$i=245;
$a=0;
$iArray=[];
while ($i < 287) {
    if ($i%2==0) {
        $iArray[$a] = $i;
        $i += 2;
        $a++;
    } else {
        $i++;
}};
foreach ($iArray as $value) {
    echo $value, ' ';
};
?>