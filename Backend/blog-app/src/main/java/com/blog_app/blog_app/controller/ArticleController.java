package com.blog_app.blog_app.controller;

import com.blog_app.blog_app.entity.Article;
import com.blog_app.blog_app.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @PostMapping("/article")
    public Article createArticle(@RequestBody Article article){
        return articleService.createArticle(article);
    }


    @GetMapping("/article/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable long id){
        Article article = articleService.getArticleById(id);
        if (article == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(article);
    }

    @PutMapping("/article/{id}")
    public ResponseEntity<Article> updateArticle(@RequestBody Article article, @PathVariable Long id){
        Article article1 = articleService.getArticleById(id);
        if(article == null){
            return ResponseEntity.notFound().build();
        }
        article1.setTitle(article.getTitle());
        article1.setDescription(article.getDescription());
        article1.setImg_url(article.getImg_url());
        Article updatedArticle = articleService.updateArticle(article1);
        return ResponseEntity.ok(updatedArticle);
    }

    @GetMapping("/article")
    public List<Article> getAllArticle(){
        return articleService.getAllArticle();
    }


    @DeleteMapping("/article/{id}")
    public ResponseEntity<Article> deleteArticle(@PathVariable Long id){
        Article article = articleService.getArticleById(id);
        if (article == null)
            return ResponseEntity.notFound().build();
        articleService.deleteArticle(article);
        return ResponseEntity.ok().build();
    }
}
