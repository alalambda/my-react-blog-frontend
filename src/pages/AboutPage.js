import styled from "styled-components";

const AboutPage = () => (
    <>
        <h1>About</h1>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue ipsum at elit scelerisque dictum. Suspendisse id vestibulum mi, a pretium nunc. Vivamus eget purus eu risus malesuada malesuada. Aliquam ullamcorper ac mauris vel venenatis. In aliquet, neque non tincidunt mollis, purus lorem lacinia velit, ut euismod diam mauris sed orci. Mauris hendrerit id orci ac condimentum. Phasellus ligula tellus, luctus et vestibulum vitae, luctus sed tortor. Cras blandit vestibulum lacus et interdum. Suspendisse eget sem turpis. Etiam gravida ac enim vitae vulputate. Sed dignissim ultrices scelerisque. Fusce iaculis erat lacinia, finibus urna feugiat, consequat turpis. Nulla placerat purus nec tellus iaculis, ut tincidunt ante rhoncus. Curabitur a faucibus tellus, ut egestas dolor. Aliquam ornare lorem eu eros consequat, quis ornare velit scelerisque. Suspendisse interdum turpis posuere nulla mattis, elementum sollicitudin velit tristique. </Paragraph>
        <Paragraph>Vivamus et tortor malesuada, venenatis risus vel, rhoncus ipsum. Aliquam erat volutpat. Nullam interdum nisi et urna cursus, cursus tempus lacus faucibus. Sed interdum nisl ut urna fringilla, a facilisis ipsum pharetra. Pellentesque a purus convallis, cursus erat et, euismod eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc mollis vulputate eros eu eleifend. Vivamus tempus ultricies est, quis accumsan justo. </Paragraph>
        <Paragraph>Curabitur in aliquet dui. Vestibulum placerat posuere leo, nec posuere diam hendrerit porttitor. Nullam finibus consectetur magna, sit amet dapibus odio iaculis sit amet. Proin faucibus elementum justo quis feugiat. Vivamus sed justo quam. Fusce maximus arcu at ullamcorper aliquet. Donec quis lorem id dolor iaculis efficitur. Ut condimentum orci in enim finibus, sit amet feugiat massa tincidunt. Proin pharetra eget quam nec ornare. Vestibulum eget turpis lorem. Nullam luctus volutpat leo quis imperdiet. Nulla feugiat augue urna, eget dictum orci finibus nec. Ut auctor finibus ex, non hendrerit velit aliquam nec. Aliquam finibus est quis eros mollis, quis pretium ex dapibus. Etiam sapien magna, feugiat id imperdiet sit amet, varius eu neque.</Paragraph>
    </>
);

const Paragraph = styled.p`
    margin: 30px 0;
`;

export default AboutPage;