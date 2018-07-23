<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Serializer\SerializerInterface;

use App\Entity\Recipe;

/**
 * Class HomeController
 * @package App\Controller
 */
class HomeController extends Controller
{
    /**
     * @param SerializerInterface $serializer
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @Route("/", name="site.home")
     */
    public function homeAction(SerializerInterface $serializer)
    {
        return $this->render('site/home.html.twig', [
            // Pass an array as props
            'props' => $serializer->normalize([]),
            'initialState' => $serializer->normalize([
                'loading' => false
            ]),
        ]);
    }
}
