<template>
  <main class="sign-up">
		<div class="sign-in">
			<div class="title">sign in</div>
			<form action="#" method="post">
				<div class="error">
					<input type="email" name="email" id="email" placeholder="Your Email.." value="" tabindex="1" />
				</div>
				<div>
					<input type="password" name="password" id="password" placeholder="Your password.." value="" tabindex="1" />
				</div>
				<div class="main-button">
					<button>sign in</button>
					<a href="#">Forgot your Password</a>
				</div>
			</form>
		</div>
		<div class="register">
			<div class="title">register</div>
			<form action="#" method="post">
				<div>
					<input type="email" name="email" id="email" placeholder="Your Email.." value="" tabindex="1" />
				</div>
				<div>
					<input type="password" name="password" id="password" placeholder="Your password.." value="" tabindex="1" />
				</div>
				<div>
					<input type="password" name="password" id="password" placeholder="Confirm password.." value="" tabindex="1" />
				</div>			
				<div class="checkbox">
					<input type="checkbox" id="checkbox" />
					<label for="checkbox"></label>
				</div>
				<div class="text">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</div>
				<div class="main-button">
					<button>Create Account</button>	
					<div class="text">
						By clicking ‘Create Account’, you agree to our 	
						<a href="#">
							Privacy Policy
						</a>				
					</div>
				</div>
			</form>
		</div>
	</main>
</template>
