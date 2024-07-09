import React, { useState } from "react";
import Recipes from "./Recipes";
import juiceThumbnail from '../images/juice-thumbnail.jpeg';
import burgerThumbnail from '../images/burger-thumbnail.jpeg';
import italianPizzaThumbnail from '../images/italian-pizza-thumbnail.jpeg';
import malaiBotiThumbnail from '../images/malai-boti-thumbnail.jpeg';
import tikkaBotiThumbnail from '../images/tikka-boti-thumbnail.jpeg';
import chickenBiryaniThumbnail from '../images/chicken-biryani-thumbnail.jpeg';
import beefBiryaniThumbnail from '../images/beef-biryani-thumbnail.jpeg';
import sindhiBiryaniThumbnail from '../images/sindhi-biryani-thumbnail.jpeg';
import bihariBotiThumbnail from '../images/bihari-boti-thumbnail.jpeg';
import frenchFriesThumbnail from '../images/french-fries-thumbnail.jpeg';
import pastaThumbnail from '../images/pasta-thumbnail.jpeg';

const MainPage = () => {
  const allRecipes = [
    {
      id: 1,
      name: 'Juice',
      description: 'A refreshing fruit juice.',
      ingredients: ['fresh fruit', 'water', 'sugar', 'ice cubes'],
      instructions: 'Blend the fresh fruit with water and sugar until smooth. Serve over ice cubes.',
      cookingTime: 5,
      thumbnail: juiceThumbnail,
    },
    {
      id: 2,
      name: 'Burger',
      description: 'A juicy and delicious burger.',
      ingredients: ['burger buns', 'ground beef', 'cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard'],
      instructions: 'Grill the ground beef patties until cooked. Assemble the burger with buns, cheese, lettuce, tomato, onion, pickles, ketchup, and mustard.',
      cookingTime: 20,
      thumbnail: burgerThumbnail,
    },
    {
      id: 3,
      name: 'Italian Pizza',
      description: 'A classic Italian pizza with tomato sauce and mozzarella.',
      ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'basil', 'olive oil'],
      instructions: 'Spread the tomato sauce on the pizza dough. Add mozzarella cheese and basil. Drizzle with olive oil. Bake in the oven until crust is golden brown.',
      cookingTime: 15,
      thumbnail: italianPizzaThumbnail,
    },
    {
      id: 4,
      name: 'Malai Boti',
      description: 'Tender chicken pieces marinated in a creamy blend of spices.',
      ingredients: ['chicken pieces', 'yogurt', 'cream', 'ginger-garlic paste', 'spices'],
      instructions: 'Marinate the chicken pieces in yogurt, cream, ginger-garlic paste, and spices. Grill until cooked through.',
      cookingTime: 25,
      thumbnail: malaiBotiThumbnail,
    },
    {
      id: 5,
      name: 'Tikka Boti',
      description: 'Spicy grilled chicken tikka boti.',
      ingredients: ['chicken pieces', 'yogurt', 'lemon juice', 'ginger-garlic paste', 'spices'],
      instructions: 'Marinate the chicken pieces in yogurt, lemon juice, ginger-garlic paste, and spices. Grill until cooked through.',
      cookingTime: 20,
      thumbnail: tikkaBotiThumbnail,
    },
    {
      id: 6,
      name: 'Chicken Biryani',
      description: 'A fragrant and flavorful rice dish with chicken.',
      ingredients: ['chicken', 'basmati rice', 'yogurt', 'spices', 'fried onions', 'saffron', 'mint', 'cilantro'],
      instructions: 'Cook the chicken with spices. Layer the cooked chicken and rice with yogurt, fried onions, saffron, mint, and cilantro. Steam until fully cooked.',
      cookingTime: 60,
      thumbnail: chickenBiryaniThumbnail,
    },
    {
      id: 7,
      name: 'Beef Biryani',
      description: 'A rich and aromatic rice dish with beef.',
      ingredients: ['beef', 'basmati rice', 'yogurt', 'spices', 'fried onions', 'saffron', 'mint', 'cilantro'],
      instructions: 'Cook the beef with spices. Layer the cooked beef and rice with yogurt, fried onions, saffron, mint, and cilantro. Steam until fully cooked.',
      cookingTime: 75,
      thumbnail: beefBiryaniThumbnail,
    },
    {
      id: 8,
      name: 'Sindhi Biryani',
      description: 'A spicy and flavorful biryani from Sindh.',
      ingredients: ['chicken or beef', 'basmati rice', 'potatoes', 'yogurt', 'spices', 'fried onions', 'saffron', 'mint', 'cilantro'],
      instructions: 'Cook the meat with spices and potatoes. Layer the cooked meat and rice with yogurt, fried onions, saffron, mint, and cilantro. Steam until fully cooked.',
      cookingTime: 75,
      thumbnail: sindhiBiryaniThumbnail,
    },
    {
      id: 9,
      name: 'Bihari Boti',
      description: 'Tender beef pieces marinated in a rich blend of spices.',
      ingredients: ['beef pieces', 'yogurt', 'mustard oil', 'spices'],
      instructions: 'Marinate the beef pieces in yogurt, mustard oil, and spices. Grill until cooked through.',
      cookingTime: 30,
      thumbnail: bihariBotiThumbnail,
    },
    {
      id: 10,
      name: 'French Fries',
      description: 'Crispy and golden french fries.',
      ingredients: ['potatoes', 'salt', 'oil'],
      instructions: 'Cut the potatoes into strips. Fry in hot oil until golden and crispy. Season with salt.',
      cookingTime: 15,
      thumbnail: frenchFriesThumbnail,
    },
    {
      id: 11,
      name: 'Pasta',
      description: 'A simple and delicious pasta dish.',
      ingredients: ['pasta', 'olive oil', 'garlic', 'parmesan cheese', 'parsley'],
      instructions: 'Cook the pasta according to the package instructions. In a pan, sauté garlic in olive oil. Toss the cooked pasta with the garlic oil, parmesan cheese, and parsley.',
      cookingTime: 20,
      thumbnail: pastaThumbnail,
    },
  ];


  const [recipes, setRecipes] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  
  let errMsg = document.querySelector(".error-msg");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const getData = async () => {
    const filteredRecipes = allRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredRecipes.length === 0){
      errMsg.innerText = "No Result Found";
    }

    console.log(filteredRecipes)
    setRecipes(filteredRecipes)
  };

  return (
    <>
      <div className="container my-5">
        <div className="heading text-center">
          <h1>Food Recipe App</h1>
        </div>
        <div className="searchBar d-flex justify-content-center align-items-center my-5">
          <input
            value={searchTerm}
            type="text"
            placeholder="Search For Recipe"
            onChange={handleSearchInput}
          />
          <button className="btn btn-danger" onClick={getData}>
            Search
          </button>
        </div>
        <div className="error-msg-box">
          <p className="error-msg"></p>
        </div>
        <div className="">
          <Recipes recipes={recipes} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
